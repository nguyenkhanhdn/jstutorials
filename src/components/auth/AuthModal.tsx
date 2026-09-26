import React, { useState } from 'react';
import { 
  X, 
  LogIn, 
  UserPlus, 
  Mail, 
  Lock, 
  User, 
  Hash, 
  Sparkles, 
  AlertCircle, 
  CheckCircle2, 
  ArrowRight,
  Shield,
  GraduationCap,
  Users,
  Eye,
  EyeOff,
  KeyRound,
  Building
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { MOCK_STUDENTS, MOCK_TEACHER } from '../../data/mockStudentAnalytics';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'login' | 'register' | 'forgot';
}

export const AuthModal: React.FC<AuthModalProps> = ({ 
  isOpen, 
  onClose, 
  initialMode = 'login' 
}) => {
  const { 
    loginWithEmail, 
    registerWithEmail, 
    loginWithGoogle, 
    resetPassword,
    authError, 
    clearAuthError,
    switchDemoProfile
  } = useAuth();

  const [mode, setMode] = useState<'login' | 'register' | 'forgot'>(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [fullName, setFullName] = useState('');
  const [studentCode, setStudentCode] = useState('');
  const [role, setRole] = useState<'student' | 'teacher'>('student');
  const [classGroup, setClassGroup] = useState('WD18301 - Lập trình Web');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [validationError, setValidationError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearAuthError();
    setValidationError(null);
    setSuccessMsg(null);

    if (mode === 'forgot') {
      if (!email.trim()) {
        setValidationError('Vui lòng nhập địa chỉ email để nhận liên kết đặt lại mật khẩu.');
        return;
      }
      setIsSubmitting(true);
      try {
        await resetPassword(email.trim());
        setSuccessMsg(`Đã gửi email khôi phục mật khẩu đến ${email}. Vui lòng kiểm tra hộp thư!`);
      } catch {
        // Handled in context
      } finally {
        setIsSubmitting(false);
      }
      return;
    }

    if (mode === 'register') {
      if (password.length < 6) {
        setValidationError('Mật khẩu phải có ít nhất 6 ký tự.');
        return;
      }
      if (password !== confirmPassword) {
        setValidationError('Mật khẩu xác nhận không khớp. Vui lòng nhập lại.');
        return;
      }
      if (!fullName.trim()) {
        setValidationError('Vui lòng nhập Họ và tên.');
        return;
      }
    }

    setIsSubmitting(true);

    try {
      if (mode === 'login') {
        await loginWithEmail(email.trim(), password);
        setSuccessMsg('Đăng nhập thành công! Đang tải hồ sơ...');
        setTimeout(() => {
          onClose();
        }, 800);
      } else {
        await registerWithEmail(email.trim(), password, fullName.trim(), studentCode.trim(), role);
        setSuccessMsg(
          role === 'teacher'
            ? 'Đăng ký tài khoản Giảng viên thành công! Bạn có toàn quyền truy cập Bảng điều khiển giảng viên.'
            : 'Đăng ký tài khoản Sinh viên thành công! Hồ sơ đã được đồng bộ với Cloud.'
        );
        setTimeout(() => {
          onClose();
        }, 1100);
      }
    } catch {
      // Error handled in AuthContext
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoogleSignIn = async () => {
    clearAuthError();
    setValidationError(null);
    setIsSubmitting(true);
    try {
      await loginWithGoogle();
      setSuccessMsg('Đăng nhập Google thành công! Đang đồng bộ hồ sơ...');
      setTimeout(() => {
        onClose();
      }, 800);
    } catch {
      // Handled
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDemoQuickSwitch = (profileId: string) => {
    clearAuthError();
    setValidationError(null);
    switchDemoProfile(profileId);
    if (profileId === 'gv-khanh' || profileId === 'teacher') {
      setSuccessMsg('Đã đăng nhập vai trò Giảng viên (Thầy Nguyễn Nam Khánh) – Đã mở khóa Góc Giảng viên!');
    } else {
      setSuccessMsg('Đã đăng nhập vai trò Sinh viên – Các tính năng giảng viên được ẩn tự động.');
    }
    setTimeout(() => {
      onClose();
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 animate-in fade-in overflow-y-auto">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg border border-slate-200 overflow-hidden my-8">
        
        {/* Header Banner */}
        <div className="p-6 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-black uppercase tracking-wider bg-amber-400 text-slate-950">
              Web Master ID
            </span>
            <span className="text-xs text-indigo-200 font-medium">Hệ thống phân quyền Role-Based Access Control</span>
          </div>

          <h3 className="text-xl font-black tracking-tight">
            {mode === 'login' 
              ? 'Đăng Nhập Hệ Thống' 
              : mode === 'register' 
                ? 'Đăng Ký Tài Khoản Mới' 
                : 'Khôi Phục Mật Khẩu'}
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            {mode === 'login' 
              ? 'Đăng nhập để lưu tiến độ bài học, điểm quiz, XP và quyền hạn chuyên biệt.' 
              : mode === 'register'
                ? 'Lựa chọn đúng vai trò: Giảng viên để quản lý lớp, Sinh viên để làm bài học tập.'
                : 'Nhập email đã đăng ký để nhận liên kết thiết lập lại mật khẩu an toàn.'}
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-slate-200 bg-slate-50 text-xs font-bold">
          <button
            onClick={() => {
              setMode('login');
              clearAuthError();
              setValidationError(null);
            }}
            className={`flex-1 py-3 flex items-center justify-center gap-2 border-b-2 transition-all cursor-pointer ${
              mode === 'login' 
                ? 'border-indigo-600 text-indigo-700 bg-white' 
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <LogIn className="w-4 h-4" />
            <span>Đăng Nhập</span>
          </button>

          <button
            onClick={() => {
              setMode('register');
              clearAuthError();
              setValidationError(null);
            }}
            className={`flex-1 py-3 flex items-center justify-center gap-2 border-b-2 transition-all cursor-pointer ${
              mode === 'register' 
                ? 'border-indigo-600 text-indigo-700 bg-white' 
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <UserPlus className="w-4 h-4" />
            <span>Đăng Ký</span>
          </button>

          <button
            onClick={() => {
              setMode('forgot');
              clearAuthError();
              setValidationError(null);
            }}
            className={`py-3 px-4 flex items-center justify-center gap-1.5 border-b-2 transition-all cursor-pointer ${
              mode === 'forgot' 
                ? 'border-amber-500 text-amber-700 bg-white' 
                : 'border-transparent text-slate-400 hover:text-slate-700'
            }`}
          >
            <KeyRound className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Quên MK</span>
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 space-y-4 text-xs">
          
          {/* Notifications */}
          {(authError || validationError) && (
            <div className="p-3.5 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 flex items-start gap-2.5 animate-in fade-in">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <div className="text-xs font-medium leading-relaxed">
                {validationError || authError}
              </div>
            </div>
          )}

          {successMsg && (
            <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center gap-2.5 animate-in fade-in">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <div className="text-xs font-semibold leading-relaxed">
                {successMsg}
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* REGISTER ROLE SELECTION CARDS */}
            {mode === 'register' && (
              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-800">
                  Chọn vai trò tài khoản của bạn *
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <div
                    onClick={() => {
                      setRole('student');
                      if (studentCode.startsWith('GV')) setStudentCode('');
                    }}
                    className={`p-3 rounded-2xl border-2 cursor-pointer transition-all ${
                      role === 'student'
                        ? 'border-indigo-600 bg-indigo-50/70 shadow-xs'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div className={`w-7 h-7 rounded-xl flex items-center justify-center ${role === 'student' ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600'}`}>
                        <GraduationCap className="w-4 h-4" />
                      </div>
                      <div className="font-extrabold text-slate-900 text-xs">Sinh viên</div>
                    </div>
                    <p className="text-[11px] text-slate-600 mt-2 leading-relaxed">
                      Làm bài tập, nộp quiz, tích lũy XP và lộ trình cá nhân hóa. (Không thấy tính năng GV)
                    </p>
                  </div>

                  <div
                    onClick={() => {
                      setRole('teacher');
                      if (!studentCode || studentCode.startsWith('PS')) setStudentCode('GV01');
                    }}
                    className={`p-3 rounded-2xl border-2 cursor-pointer transition-all ${
                      role === 'teacher'
                        ? 'border-emerald-600 bg-emerald-50/70 shadow-xs'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div className={`w-7 h-7 rounded-xl flex items-center justify-center ${role === 'teacher' ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-600'}`}>
                        <Users className="w-4 h-4" />
                      </div>
                      <div className="font-extrabold text-slate-900 text-xs">Giảng viên</div>
                    </div>
                    <p className="text-[11px] text-slate-600 mt-2 leading-relaxed">
                      Toàn quyền mở khóa Bảng điều khiển GV, bảng điểm quá trình & chẩn đoán lỗi nhận thức.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* REGISTER PROFILE FIELDS */}
            {mode === 'register' && (
              <>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Họ và Tên *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      required
                      placeholder={role === 'teacher' ? 'Ví dụ: Thầy Nguyễn Nam Khánh' : 'Ví dụ: Nguyễn Văn An'}
                      value={fullName}
                      onChange={e => setFullName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-xs bg-slate-50 focus:bg-white font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {role === 'teacher' ? 'Mã Giảng viên' : 'Mã Sinh viên'}
                    </label>
                    <div className="relative">
                      <Hash className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        placeholder={role === 'teacher' ? 'GV-KHANH' : 'PS25101'}
                        value={studentCode}
                        onChange={e => setStudentCode(e.target.value)}
                        className="w-full pl-8 pr-2.5 py-2.5 rounded-xl border border-slate-200 focus:border-indigo-500 text-xs bg-slate-50 focus:bg-white font-mono"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {role === 'teacher' ? 'Bộ môn phụ trách' : 'Lớp sinh hoạt'}
                    </label>
                    <div className="relative">
                      <Building className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        value={classGroup}
                        onChange={e => setClassGroup(e.target.value)}
                        placeholder="WD18301"
                        className="w-full pl-8 pr-2.5 py-2.5 rounded-xl border border-slate-200 focus:border-indigo-500 text-xs bg-slate-50 focus:bg-white font-medium"
                      />
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Email Field (for all modes) */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Địa chỉ Email *
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="email"
                  required
                  placeholder={mode === 'register' && role === 'teacher' ? 'khanhn@fpt.edu.vn' : 'name@fpt.edu.vn'}
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-xs bg-slate-50 focus:bg-white font-medium"
                />
              </div>
            </div>

            {/* Password Field (for login & register) */}
            {mode !== 'forgot' && (
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-xs font-bold text-slate-700">
                    Mật khẩu *
                  </label>
                  {mode === 'login' && (
                    <button
                      type="button"
                      onClick={() => {
                        setMode('forgot');
                        clearAuthError();
                      }}
                      className="text-indigo-600 hover:text-indigo-800 text-xs font-semibold cursor-pointer"
                    >
                      Quên mật khẩu?
                    </button>
                  )}
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    placeholder="Tối thiểu 6 ký tự"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className="w-full pl-9 pr-10 py-2.5 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-xs bg-slate-50 focus:bg-white font-medium"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            )}

            {/* Confirm Password (register mode) */}
            {mode === 'register' && (
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Xác nhận lại mật khẩu *
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    placeholder="Nhập lại đúng mật khẩu"
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-xs bg-slate-50 focus:bg-white font-medium"
                  />
                </div>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 rounded-2xl text-white font-bold text-xs shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 mt-2 ${
                mode === 'forgot'
                  ? 'bg-amber-600 hover:bg-amber-700 shadow-amber-600/20'
                  : role === 'teacher' && mode === 'register'
                    ? 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-600/20'
                    : 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-600/20'
              }`}
            >
              {isSubmitting ? (
                <span>Đang kết nối xác thực...</span>
              ) : mode === 'login' ? (
                <>
                  <LogIn className="w-4 h-4" />
                  <span>Đăng Nhập Tài Khoản</span>
                </>
              ) : mode === 'register' ? (
                <>
                  <UserPlus className="w-4 h-4" />
                  <span>Hoàn Tất Đăng Ký ({role === 'teacher' ? 'Giảng viên' : 'Sinh viên'})</span>
                </>
              ) : (
                <>
                  <KeyRound className="w-4 h-4" />
                  <span>Gửi Liên Kết Đặt Lại Mật Khẩu</span>
                </>
              )}
            </button>
          </form>

          {/* Divider & Google Login (for login & register) */}
          {mode !== 'forgot' && (
            <>
              <div className="relative flex items-center justify-center pt-1">
                <div className="border-t border-slate-200 w-full" />
                <span className="bg-white px-2.5 text-xs text-slate-400 font-bold uppercase tracking-wider shrink-0">
                  Hoặc đăng nhập bằng
                </span>
              </div>

              <button
                type="button"
                onClick={handleGoogleSignIn}
                disabled={isSubmitting}
                className="w-full py-2.5 rounded-2xl border border-slate-200 hover:bg-slate-50 font-bold text-slate-700 text-xs transition-all cursor-pointer flex items-center justify-center gap-2 shadow-xs"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
                  <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"/>
                  <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                  <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                </svg>
                <span>Google Account (@fpt.edu.vn)</span>
              </button>
            </>
          )}

          {/* Quick Demo Switcher Section */}
          <div className="pt-3 border-t border-slate-100">
            <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center justify-between">
              <span>Kiểm thử nhanh phân quyền (Demo Switcher):</span>
              <span className="text-[10px] text-slate-400 normal-case font-medium">Bấm để đổi vai trò</span>
            </div>
            
            <div className="space-y-1.5">
              {/* Teacher Demo Button */}
              <button
                type="button"
                onClick={() => handleDemoQuickSwitch('gv-khanh')}
                className="w-full p-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-left transition-colors cursor-pointer flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-xs">
                    GV
                  </div>
                  <div>
                    <div className="font-extrabold text-emerald-950 text-xs">Thầy Nguyễn Nam Khánh (Giảng viên)</div>
                    <div className="text-[11px] text-emerald-700">khanhn@fpt.edu.vn • Mở khóa Góc Giảng viên</div>
                  </div>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-200 text-emerald-900">
                  Full Access
                </span>
              </button>

              <div className="grid grid-cols-2 gap-1.5">
                {/* Student 1 Demo Button */}
                <button
                  type="button"
                  onClick={() => handleDemoQuickSwitch('sv-01')}
                  className="p-2 rounded-xl bg-slate-50 hover:bg-indigo-50 border border-slate-200 text-left transition-colors cursor-pointer"
                >
                  <div className="font-bold text-slate-900 text-xs truncate">🎓 SV Nguyễn Văn An</div>
                  <div className="text-[10px] text-slate-500 truncate">Sinh viên giỏi • Ẩn tính năng GV</div>
                </button>

                {/* Student 2 Demo Button */}
                <button
                  type="button"
                  onClick={() => handleDemoQuickSwitch('sv-02')}
                  className="p-2 rounded-xl bg-slate-50 hover:bg-indigo-50 border border-slate-200 text-left transition-colors cursor-pointer"
                >
                  <div className="font-bold text-slate-900 text-xs truncate">🛡️ SV Bích Ngọc</div>
                  <div className="text-[10px] text-slate-500 truncate">Cần can thiệp • Ẩn tính năng GV</div>
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
