import React, { createContext, useContext, useEffect, useState } from 'react';
import { 
  User, 
  onAuthStateChanged, 
  signInWithPopup, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut as firebaseSignOut,
  sendPasswordResetEmail
} from 'firebase/auth';
import { 
  doc, 
  getDoc, 
  setDoc, 
  updateDoc, 
  collection, 
  onSnapshot 
} from 'firebase/firestore';
import { auth, db, googleProvider, handleFirestoreError, OperationType } from '../lib/firebase';
import { StudentProfile, StudentProgress } from '../types';
import { MOCK_STUDENTS, MOCK_TEACHER } from '../data/mockStudentAnalytics';

interface AuthContextType {
  currentUser: User | null;
  userProfile: StudentProfile | null;
  lessonProgressMap: Record<string, StudentProgress>;
  isLoading: boolean;
  authError: string | null;
  isTeacher: boolean;
  isAdmin: boolean;
  isStudent: boolean;
  loginWithGoogle: () => Promise<void>;
  loginWithEmail: (email: string, pass: string) => Promise<void>;
  registerWithEmail: (email: string, pass: string, fullName: string, studentCode: string, role: 'student' | 'teacher') => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  setUserRole: (role: 'student' | 'teacher') => Promise<void>;
  logout: () => Promise<void>;
  updateUserProfile: (data: Partial<StudentProfile>) => Promise<void>;
  saveLessonProgress: (lessonId: string, progressData: Partial<StudentProgress>) => Promise<void>;
  switchDemoProfile: (profileId: string) => void;
  clearAuthError: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<StudentProfile | null>(() => {
    // Default fallback to first mock student if not signed in yet
    return MOCK_STUDENTS[0];
  });
  const [lessonProgressMap, setLessonProgressMap] = useState<Record<string, StudentProgress>>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [authError, setAuthError] = useState<string | null>(null);

