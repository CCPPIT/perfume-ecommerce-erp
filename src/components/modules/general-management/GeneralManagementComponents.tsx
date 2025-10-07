'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import {
  Building2,
  Users,
  Settings,
  FileText,
  TrendingUp,
  Shield,
  Clock,
  CheckCircle,
  AlertCircle,
  Plus,
  Search,
  Filter,
  MoreVertical,
  Eye,
  Edit,
  Trash2
} from 'lucide-react';
import { TikTokButton, TikTokBadge, TikTokModal, TikTokInput, TikTokProgress } from '../../ui/TikTokComponents';
import { useI18n } from '../../../hooks/useI18n';
import {
  GENERAL_MANAGEMENT_DEPARTMENTS,
  Department,
  DepartmentCategory,
  getAllDepartments,
  getDepartmentById,
  getDepartmentsByCategory,
  getDepartmentCategories
} from './departments';
import { DepartmentCard } from '../hr/HrComponents';

interface DepartmentCardProps {
  department: Department;
  onView?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
  onManageEmployees?: () => void;
}

export const GeneralDepartmentCard = ({
  department,
  onView,
  onEdit,
  onDelete,
  onManageEmployees
}: DepartmentCardProps) => {
  const { t } = useI18n();

  const getStatusConfig = (status: string) => {
    switch (status) {
      case 'active':
        return { color: 'success', label: 'نشط', icon: CheckCircle };
      case 'inactive':
        return { color: 'secondary', label: 'غير نشط', icon: AlertCircle };
      case 'under_review':
        return { color: 'warning', label: 'قيد المراجعة', icon: Clock };
      default:
        return { color: 'secondary', label: 'غير محدد', icon: AlertCircle };
    }
  };

  const statusInfo = getStatusConfig(department.status);
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
        <div className="flex items-center gap-3">
          <motion.div
            className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Building2 className="w-6 h-6" />
          </motion.div>

          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 dark:text-white">
              {department.name}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {department.code}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
              {department.category}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <TikTokBadge variant={statusInfo.color as any}>
            <StatusIcon className="w-3 h-3 mr-1" />
            {statusInfo.label}
          </TikTokBadge>

          <motion.button
            className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <MoreVertical className="w-4 h-4" />
          </motion.button>
        </div>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
        {department.description}
      </p>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <div className="flex items-center justify-center gap-1 mb-1">
            <Users className="w-4 h-4 text-blue-500" />
            <span className="text-lg font-bold text-gray-900 dark:text-white">
              {department.employeeCount || 0}
            </span>
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400">
            موظف
          </div>
        </div>

        <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <div className="text-lg font-bold text-green-600 dark:text-green-400">
            ${department.budget ? (department.budget / 1000).toFixed(0) : '0'}K
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400">
            الميزانية
          </div>
        </div>
      </div>

      <div className="flex gap-2">
        {onView && (
          <TikTokButton
            onClick={onView}
            variant="outline"
            size="sm"
            className="flex-1 flex items-center gap-2"
          >
            <Eye className="w-4 h-4" />
            عرض التفاصيل
          </TikTokButton>
        )}

        {onManageEmployees && (
          <TikTokButton
            onClick={onManageEmployees}
            variant="outline"
            size="sm"
            className="flex-1 flex items-center gap-2"
          >
            <Users className="w-4 h-4" />
            إدارة الموظفين
          </TikTokButton>
        )}
      </div>
    </motion.div>
  );
};

interface DepartmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  department?: Department | null;
  onSubmit: (data: Partial<Department>) => void;
}

