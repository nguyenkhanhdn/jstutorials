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
  Edit3
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { CURRICULUM_MODULES } from '../../data/curriculumData';

interface UserProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const UserProfileModal: React.FC<UserProfileModalProps> = ({ isOpen, onClose }) => {
  const { userProfile, updateUserProfile, logout, currentUser, lessonProgressMap } = useAuth();

  const [fullName, setFullName] = useState(userProfile?.fullName || '');
  const [studentCode, setStudentCode] = useState(userProfile?.code || '');
  const [classGroup, setClassGroup] = useState(userProfile?.classGroup || 'WD18301 - Lập trình JS');
  const [avatarUrl, setAvatarUrl] = useState(userProfile?.avatar || '');
  const [isEditing, setIsEditing] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen || !userProfile) return null;

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateUserProfile({
      fullName,
      code: studentCode,
      classGroup,
      avatar: avatarUrl
    });
    setSavedSuccess(true);
    setIsEditing(false);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  const handleAvatarPreset = (seed: string) => {
    setAvatarUrl(`https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}`);
  };

  const completedCount = userProfile.completedLessons || 
    Object.values(lessonProgressMap).filter(p => p.status === 'completed' || p.status === 'mastered').length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 animate-in fade-in">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Top Header */}
        <div className="p-6 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white relative">
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
                className="w-16 h-16 rounded-2xl border-2 border-white/40 shadow-lg object-cover bg-slate-800"
              />
              <span className={`absolute -bottom-1 -right-1 px-2 py-0.5 rounded text-xs font-black uppercase tracking-wider ${
                userProfile.role === 'teacher' ? 'bg-amber-400 text-slate-950' : 'bg-indigo-400 text-slate-950'
              }`}>
                {userProfile.role === 'teacher' ? 'Giảng viên' : 'Sinh viên'}
              </span>
            </div>

            <div>
              <h3 className="text-lg font-black tracking-tight">{userProfile.fullName}</h3>
              <div className="flex items-center gap-2 text-xs text-indigo-200 mt-0.5">
                <span className="font-mono bg-white/15 px-2 py-0.5 rounded">{userProfile.code}</span>
                <span>•</span>
                <span>{userProfile.email}</span>
              </div>
              <div className="text-xs text-slate-300 mt-1 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Đồng bộ hồ sơ: {currentUser ? 'Cloud Firestore' : 'Bản demo thử nghiệm'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs text-slate-700">
          
          {savedSuccess && (
            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center gap-2 animate-in fade-in">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Cập nhật thông tin hồ sơ thành công!</span>
            </div>
          )}

          {/* Quick Metrics Grid */}
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

          {/* Detailed Learning Progress Summary */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5">
            <div className="flex items-center justify-between font-extrabold text-slate-900">
              <span className="flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-indigo-600" />
                <span>Tiến Độ Khóa Học Lập Trình JavaScript</span>
              </span>
              <span className="text-indigo-700">
                {completedCount} / {userProfile.totalLessons || 16} bài học
              </span>
            </div>

            {/* Progress bar */}
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

          {/* Edit Profile Form */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-extrabold text-slate-900 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                <Edit3 className="w-3.5 h-3.5 text-indigo-600" />
                <span>Thông Tin Định Danh Cá Nhân</span>
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
                  <label className="block text-xs font-bold text-slate-700 mb-1">Họ và tên</label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={e => setFullName(e.target.value)}
                    className="w-full px-3 py-1.5 rounded-xl border border-slate-200 bg-white text-xs font-semibold"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Mã sinh viên</label>
                    <input
                      type="text"
                      value={studentCode}
                      onChange={e => setStudentCode(e.target.value)}
                      className="w-full px-3 py-1.5 rounded-xl border border-slate-200 bg-white text-xs font-semibold"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Lớp học</label>
                    <input
                      type="text"
                      value={classGroup}
                      onChange={e => setClassGroup(e.target.value)}
                      className="w-full px-3 py-1.5 rounded-xl border border-slate-200 bg-white text-xs font-semibold"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Chọn ảnh đại diện nhanh:</label>
                  <div className="flex items-center gap-2">
                    {['An', 'Ngoc', 'Long', 'Duc', 'Ha', 'Khai'].map(seed => (
                      <button
                        key={seed}
                        type="button"
                        onClick={() => handleAvatarPreset(seed)}
                        className="w-8 h-8 rounded-full border border-slate-300 overflow-hidden hover:scale-110 transition-transform cursor-pointer"
                      >
                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}`} alt={seed} />
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>Lưu Thay Đổi Hồ Sơ</span>
                </button>
              </form>
            ) : (
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-slate-400 text-xs">Họ và tên:</span>
                  <div className="font-bold text-slate-900 mt-0.5">{userProfile.fullName}</div>
                </div>
                <div>
                  <span className="text-slate-400 text-xs">Mã SV / GV:</span>
                  <div className="font-bold text-slate-900 mt-0.5 font-mono">{userProfile.code}</div>
                </div>
                <div>
                  <span className="text-slate-400 text-xs">Email liên hệ:</span>
                  <div className="font-medium text-slate-700 mt-0.5">{userProfile.email}</div>
                </div>
                <div>
                  <span className="text-slate-400 text-xs">Lớp sinh hoạt:</span>
                  <div className="font-medium text-slate-700 mt-0.5">{userProfile.classGroup}</div>
                </div>
              </div>
            )}
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
