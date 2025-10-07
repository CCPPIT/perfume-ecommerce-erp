'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Users, UserCheck, Clock, Calendar, Award, TrendingUp, Plus, Edit, Trash2 } from 'lucide-react';
import { TikTokButton, TikTokBadge, TikTokModal, TikTokInput } from '../../ui/TikTokComponents';
import { useI18n } from '../../../hooks/useI18n';

interface EmployeeCardProps {
  employee: {
    id: string;
    name: string;
    position: string;
    department: string;
    email: string;
    phone?: string;
    hireDate: string;
    salary?: number;
    status: 'active' | 'inactive';
    avatar?: string;
  };
  onView?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
}

export const EmployeeCard = ({ employee, onView, onEdit, onDelete }: EmployeeCardProps) => {
  const { t } = useI18n();

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -2 }}
    >
      <div className="flex items-start gap-4 mb-4">
        <motion.div
          className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {employee.avatar ? (
            <img
              src={employee.avatar}
              alt={employee.name}
              className="w-full h-full rounded-full object-cover"
            />
          ) : (
            employee.name.charAt(0).toUpperCase()
          )}
        </motion.div>

        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">
                {employee.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {employee.position}
              </p>
              <TikTokBadge variant="primary" size="sm" className="mt-1">
                {employee.department}
              </TikTokBadge>
            </div>

            <TikTokBadge variant={employee.status === 'active' ? 'success' : 'secondary'}>
              {employee.status === 'active' ? 'نشط' : 'غير نشط'}
            </TikTokBadge>
          </div>

          <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <span className="font-medium">البريد الإلكتروني:</span>
              <span>{employee.email}</span>
            </div>

            {employee.phone && (
              <div className="flex items-center gap-2">
                <span className="font-medium">الهاتف:</span>
                <span>{employee.phone}</span>
              </div>
            )}

            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>تاريخ التوظيف: {new Date(employee.hireDate).toLocaleDateString('ar-SA')}</span>
            </div>
          </div>
        </div>
      </div>

      {employee.salary && (
        <div className="mb-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
          <div className="text-center">
            <div className="text-lg font-bold text-green-600 dark:text-green-400">
              ${employee.salary.toLocaleString()}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              الراتب الشهري
            </div>
          </div>
        </div>
      )}

      <div className="flex gap-2">
        {onView && (
          <TikTokButton onClick={onView} variant="outline" size="sm" className="flex-1">
            عرض الملف
          </TikTokButton>
        )}

        {onEdit && (
          <TikTokButton onClick={onEdit} variant="outline" size="sm">
            تعديل
          </TikTokButton>
        )}

        {onDelete && (
          <TikTokButton onClick={onDelete} variant="outline" size="sm">
            حذف
          </TikTokButton>
        )}
      </div>
    </motion.div>
  );
};

interface AttendanceCardProps {
  attendance: {
    id: string;
    employeeName: string;
    date: string;
    checkIn?: string;
    checkOut?: string;
    status: 'present' | 'absent' | 'late' | 'half_day' | 'leave';
    hours?: number;
    location?: string;
  };
  onEdit?: () => void;
}

export const AttendanceCard = ({ attendance, onEdit }: AttendanceCardProps) => {
  const { t } = useI18n();

  const statusConfig = {
    present: { color: 'success', label: 'حاضر', icon: UserCheck },
    absent: { color: 'error', label: 'غائب', icon: Users },
    late: { color: 'warning', label: 'متأخر', icon: Clock },
    half_day: { color: 'secondary', label: 'نصف يوم', icon: Clock },
    leave: { color: 'primary', label: 'إجازة', icon: Calendar },
  };

  const statusInfo = statusConfig[attendance.status];
  const StatusIcon = statusInfo.icon;

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -2 }}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white">
            {attendance.employeeName}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {new Date(attendance.date).toLocaleDateString('ar-SA')}
          </p>
        </div>

        <TikTokBadge variant={statusInfo.color as any}>
          <StatusIcon className="w-3 h-3 mr-1" />
          {statusInfo.label}
        </TikTokBadge>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">وقت الدخول</div>
          <div className="font-medium text-gray-900 dark:text-white">
            {attendance.checkIn || 'لم يسجل'}
          </div>
        </div>

        <div>
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">وقت الخروج</div>
          <div className="font-medium text-gray-900 dark:text-white">
            {attendance.checkOut || 'لم يسجل'}
          </div>
        </div>
      </div>

      {attendance.hours && (
        <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <div className="text-center">
            <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
              {attendance.hours} ساعة
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              ساعات العمل
            </div>
          </div>
        </div>
      )}

      {attendance.location && (
        <div className="mb-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            الموقع: {attendance.location}
          </div>
        </div>
      )}

      {onEdit && (
        <TikTokButton onClick={onEdit} variant="outline" size="sm" className="w-full">
          تعديل الحضور
        </TikTokButton>
      )}
    </motion.div>
  );
};