  // Monitor Firebase Auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      if (user) {
        try {
          const userDocRef = doc(db, 'users', user.uid);
          const userSnap = await getDoc(userDocRef);

          if (userSnap.exists()) {
            const data = userSnap.data() as StudentProfile;
            setUserProfile({
              ...data,
              id: data.id || user.uid,
              uid: data.uid || user.uid
            });
          } else {
            // Initial profile creation if not exists yet
            const isInstructor = user.email === 'khanhn@fpt.edu.vn';
            const defaultRole = isInstructor ? 'teacher' : 'student';
            const initialProfile: StudentProfile = {
              id: user.uid,
              uid: user.uid,
              code: isInstructor ? 'GV-KHANH' : (user.email?.split('@')[0]?.toUpperCase() || `PS${Math.floor(10000 + Math.random() * 90000)}`),
              fullName: user.displayName || (isInstructor ? 'Thầy Nguyễn Nam Khánh' : (user.email?.split('@')[0] || 'Sinh viên FPT')),
              email: user.email || '',
              avatar: user.photoURL || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.uid}`,
              classGroup: isInstructor ? 'Bộ môn CNTT • FPT Polytechnic' : 'WD18301 - Lập trình Web',
              overallProgress: isInstructor ? 100 : 15,
              completedLessons: isInstructor ? 75 : 1,
              totalLessons: 75,
              averageQuizScore: isInstructor ? 98 : 85,
              xp: isInstructor ? 9999 : 250,
              streakDays: isInstructor ? 45 : 3,
              atRisk: false,
              lastActive: 'Vừa xong',
              weakObjectives: [],
              bookmarkCount: 0,
              role: defaultRole,
              rankTitle: isInstructor ? 'Giảng viên Cao cấp' : 'Tập sự JS'
            };
            await setDoc(userDocRef, initialProfile);
            setUserProfile(initialProfile);
          }

          // Realtime listener for lesson progress subcollection
          const progressColRef = collection(db, 'users', user.uid, 'progress');
          const unsubsProgress = onSnapshot(progressColRef, (snapshot) => {
            const map: Record<string, StudentProgress> = {};
            snapshot.forEach((docSnap) => {
              map[docSnap.id] = docSnap.data() as StudentProgress;
            });
            setLessonProgressMap(map);
          }, (err) => {
            handleFirestoreError(err, OperationType.LIST, `users/${user.uid}/progress`);
          });

          return () => unsubsProgress();
        } catch (err: any) {
          console.error('Error fetching user profile:', err);
          handleFirestoreError(err, OperationType.GET, `users/${user.uid}`);
        }
      } else {
        // Not authenticated in Firebase, keep default student for prototype continuity
        setLessonProgressMap({});
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const loginWithGoogle = async () => {
    setAuthError(null);
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err: any) {
      console.error('Google Sign In Error:', err);
      setAuthError(err.message || 'Không thể đăng nhập bằng tài khoản Google');
      throw err;
    }
  };

  const loginWithEmail = async (email: string, pass: string) => {
    setAuthError(null);
    try {
      await signInWithEmailAndPassword(auth, email, pass);
    } catch (err: any) {
      console.error('Email Sign In Error:', err);
      let msg = 'Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin.';
      if (err.code === 'auth/invalid-credential' || err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password') {
        msg = 'Email hoặc mật khẩu không chính xác.';
      } else if (err.code === 'auth/invalid-email') {
        msg = 'Định dạng email không hợp lệ.';
      } else if (err.code === 'auth/too-many-requests') {
        msg = 'Quá nhiều lần thử sai. Vui lòng thử lại sau ít phút hoặc đặt lại mật khẩu.';
      }
      setAuthError(msg);
      throw new Error(msg);
    }
  };

  const registerWithEmail = async (
    email: string, 
    pass: string, 
    fullName: string, 
    studentCode: string, 
    role: 'student' | 'teacher'
  ) => {
    setAuthError(null);
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, pass);
      const isTeacherRole = role === 'teacher' || email.trim() === 'khanhn@fpt.edu.vn';
      const newProfile: StudentProfile = {
        id: cred.user.uid,
        uid: cred.user.uid,
        code: studentCode.trim().toUpperCase() || (isTeacherRole ? `GV${Math.floor(10 + Math.random() * 90)}` : `PS${Math.floor(10000 + Math.random() * 90000)}`),
        fullName: fullName.trim() || (isTeacherRole ? 'Giảng viên' : 'Học viên mới'),
        email: email.trim(),
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${cred.user.uid}`,
        classGroup: isTeacherRole ? 'Bộ môn CNTT • FPT Polytechnic' : 'WD18301 - Lập trình Web',
        overallProgress: isTeacherRole ? 100 : 0,
        completedLessons: isTeacherRole ? 75 : 0,
        totalLessons: 75,
        averageQuizScore: isTeacherRole ? 95 : 0,
        xp: isTeacherRole ? 5000 : 100, // Welcome bonus XP
        streakDays: 1,
        atRisk: false,
        lastActive: 'Vừa xong',
        weakObjectives: [],
        bookmarkCount: 0,
        role: isTeacherRole ? 'teacher' : 'student',
        rankTitle: isTeacherRole ? 'Giảng viên' : 'Tập sự JS'
      };
      await setDoc(doc(db, 'users', cred.user.uid), newProfile);
      setUserProfile(newProfile);
    } catch (err: any) {
      console.error('Register Error:', err);
      let msg = 'Đăng ký thất bại. Vui lòng thử lại.';
      if (err.code === 'auth/email-already-in-use') {
        msg = 'Email này đã được đăng ký. Vui lòng chọn Đăng nhập.';
      } else if (err.code === 'auth/weak-password') {
        msg = 'Mật khẩu quá ngắn, yêu cầu ít nhất 6 ký tự.';
      } else if (err.code === 'auth/invalid-email') {
        msg = 'Email không đúng định dạng.';
      }
      setAuthError(msg);
      throw new Error(msg);
    }
  };

  const resetPassword = async (emailToReset: string) => {
    setAuthError(null);
    try {
      await sendPasswordResetEmail(auth, emailToReset);
    } catch (err: any) {
      console.error('Password reset error:', err);
      let msg = 'Không thể gửi email đặt lại mật khẩu. Vui lòng kiểm tra lại địa chỉ email.';
      if (err.code === 'auth/user-not-found') {
        msg = 'Không tìm thấy tài khoản với email này.';
      } else if (err.code === 'auth/invalid-email') {
        msg = 'Địa chỉ email không hợp lệ.';
      }
      setAuthError(msg);
      throw new Error(msg);
    }
  };

  const setUserRole = async (newRole: 'student' | 'teacher') => {
    if (!userProfile) return;
    const isTeacherRole = newRole === 'teacher';
    const updated: StudentProfile = {
      ...userProfile,
      role: newRole,
      rankTitle: isTeacherRole ? 'Giảng viên' : 'Tập sự JS',
      code: userProfile.code.startsWith('PS') && isTeacherRole ? 'GV01' : userProfile.code
    };
    setUserProfile(updated);

    if (currentUser) {
      try {
        await updateDoc(doc(db, 'users', currentUser.uid), {
          role: newRole,
          rankTitle: updated.rankTitle,
          code: updated.code
        });
      } catch (err) {
        handleFirestoreError(err, OperationType.UPDATE, `users/${currentUser.uid}`);
      }
    }
  };

  const logout = async () => {
    try {
      await firebaseSignOut(auth);
      // Fallback to sample student #1 so app is still usable
      setUserProfile(MOCK_STUDENTS[0]);
    } catch (err) {
      console.error('Logout error:', err);
    }
  };

  const updateUserProfile = async (data: Partial<StudentProfile>) => {
    if (!userProfile) return;
    const updated: StudentProfile = { 
      ...userProfile, 
      ...data, 
      uid: userProfile.uid || userProfile.id,
      lastActive: 'Vừa xong' 
    };
    setUserProfile(updated);

    if (currentUser) {
      try {
        await updateDoc(doc(db, 'users', currentUser.uid), {
          ...data,
          uid: currentUser.uid,
          lastActive: 'Vừa xong'
        });
      } catch (err) {
        handleFirestoreError(err, OperationType.UPDATE, `users/${currentUser.uid}`);
      }
    }
  };

  const saveLessonProgress = async (lessonId: string, progressData: Partial<StudentProgress>) => {
    if (!userProfile) return;

    const existing = lessonProgressMap[lessonId] || {
      studentId: userProfile.id,
      lessonId,
      status: 'not_started',
      startedAt: new Date().toISOString(),
      lastAccessedAt: new Date().toISOString(),
      timeSpentMinutes: 0,
      completionPercentage: 0,
      quizAttempts: 0,
      bestQuizScore: 0,
      latestQuizScore: 0,
      exercisesCompleted: [],
      needsReviewObjectives: []
    };

    const merged: StudentProgress = {
      ...existing,
      ...progressData,
      lastAccessedAt: new Date().toISOString()
    };

    setLessonProgressMap(prev => ({ ...prev, [lessonId]: merged }));

    // Persist to Firestore if signed in
    if (currentUser) {
      try {
        const progressDocRef = doc(db, 'users', currentUser.uid, 'progress', lessonId);
        await setDoc(progressDocRef, merged, { merge: true });

        // Update overall stats in parent profile
        const allProgressValues = Object.values({ ...lessonProgressMap, [lessonId]: merged });
        const completedCount = allProgressValues.filter(p => p.status === 'completed' || p.status === 'mastered').length;
        const progressPct = Math.round((completedCount / (userProfile.totalLessons || 75)) * 100);
        
        await updateDoc(doc(db, 'users', currentUser.uid), {
          completedLessons: completedCount,
          overallProgress: progressPct,
          xp: (userProfile.xp || 0) + (progressData.status === 'completed' ? 50 : 10)
        });
      } catch (err) {
        handleFirestoreError(err, OperationType.WRITE, `users/${currentUser.uid}/progress/${lessonId}`);
      }
    }
  };

  // Quick switch between demo students/teacher for convenience
  const switchDemoProfile = (profileId: string) => {
    if (profileId === 'gv-khanh' || profileId === 'teacher' || profileId === 'gv-01') {
      setUserProfile(MOCK_TEACHER);
      return;
    }
    const found = MOCK_STUDENTS.find(s => s.id === profileId);
    if (found) {
      setUserProfile(found);
    }
  };

  const clearAuthError = () => setAuthError(null);

  // Computed role checks
  const isTeacher = userProfile?.role === 'teacher' || userProfile?.role === 'admin' || currentUser?.email === 'khanhn@fpt.edu.vn';
  const isAdmin = userProfile?.role === 'admin' || currentUser?.email === 'khanhn@fpt.edu.vn';
  const isStudent = !isTeacher;

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        userProfile,
        lessonProgressMap,
        isLoading,
        authError,
        isTeacher,
        isAdmin,
        isStudent,
        loginWithGoogle,
        loginWithEmail,
        registerWithEmail,
        resetPassword,
        setUserRole,
        logout,
        updateUserProfile,
        saveLessonProgress,
        switchDemoProfile,
        clearAuthError
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

