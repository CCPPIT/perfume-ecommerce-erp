import { motion } from 'framer-motion';
import { useState } from 'react';
import { Eye, EyeOff, Lock, Mail, User, Phone } from 'lucide-react';
import { TikTokInput, TikTokButton } from '../../ui/TikTokComponents';
import { useI18n } from '../../../hooks/useI18n';

interface LoginFormProps {
  onSubmit: (data: { email: string; password: string }) => Promise<void>;
  loading?: boolean;
}

export const LoginForm = ({ onSubmit, loading = false }: LoginFormProps) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const { t } = useI18n();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <motion.div
      className="w-full max-w-md mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <TikTokInput
          label={t('auth.email')}
          type="email"
          placeholder={t('auth.email')}
          value={formData.email}
          onChange={(value: string) => setFormData(prev => ({ ...prev, email: value }))}
          icon={<Mail className="w-5 h-5 text-gray-400" />}
        />

        <TikTokInput
          label={t('auth.password')}
          type={showPassword ? 'text' : 'password'}
          placeholder={t('auth.password')}
          value={formData.password}
          onChange={(value: string) => setFormData(prev => ({ ...prev, password: value }))}
          icon={
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          }
        />

        <TikTokButton
          variant="primary"
          loading={loading}
          fullWidth
          className="text-lg py-4"
        >
          {t('auth.login')}
        </TikTokButton>
      </form>
    </motion.div>
  );
};

interface RegisterFormProps {
  onSubmit: (data: { name: string; email: string; phone: string; password: string }) => void;
  loading?: boolean;
}

export const RegisterForm = ({ onSubmit, loading = false }: RegisterFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const { t } = useI18n();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      return;
    }
    onSubmit({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      password: formData.password
    });
  };

  return (
    <motion.div
      className="w-full max-w-md mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <TikTokInput
          label={t('auth.name')}
          type="text"
          placeholder={t('auth.name')}
          value={formData.name}
          onChange={(value: string) => setFormData(prev => ({ ...prev, name: value }))}
          icon={<User className="w-5 h-5 text-gray-400" />}
        />

        <TikTokInput
          label={t('auth.email')}
          type="email"
          placeholder={t('auth.email')}
          value={formData.email}
          onChange={(value: string) => setFormData(prev => ({ ...prev, email: value }))}
          icon={<Mail className="w-5 h-5 text-gray-400" />}
        />

        <TikTokInput
          label={t('auth.phone')}
          type="tel"
          placeholder={t('auth.phone')}
          value={formData.phone}
          onChange={(value: string) => setFormData(prev => ({ ...prev, phone: value }))}
          icon={<Phone className="w-5 h-5 text-gray-400" />}
        />

        <TikTokInput
          label={t('auth.password')}
          type={showPassword ? 'text' : 'password'}
          placeholder={t('auth.password')}
          value={formData.password}
          onChange={(value: string) => setFormData(prev => ({ ...prev, password: value }))}
          icon={
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          }
        />

        <TikTokInput
          label={t('auth.confirmPassword')}
          type="password"
          placeholder={t('auth.confirmPassword')}
          value={formData.confirmPassword}
          onChange={(value: string) => setFormData(prev => ({ ...prev, confirmPassword: value }))}
          icon={<Lock className="w-5 h-5 text-gray-400" />}
          error={formData.confirmPassword && formData.password !== formData.confirmPassword ? t('auth.passwordMismatch') : undefined}
        />

        <TikTokButton
          variant="primary"
          loading={loading}
          fullWidth
          className="text-lg py-4"
        >
          {t('auth.register')}
        </TikTokButton>
      </form>
    </motion.div>
  );
};

interface ProfileCardProps {
  user: {
    name: string;
    email: string;
    phone?: string;
    avatar?: string;
    role: string;
  };
  onEdit?: () => void;
}

export const ProfileCard = ({ user, onEdit }: ProfileCardProps) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center gap-4">
        <motion.div
          className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xl font-bold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {user.avatar ? (
            <img
              src={user.avatar}
              alt={user.name}
              className="w-full h-full rounded-full object-cover"
            />
          ) : (
            user.name.charAt(0).toUpperCase()
          )}
        </motion.div>

        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {user.name}
          </h3>
          <p className="text-gray-600 dark:text-gray-400">{user.email}</p>
          {user.phone && (
            <p className="text-sm text-gray-500 dark:text-gray-500">{user.phone}</p>
          )}
          <motion.span
            className="inline-block mt-2 px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm rounded-full"
            whileHover={{ scale: 1.05 }}
          >
            {user.role}
          </motion.span>
        </div>

        {onEdit && (
          <motion.button
            onClick={onEdit}
            className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};
