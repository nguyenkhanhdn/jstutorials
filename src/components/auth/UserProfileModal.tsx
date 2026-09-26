import React, { useState } from 'react';
import { 
  X, 
  User, 
  Mail, 
  Hash, 
  BookOpen, 
  Award, 
  Flame, 
  Zap, 
  LogOut, 
  Save, 
  CheckCircle2, 
  Shield, 
  Layers,
  Sparkles,
  Edit3,
  Users,
  GraduationCap,
  ArrowRight,
  KeyRound,
  ShieldCheck,
  AlertTriangle,
  Building,
  RefreshCw
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

interface UserProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToTeacher?: () => void;
}

export const UserProfileModal: React.FC<UserProfileModalProps> = ({ 
  isOpen, 
  onClose,
  onNavigateToTeacher 
}) => {
  const { 
    userProfile, 
    updateUserProfile, 
    setUserRole,
    resetPassword,
    logout, 
    currentUser, 
    isTeacher,
    switchDemoProfile,
    lessonProgressMap 
  } = useAuth();

  const [fullName, setFullName] = useState(userProfile?.fullName || '');
  const [studentCode, setStudentCode] = useState(userProfile?.code || '');
  const [classGroup, setClassGroup] = useState(userProfile?.classGroup || 'WD18301 - Lập trình Web');
  const [avatarUrl, setAvatarUrl] = useState(userProfile?.avatar || '');
  const [isEditing, setIsEditing] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState<string | null>(null);
  const [resetSent, setResetSent] = useState(false);
  const [isUpdatingRole, setIsUpdatingRole] = useState(false);

  // Sync state when modal opens or profile changes
  React.useEffect(() => {
    if (userProfile) {
      setFullName(userProfile.fullName || '');
      setStudentCode(userProfile.code || '');
      setClassGroup(userProfile.classGroup || 'WD18301 - Lập trình Web');
      setAvatarUrl(userProfile.avatar || '');
    }
  }, [userProfile]);

  if (!isOpen || !userProfile) return null;

  const currentRole = userProfile.role || (isTeacher ? 'teacher' : 'student');
  const isTeacherRole = currentRole === 'teacher' || currentRole === 'admin';

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateUserProfile({
      fullName: fullName.trim(),
      code: studentCode.trim().toUpperCase(),
      classGroup: classGroup.trim(),
      avatar: avatarUrl.trim()
    });
    setSavedSuccess('Cập nhật thông tin định danh thành công!');
    setIsEditing(false);
    setTimeout(() => setSavedSuccess(null), 2500);
  };

  const handleRoleToggle = async (newRole: 'student' | 'teacher') => {
    setIsUpdatingRole(true);
    await setUserRole(newRole);
    setSavedSuccess(
      newRole === 'teacher'
        ? 'Đã chuyển sang vai trò Giảng viên! Góc Giảng viên đã được kích hoạt trên thanh điều hướng.'
        : 'Đã chuyển sang vai trò Sinh viên! Các tính năng giảng viên đã được tự động ẩn.'
    );
    setIsUpdatingRole(false);
    setTimeout(() => setSavedSuccess(null), 3000);
  };

  const handlePasswordReset = async () => {
    if (!userProfile.email) return;
    try {
      await resetPassword(userProfile.email);
      setResetSent(true);
      setTimeout(() => setResetSent(false), 4000);
    } catch {
      // Handled
    }
  };

  const handleAvatarPreset = (seed: string) => {
    setAvatarUrl(`https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}`);
  };

  const completedCount = userProfile.completedLessons || 
    Object.values(lessonProgressMap).filter(p => p.status === 'completed' || p.status === 'mastered').length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 animate-in fade-in overflow-y-auto">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg border border-slate-200 overflow-hidden my-6 max-h-[90vh] flex flex-col">
        
        {/* Top Header */}
        <div className={`p-6 text-white relative transition-all ${
          isTeacherRole 
            ? 'bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900' 
            : 'bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900'
        }`}>
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-4">
            <div className="relative">
              <img 
                src={avatarUrl || userProfile.avatar} 
                alt={userProfile.fullName} 
                className={`w-16 h-16 rounded-2xl border-2 shadow-lg object-cover bg-slate-800 ${
                  isTeacherRole ? 'border-emerald-400' : 'border-indigo-400'
                }`}
              />
              <span className={`absolute -bottom-1 -right-1 px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider ${
                isTeacherRole ? 'bg-emerald-400 text-slate-950' : 'bg-indigo-400 text-slate-950'
              }`}>
                {isTeacherRole ? 'Giảng viên' : 'Sinh viên'}
              </span>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-black tracking-tight">{userProfile.fullName}</h3>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                  isTeacherRole ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/30' : 'bg-indigo-500/20 text-indigo-300 border border-indigo-400/30'
                }`}>
                  {userProfile.rankTitle || (isTeacherRole ? 'Giảng viên CNTT' : 'Tập sự JS')}
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300 mt-1">
                <span className="font-mono bg-white/15 px-2 py-0.5 rounded">{userProfile.code}</span>
                <span>•</span>
                <span>{userProfile.email}</span>
              </div>
              <div className="text-[11px] text-slate-300 mt-1 flex items-center gap-1.5">
                <span className={`w-2 h-2 rounded-full ${currentUser ? 'bg-emerald-400' : 'bg-amber-400'}`} />
                <span>Trạng thái: {currentUser ? 'Đã liên kết Cloud Firestore' : 'Chế độ trải nghiệm thử nghiệm'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs text-slate-700 flex-1">
          
          {savedSuccess && (
            <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center gap-2.5 animate-in fade-in">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="font-semibold text-xs leading-relaxed">{savedSuccess}</span>
            </div>
          )}

          {resetSent && (
            <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-800 flex items-center gap-2.5 animate-in fade-in">
              <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
              <span className="font-semibold text-xs leading-relaxed">Đã gửi liên kết khôi phục mật khẩu đến email {userProfile.email}!</span>
            </div>
          )}

          {/* ROLE SWITCHING / ACCESS CONTROL BOX */}
          <div className="p-4 rounded-2xl border-2 border-slate-200 bg-slate-50 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-indigo-600" />
                <span className="font-extrabold text-slate-900 uppercase tracking-wider text-xs">
                  Phân Quyền Vai Trò Hệ Thống
                </span>
              </div>
              <span className={`px-2 py-0.5 rounded-full text-xs font-black uppercase tracking-wider ${
                isTeacherRole ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' : 'bg-indigo-100 text-indigo-800 border border-indigo-300'
              }`}>
                {isTeacherRole ? '👨‍🏫 Vai trò: Giảng viên' : '🎓 Vai trò: Sinh viên'}
              </span>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              {isTeacherRole 
                ? 'Tài khoản Giảng viên có toàn quyền xem các tính năng quản lý lớp, bảng điểm quá trình và chẩn đoán EWS. Học sinh không được thấy các tính năng này.'
                : 'Tài khoản Sinh viên chỉ thấy giao diện học tập, lộ trình 17 modules, làm bài tập và tích lũy XP. Toàn bộ tính năng của Giảng viên được ẩn tự động.'}
            </p>

            <div className="pt-1 flex items-center gap-2">
              {isTeacherRole ? (
                <button
                  type="button"
                  disabled={isUpdatingRole}
                  onClick={() => handleRoleToggle('student')}
                  className="px-3.5 py-2 rounded-xl bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <GraduationCap className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Chuyển sang vai trò Sinh viên (Ẩn tính năng GV)</span>
                </button>
              ) : (
                <button
                  type="button"
                  disabled={isUpdatingRole}
                  onClick={() => handleRoleToggle('teacher')}
                  className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 transition-colors shadow-xs cursor-pointer"
                >
                  <Users className="w-3.5 h-3.5" />
                  <span>Kích hoạt vai trò Giảng viên (Mở khóa Góc Giảng viên)</span>
                </button>
              )}
            </div>
          </div>

          {/* TEACHER-SPECIFIC DASHBOARD OVERVIEW */}
          {isTeacherRole ? (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-extrabold text-slate-900 uppercase tracking-wider text-xs flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Tổng Quan Công Tác Giảng Dạy</span>
                </h4>
                {onNavigateToTeacher && (
                  <button
                    type="button"
                    onClick={onNavigateToTeacher}
                    className="text-emerald-700 hover:text-emerald-900 font-bold text-xs flex items-center gap-1 cursor-pointer"
                  >
                    <span>Vào Bảng Điều Khiển GV</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                )}
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="p-3.5 rounded-2xl bg-emerald-50/80 border border-emerald-200">
                  <div className="text-emerald-800 text-xs font-bold">Lớp phụ trách</div>
                  <div className="text-xl font-black text-emerald-950 mt-1">WD18301</div>
                  <div className="text-[11px] text-emerald-700 mt-0.5">25 Sinh viên</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-rose-50/80 border border-rose-200">
                  <div className="text-rose-800 text-xs font-bold">Cảnh báo EWS</div>
                  <div className="text-xl font-black text-rose-950 mt-1">4 SV</div>
                  <div className="text-[11px] text-rose-700 mt-0.5">Cần can thiệp sớm</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-indigo-50/80 border border-indigo-200">
                  <div className="text-indigo-800 text-xs font-bold">Hoàn thành TB</div>
                  <div className="text-xl font-black text-indigo-950 mt-1">62.4%</div>
                  <div className="text-[11px] text-indigo-700 mt-0.5">17 Modules</div>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div>
                  <div className="font-bold text-slate-900 text-xs">Các công cụ sư phạm độc quyền:</div>
                  <div className="text-[11px] text-slate-500">
                    Bảng điểm quá trình, Ma trận Bloom LO, Chẩn đoán quan niệm sai & Báo cáo giảng dạy.
                  </div>
                </div>
                {onNavigateToTeacher && (
                  <button
                    onClick={onNavigateToTeacher}
                    className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shrink-0 cursor-pointer shadow-xs"
                  >
                    Mở Bảng Điều Khiển
                  </button>
                )}
              </div>
            </div>
          ) : (
            /* STUDENT-SPECIFIC METRICS */
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-3">
                <div className="p-3 rounded-2xl bg-amber-50/70 border border-amber-200/80">
                  <div className="text-amber-800 text-xs font-bold flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    <span>Streak</span>
                  </div>
                  <div className="text-xl font-black text-amber-950 mt-1">
                    {userProfile.streakDays} <span className="text-xs font-normal text-amber-700">ngày</span>
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-indigo-50/70 border border-indigo-200/80">
                  <div className="text-indigo-800 text-xs font-bold flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5 fill-indigo-500 text-indigo-500" />
                    <span>Kinh nghiệm</span>
                  </div>
                  <div className="text-xl font-black text-indigo-950 mt-1">
                    {userProfile.xp} <span className="text-xs font-normal text-indigo-700">XP</span>
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-emerald-50/70 border border-emerald-200/80">
                  <div className="text-emerald-800 text-xs font-bold flex items-center gap-1">
                    <Award className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Hoàn thành</span>
                  </div>
                  <div className="text-xl font-black text-emerald-950 mt-1">
                    {userProfile.overallProgress}%
                  </div>
                </div>
              </div>

              {/* Learning Progress Summary */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5">
                <div className="flex items-center justify-between font-extrabold text-slate-900">
                  <span className="flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-indigo-600" />
                    <span>Tiến Độ Khóa Học Lập Trình Web</span>
                  </span>
                  <span className="text-indigo-700">
                    {completedCount} / {userProfile.totalLessons || 75} bài học
                  </span>
                </div>

                <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
                  <div 
                    className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-emerald-500 transition-all duration-500"
                    style={{ width: `${userProfile.overallProgress}%` }}
                  />
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                  <span>Lớp: {userProfile.classGroup}</span>
                  <span>Điểm quiz trung bình: <strong className="text-slate-900">{userProfile.averageQuizScore}%</strong></span>
                </div>
              </div>
            </div>
          )}

          {/* EDIT PROFILE / VIEW PROFILE DETAILS */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-extrabold text-slate-900 uppercase tracking-wider text-xs flex items-center gap-1.5">
                <Edit3 className="w-3.5 h-3.5 text-indigo-600" />
                <span>Thông Tin Hồ Sơ & Định Danh</span>
              </h4>
              <button
                type="button"
                onClick={() => setIsEditing(!isEditing)}
                className="text-indigo-600 hover:text-indigo-800 font-bold text-xs cursor-pointer"
              >
                {isEditing ? 'Hủy chỉnh sửa' : 'Chỉnh sửa'}
              </button>
            </div>

            {isEditing ? (
              <form onSubmit={handleSave} className="space-y-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Họ và tên *</label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={e => setFullName(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white text-xs font-semibold"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {isTeacherRole ? 'Mã Giảng viên' : 'Mã Sinh viên'}
                    </label>
                    <input
                      type="text"
                      value={studentCode}
                      onChange={e => setStudentCode(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white text-xs font-mono font-semibold"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {isTeacherRole ? 'Bộ môn phụ trách' : 'Lớp sinh hoạt'}
                    </label>
                    <input
                      type="text"
                      value={classGroup}
                      onChange={e => setClassGroup(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white text-xs font-semibold"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Chọn ảnh đại diện nhanh:</label>
                  <div className="flex items-center gap-2">
                    {['An', 'Ngoc', 'Long', 'Duc', 'Ha', 'Khai', 'Khanh'].map(seed => (
                      <button
                        key={seed}
                        type="button"
                        onClick={() => handleAvatarPreset(seed)}
                        className="w-8 h-8 rounded-full border border-slate-300 overflow-hidden hover:scale-110 transition-transform cursor-pointer"
                        title={seed}
                      >
                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}`} alt={seed} />
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer mt-2"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>Lưu Cập Nhật Hồ Sơ</span>
                </button>
              </form>
            ) : (
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-slate-400 text-xs">Họ và tên:</span>
                  <div className="font-bold text-slate-900 mt-0.5">{userProfile.fullName}</div>
                </div>
                <div>
                  <span className="text-slate-400 text-xs">{isTeacherRole ? 'Mã Giảng viên:' : 'Mã Sinh viên:'}</span>
                  <div className="font-bold text-slate-900 mt-0.5 font-mono">{userProfile.code}</div>
                </div>
                <div>
                  <span className="text-slate-400 text-xs">Email tài khoản:</span>
                  <div className="font-medium text-slate-700 mt-0.5">{userProfile.email}</div>
                </div>
                <div>
                  <span className="text-slate-400 text-xs">{isTeacherRole ? 'Bộ môn:' : 'Lớp học:'}</span>
                  <div className="font-medium text-slate-700 mt-0.5">{userProfile.classGroup}</div>
                </div>
              </div>
            )}
          </div>

          {/* SECURITY & PASSWORD RESET */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <KeyRound className="w-4 h-4 text-slate-600" />
              <div>
                <div className="font-bold text-slate-900 text-xs">Mật khẩu & Bảo mật</div>
                <div className="text-[11px] text-slate-500">Đặt lại mật khẩu bảo vệ tài khoản của bạn</div>
              </div>
            </div>

            <button
              type="button"
              onClick={handlePasswordReset}
              className="px-3 py-1.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 font-bold text-xs cursor-pointer transition-colors"
            >
              Gửi email đặt lại MK
            </button>
          </div>

          {/* QUICK DEMO SWITCHER INSIDE ACCOUNT MANAGEMENT */}
          <div className="pt-2 border-t border-slate-100">
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
              Chuyển nhanh sang hồ sơ mẫu khác:
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => {
                  switchDemoProfile('gv-khanh');
                  setSavedSuccess('Đã chuyển sang Thầy Nguyễn Nam Khánh (Giảng viên)');
                  setTimeout(() => setSavedSuccess(null), 2500);
                }}
                className={`p-2 rounded-xl text-left text-xs font-bold transition-all cursor-pointer border ${
                  userProfile.id === 'gv-khanh'
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-950 font-black'
                    : 'bg-slate-50 hover:bg-emerald-50/50 border-slate-200 text-slate-800'
                }`}
              >
                👨‍🏫 Thầy Nam Khánh (GV)
              </button>

              <button
                type="button"
                onClick={() => {
                  switchDemoProfile('sv-01');
                  setSavedSuccess('Đã chuyển sang SV Nguyễn Văn An (Sinh viên)');
                  setTimeout(() => setSavedSuccess(null), 2500);
                }}
                className={`p-2 rounded-xl text-left text-xs font-bold transition-all cursor-pointer border ${
                  userProfile.id === 'sv-01'
                    ? 'bg-indigo-50 border-indigo-300 text-indigo-950 font-black'
                    : 'bg-slate-50 hover:bg-indigo-50/50 border-slate-200 text-slate-800'
                }`}
              >
                🎓 SV Văn An (Sinh viên)
              </button>
            </div>
          </div>

        </div>

        {/* Footer with Logout */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
          <button
            onClick={async () => {
              await logout();
              onClose();
            }}
            className="px-3.5 py-2 rounded-xl text-rose-600 hover:bg-rose-50 border border-rose-200 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Đăng xuất</span>
          </button>

          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
          >
            Đóng
          </button>
        </div>

      </div>
    </div>
  );
};