export const DepartmentModal = ({
  isOpen,
  onClose,
  department,
  onSubmit
}: DepartmentModalProps) => {
  const { t } = useI18n();
  const [formData, setFormData] = useState({
    name: department?.name || '',
    code: department?.code || '',
    description: department?.description || '',
    manager: department?.manager || '',
    employeeCount: department?.employeeCount || 0,
    budget: department?.budget || 0,
    status: department?.status || 'active' as const
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      updatedAt: new Date().toISOString()
    });
    onClose();
  };

  return (
    <TikTokModal
      isOpen={isOpen}
      onClose={onClose}
      title={department ? `تعديل قسم: ${department.name}` : 'إضافة قسم جديد'}
      size="lg"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TikTokInput
            label="اسم القسم"
            placeholder="أدخل اسم القسم"
            value={formData.name}
            onChange={(value) => setFormData(prev => ({ ...prev, name: value }))}
          />

          <TikTokInput
            label="رمز القسم"
            placeholder="أدخل رمز القسم"
            value={formData.code}
            onChange={(value) => setFormData(prev => ({ ...prev, code: value }))}
          />

          <TikTokInput
            label="مدير القسم"
            placeholder="أدخل اسم المدير"
            value={formData.manager}
            onChange={(value) => setFormData(prev => ({ ...prev, manager: value }))}
          />

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              الحالة
            </label>
            <select
              value={formData.status}
              onChange={(e) => setFormData(prev => ({ ...prev, status: e.target.value as any }))}
              className="w-full px-4 py-3 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white focus:border-purple-500 focus:outline-none"
            >
              <option value="active">نشط</option>
              <option value="inactive">غير نشط</option>
              <option value="under_review">قيد المراجعة</option>
            </select>
          </div>

          <TikTokInput
            label="عدد الموظفين"
            type="number"
            placeholder="أدخل عدد الموظفين"
            value={formData.employeeCount.toString()}
            onChange={(value) => setFormData(prev => ({ ...prev, employeeCount: parseInt(value) || 0 }))}
          />

          <TikTokInput
            label="الميزانية (ريال)"
            type="number"
            placeholder="أدخل الميزانية"
            value={formData.budget.toString()}
            onChange={(value) => setFormData(prev => ({ ...prev, budget: parseInt(value) || 0 }))}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            وصف القسم
          </label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
            rows={4}
            className="w-full px-4 py-3 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white focus:border-purple-500 focus:outline-none resize-none"
            placeholder="أدخل وصف القسم ومهامه"
          />
        </div>

        <div className="flex gap-3">
          <TikTokButton variant="outline" onClick={onClose} className="flex-1">
            إلغاء
          </TikTokButton>
          <TikTokButton variant="primary" className="flex-1">
            {department ? 'حفظ التعديلات' : 'إضافة القسم'}
          </TikTokButton>
        </div>
      </form>
    </TikTokModal>
  );
};

interface GeneralManagementDashboardProps {
  onDepartmentSelect?: (department: Department) => void;
}