interface DepartmentCardProps {
  department: {
    id: string;
    name: string;
    manager?: string;
    employeeCount?: number;
    budget?: number;
    description?: string;
  };
  onView?: () => void;
  onEdit?: () => void;
}

export const DepartmentCard = ({ department, onView, onEdit }: DepartmentCardProps) => {
  const { t } = useI18n();

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -2 }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <motion.div
            className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold"
            whileHover={{ scale: 1.1 }}
          >
            <Users className="w-5 h-5" />
          </motion.div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">
              {department.name}
            </h3>
            {department.manager && (
              <p className="text-sm text-gray-600 dark:text-gray-400">
                مدير: {department.manager}
              </p>
            )}
          </div>
        </div>

        <div className="text-right">
          <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
            {department.employeeCount || 0}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            موظف
          </div>
        </div>
      </div>

      {department.description && (
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          {department.description}
        </p>
      )}

      {department.budget && (
        <div className="mb-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
          <div className="text-center">
            <div className="text-lg font-bold text-green-600 dark:text-green-400">
              ${department.budget.toLocaleString()}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              الميزانية السنوية
            </div>
          </div>
        </div>
      )}

      <div className="flex gap-2">
        {onView && (
          <TikTokButton onClick={onView} variant="outline" size="sm" className="flex-1">
            عرض التفاصيل
          </TikTokButton>
        )}

        {onEdit && (
          <TikTokButton onClick={onEdit} variant="outline" size="sm">
            تعديل
          </TikTokButton>
        )}
      </div>
    </motion.div>
  );
};

interface PerformanceCardProps {
  performance: {
    id: string;
    employeeName: string;
    period: string;
    rating: number;
    goals?: string;
    achievements?: string;
    feedback?: string;
    status: 'completed' | 'in_progress' | 'pending';
  };
  onView?: () => void;
}

export const PerformanceCard = ({ performance, onView }: PerformanceCardProps) => {
  const { t } = useI18n();

  const statusConfig = {
    completed: { color: 'success', label: 'مكتملة' },
    in_progress: { color: 'warning', label: 'قيد التنفيذ' },
    pending: { color: 'secondary', label: 'في الانتظار' },
  };

  const getRatingStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Award
        key={index}
        className={`w-4 h-4 ${
          index < rating
            ? 'text-yellow-400 fill-yellow-400'
            : 'text-gray-300 dark:text-gray-600'
        }`}
      />
    ));
  };

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -2 }}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white">
            {performance.employeeName}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            فترة: {performance.period}
          </p>
        </div>

        <TikTokBadge variant={statusConfig[performance.status].color as any}>
          {statusConfig[performance.status].label}
        </TikTokBadge>
      </div>

      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-sm text-gray-600 dark:text-gray-400">التقييم:</span>
          <div className="flex items-center gap-1">
            {getRatingStars(performance.rating)}
            <span className="text-sm font-medium text-gray-900 dark:text-white mr-2">
              {performance.rating}/5
            </span>
          </div>
        </div>
      </div>

      {performance.goals && (
        <div className="mb-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <div className="text-sm font-medium text-blue-800 dark:text-blue-300 mb-1">
            الأهداف:
          </div>
          <div className="text-sm text-blue-700 dark:text-blue-400">
            {performance.goals}
          </div>
        </div>
      )}

      {performance.achievements && (
        <div className="mb-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
          <div className="text-sm font-medium text-green-800 dark:text-green-300 mb-1">
            الإنجازات:
          </div>
          <div className="text-sm text-green-700 dark:text-green-400">
            {performance.achievements}
          </div>
        </div>
      )}

      {performance.feedback && (
        <div className="mb-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <div className="text-sm font-medium text-gray-800 dark:text-gray-300 mb-1">
            الملاحظات:
          </div>
          <div className="text-sm text-gray-700 dark:text-gray-400">
            {performance.feedback}
          </div>
        </div>
      )}

      {onView && (
        <TikTokButton onClick={onView} variant="outline" size="sm" className="w-full">
          عرض التفاصيل الكاملة
        </TikTokButton>
      )}
    </motion.div>
  );
};