export const GeneralManagementDashboard = ({ onDepartmentSelect }: GeneralManagementDashboardProps) => {
  const { t } = useI18n();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState<Department | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = getDepartmentCategories();
  const allDepartments = getAllDepartments();

  const filteredDepartments = allDepartments.filter(dept => {
    const matchesSearch = dept.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         dept.code.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || dept.category === categories.find(cat => cat.code === selectedCategory)?.name;
    return matchesSearch && matchesCategory;
  });

  const getDepartmentStats = () => {
    const total = allDepartments.length;
    const active = allDepartments.filter(d => d.status === 'active').length;
    const totalEmployees = allDepartments.reduce((sum, d) => sum + (d.employeeCount || 0), 0);
    const totalBudget = allDepartments.reduce((sum, d) => sum + (d.budget || 0), 0);

    return { total, active, totalEmployees, totalBudget };
  };

  const stats = getDepartmentStats();

  return (
    <motion.div
      className="space-y-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              الإدارة العامة
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              إدارة وتنسيق {allDepartments.length} قسم إداري
            </p>
          </div>

          <TikTokButton
            onClick={() => setIsModalOpen(true)}
            variant="primary"
            className="flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            إضافة قسم جديد
          </TikTokButton>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <motion.div
            className="text-center p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
              {stats.total}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              إجمالي الأقسام
            </div>
          </motion.div>

          <motion.div
            className="text-center p-6 bg-green-50 dark:bg-green-900/20 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="text-3xl font-bold text-green-600 dark:text-green-400">
              {stats.active}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              الأقسام النشطة
            </div>
          </motion.div>

          <motion.div
            className="text-center p-6 bg-purple-50 dark:bg-purple-900/20 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
              {stats.totalEmployees}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              إجمالي الموظفين
            </div>
          </motion.div>

          <motion.div
            className="text-center p-6 bg-orange-50 dark:bg-orange-900/20 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">
              ${(stats.totalBudget / 1000000).toFixed(1)}M
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              إجمالي الميزانية
            </div>
          </motion.div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1">
            <TikTokInput
              placeholder="البحث في الأقسام..."
              value={searchQuery}
              onChange={setSearchQuery}
              icon={<Search className="w-5 h-5 text-gray-400" />}
            />
          </div>

          <div className="w-full lg:w-64">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-3 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white focus:border-purple-500 focus:outline-none"
            >
              <option value="all">جميع الفئات</option>
              {categories.map((category) => (
                <option key={category.code} value={category.code}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Department Categories */}
      <div className="space-y-8">
        {categories.map((category) => {
          const categoryDepartments = filteredDepartments.filter(dept =>
            dept.category === category.name
          );

          if (categoryDepartments.length === 0) return null;

          return (
            <motion.section
              key={category.code}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {category.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  {categoryDepartments.length} قسم
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryDepartments.map((department) => (
                  <GeneralDepartmentCard
                    key={department.id}
                    department={department}
                    onView={() => {
                      setSelectedDepartment(department);
                      onDepartmentSelect?.(department);
                    }}
                    onManageEmployees={() => {
                      // Handle employee management
                      console.log('Manage employees for:', department.id);
                    }}
                  />
                ))}
              </div>
            </motion.section>
          );
        })}
      </div>

      {/* Department Modal */}
      <DepartmentModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedDepartment(null);
        }}
        department={selectedDepartment}
        onSubmit={(data) => {
          console.log('Department data:', data);
          // Handle department creation/update
        }}
      />
    </motion.div>
  );
};

interface DepartmentDetailViewProps {
  department: Department;
  onClose: () => void;
  onEdit: () => void;
}

export const DepartmentDetailView = ({
  department,
  onClose,
  onEdit
}: DepartmentDetailViewProps) => {
  const { t } = useI18n();

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <motion.div
            className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white"
            whileHover={{ scale: 1.1 }}
          >
            <Building2 className="w-8 h-8" />
          </motion.div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {department.name}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              {department.code} • {department.category}
            </p>
          </div>
        </div>

        <div className="flex gap-2">
          <TikTokButton onClick={onEdit} variant="outline" size="sm">
            <Edit className="w-4 h-4 mr-2" />
            تعديل
          </TikTokButton>
          <TikTokButton onClick={onClose} variant="ghost" size="sm">
            إغلاق
          </TikTokButton>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              معلومات عامة
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">الرمز:</span>
                <span className="font-medium">{department.code}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">الحالة:</span>
                <TikTokBadge variant={department.status === 'active' ? 'success' : 'secondary'}>
                  {department.status === 'active' ? 'نشط' : 'غير نشط'}
                </TikTokBadge>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">تاريخ الإنشاء:</span>
                <span className="font-medium">
                  {new Date(department.createdAt).toLocaleDateString('ar-SA')}
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              الموارد البشرية
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">عدد الموظفين:</span>
                <span className="font-medium">{department.employeeCount || 0}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">المدير:</span>
                <span className="font-medium">{department.manager || 'غير محدد'}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              الموارد المالية
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">الميزانية السنوية:</span>
                <span className="font-medium text-green-600 dark:text-green-400">
                  ${department.budget ? (department.budget / 1000).toFixed(0) : '0'}K
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              الوصف والمهام
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {department.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

