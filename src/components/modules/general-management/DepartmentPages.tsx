// صفحات متخصصة لكل قسم من الأقسام الـ 100

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import {
  Building2,
  Users,
  FileText,
  BarChart3,
  Calendar,
  Clock,
  DollarSign,
  Target,
  AlertCircle,
  CheckCircle,
  TrendingUp,
  TrendingDown,
  Eye,
  Edit,
  Plus,
  Settings,
  Phone,
  Mail,
  MapPin,
  Globe,
  Award,
  Activity,
  Crown,
  HeartHandshake,
  Coins,
  ShoppingCart,
  Package,
  Megaphone,
  Handshake,
  Shield,
  Workflow
} from 'lucide-react';
import { TikTokButton, TikTokBadge, TikTokModal, TikTokInput, TikTokProgress } from '../../ui/TikTokComponents';
import { useI18n } from '../../../hooks/useI18n';
import { Department, getDepartmentById } from './departments';

// نظام إدارة الصفحات للأقسام الـ100
export const DepartmentPages = {
  // الإدارة التنفيذية
  'executive-management': {
    name: 'الإدارة التنفيذية',
    icon: Crown,
    color: 'purple',
    description: 'القيادة العليا والتوجيه الاستراتيجي',
    component: () => import('../../../app/general-management/executive-management/page').then(m => ({ default: m.default }))
  },

  // إدارة الموارد البشرية
  'hr-management': {
    name: 'إدارة الموارد البشرية',
    icon: HeartHandshake,
    color: 'green',
    description: 'بناء وتطوير رأس المال البشري',
    component: () => import('../../../app/general-management/hr-management/page').then(m => ({ default: m.default }))
  },

  // إدارة المالية
  'finance-management': {
    name: 'إدارة المالية',
    icon: Coins,
    color: 'emerald',
    description: 'إدارة شاملة للشؤون المالية',
    component: () => import('../../../app/general-management/finance-management/page').then(m => ({ default: m.default }))
  }
};

// دالة للحصول على معلومات القسم
export const getDepartmentInfo = (departmentId: string) => {
  return DepartmentPages[departmentId as keyof typeof DepartmentPages] || null;
};

// دالة للحصول على أيقونة القسم
export const getDepartmentIcon = (departmentId: string) => {
  const iconMap: Record<string, any> = {
    'EXEC': Crown,
    'HR': HeartHandshake,
    'FINANCE': Coins,
    'PROC': ShoppingCart,
    'INV': Package,
    'MKT': Megaphone,
    'SALES': Handshake,
    'IT': Settings,
    'LEGAL': Shield,
    'OPS': Workflow
  };

  const code = departmentId.split('-')[0];
  return iconMap[code] || Building2;
};

interface DepartmentPageProps {
  departmentId: string;
  onBack?: () => void;
}

export const DepartmentPage = ({ departmentId, onBack }: DepartmentPageProps) => {
  const { t } = useI18n();
  const [department, setDepartment] = useState<Department | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'employees' | 'documents' | 'performance' | 'reports'>('overview');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading department data
    const loadDepartment = async () => {
      setIsLoading(true);
      const dept = getDepartmentById(departmentId);
      setDepartment(dept || null);
      setIsLoading(false);
    };

    loadDepartment();
  }, [departmentId]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <motion.div
          className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      </div>
    );
  }

  if (!department) {
    return (
      <div className="text-center py-16">
        <AlertCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          القسم غير موجود
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          لم يتم العثور على القسم المطلوب
        </p>
      </div>
    );
  }

  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Department Header */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-6">
            {onBack && (
              <motion.button
                onClick={onBack}
                className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </motion.button>
            )}

            <div className="flex items-center gap-4">
              <motion.div
                className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white"
                whileHover={{ scale: 1.1 }}
              >
                <Building2 className="w-8 h-8" />
              </motion.div>

              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                  {department.name}
                </h1>
                <p className="text-gray-600 dark:text-gray-400">
                  {department.code} • {department.category}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <TikTokBadge variant={department.status === 'active' ? 'success' : 'secondary'}>
                    {department.status === 'active' ? 'نشط' : 'غير نشط'}
                  </TikTokBadge>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    إنشاء: {new Date(department.createdAt).toLocaleDateString('ar-SA')}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <TikTokButton variant="outline" size="sm">
              <Edit className="w-4 h-4 mr-2" />
              تعديل
            </TikTokButton>
            <TikTokButton variant="primary" size="sm">
              <Settings className="w-4 h-4 mr-2" />
              الإعدادات
            </TikTokButton>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
            <Users className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {department.employeeCount || 0}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              عدد الموظفين
            </div>
          </div>

          <div className="text-center p-6 bg-green-50 dark:bg-green-900/20 rounded-xl">
            <DollarSign className="w-8 h-8 text-green-600 dark:text-green-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">
              ${department.budget ? (department.budget / 1000).toFixed(0) : '0'}K
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              الميزانية السنوية
            </div>
          </div>

          <div className="text-center p-6 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
            <FileText className="w-8 h-8 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
              24
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              الوثائق
            </div>
          </div>

          <div className="text-center p-6 bg-orange-50 dark:bg-orange-900/20 rounded-xl">
            <Target className="w-8 h-8 text-orange-600 dark:text-orange-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
              87%
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              إنجاز الأهداف
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
        <div className="flex flex-wrap gap-2">
          {[
            { id: 'overview', label: 'نظرة عامة', icon: Eye },
            { id: 'employees', label: 'الموظفون', icon: Users },
            { id: 'documents', label: 'الوثائق', icon: FileText },
            { id: 'performance', label: 'الأداء', icon: BarChart3 },
            { id: 'reports', label: 'التقارير', icon: Activity }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-colors ${
                  isActive
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Tab Content */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
        {activeTab === 'overview' && <DepartmentOverviewTab department={department} />}
        {activeTab === 'employees' && <DepartmentEmployeesTab department={department} />}
        {activeTab === 'documents' && <DepartmentDocumentsTab department={department} />}
        {activeTab === 'performance' && <DepartmentPerformanceTab department={department} />}
        {activeTab === 'reports' && <DepartmentReportsTab department={department} />}
      </div>
    </motion.div>
  );
};

interface DepartmentOverviewTabProps {
  department: Department;
}

const DepartmentOverviewTab = ({ department }: DepartmentOverviewTabProps) => {
  const { t } = useI18n();

  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Department Description */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
          وصف القسم
        </h3>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          {department.description}
        </p>
      </div>

      {/* Key Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            معلومات أساسية
          </h3>

          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <span className="text-gray-600 dark:text-gray-400">الرمز:</span>
              <span className="font-medium text-gray-900 dark:text-white">{department.code}</span>
            </div>

            <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <span className="text-gray-600 dark:text-gray-400">الفئة:</span>
              <span className="font-medium text-gray-900 dark:text-white">{department.category}</span>
            </div>

            <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <span className="text-gray-600 dark:text-gray-400">المدير:</span>
              <span className="font-medium text-gray-900 dark:text-white">
                {department.manager || 'غير محدد'}
              </span>
            </div>

            <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <span className="text-gray-600 dark:text-gray-400">تاريخ الإنشاء:</span>
              <span className="font-medium text-gray-900 dark:text-white">
                {new Date(department.createdAt).toLocaleDateString('ar-SA')}
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            المؤشرات الرئيسية
          </h3>

          <div className="space-y-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-blue-800 dark:text-blue-300">كفاءة الأداء</span>
                <span className="text-lg font-bold text-blue-600 dark:text-blue-400">92%</span>
              </div>
              <TikTokProgress value={92} color="blue" size="sm" />
            </div>

            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-green-800 dark:text-green-300">رضا الموظفين</span>
                <span className="text-lg font-bold text-green-600 dark:text-green-400">85%</span>
              </div>
              <TikTokProgress value={85} color="green" size="sm" />
            </div>

            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-purple-800 dark:text-purple-300">إنجاز المشاريع</span>
                <span className="text-lg font-bold text-purple-600 dark:text-purple-400">78%</span>
              </div>
              <TikTokProgress value={78} color="purple" size="sm" />
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activities */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          الأنشطة الأخيرة
        </h3>
        <div className="space-y-3">
          {[
            { action: 'تم تحديث سياسة الموارد البشرية', time: 'قبل ساعتين', type: 'update' },
            { action: 'تمت إضافة موظف جديد', time: 'قبل 4 ساعات', type: 'add' },
            { action: 'تم الانتهاء من تقرير الأداء الشهري', time: 'أمس', type: 'complete' },
            { action: 'تم رفع وثيقة عقد جديد', time: 'منذ يومين', type: 'upload' }
          ].map((activity, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={`w-2 h-2 rounded-full ${
                activity.type === 'update' ? 'bg-blue-500' :
                activity.type === 'add' ? 'bg-green-500' :
                activity.type === 'complete' ? 'bg-purple-500' :
                'bg-orange-500'
              }`} />

              <div className="flex-1">
                <div className="font-medium text-gray-900 dark:text-white">
                  {activity.action}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {activity.time}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

interface DepartmentEmployeesTabProps {
  department: Department;
}

const DepartmentEmployeesTab = ({ department }: DepartmentEmployeesTabProps) => {
  const { t } = useI18n();

  // Mock employee data
  const employees = [
    {
      id: '1',
      name: 'أحمد محمد علي',
      position: 'مدير قسم',
      email: 'ahmed@company.com',
      phone: '+966501234567',
      joinDate: '2020-01-15',
      status: 'active',
      performance: 4.8
    },
    {
      id: '2',
      name: 'فاطمة أحمد حسن',
      position: 'موظف إداري أول',
      email: 'fatima@company.com',
      phone: '+966507654321',
      joinDate: '2021-03-10',
      status: 'active',
      performance: 4.5
    },
    {
      id: '3',
      name: 'محمد عبدالله سالم',
      position: 'موظف إداري',
      email: 'mohamed@company.com',
      phone: '+966509876543',
      joinDate: '2022-01-20',
      status: 'active',
      performance: 4.2
    }
  ];

  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Employees Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          موظفو القسم ({employees.length})
        </h3>

        <TikTokButton variant="primary" size="sm" className="flex items-center gap-2">
          <Plus className="w-4 h-4" />
          إضافة موظف
        </TikTokButton>
      </div>

      {/* Employees List */}
      <div className="space-y-4">
        {employees.map((employee, index) => (
          <motion.div
            key={employee.id}
            className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
              {employee.name.charAt(0)}
            </div>

            <div className="flex-1">
              <div className="font-semibold text-gray-900 dark:text-white">
                {employee.name}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {employee.position}
              </div>
              <div className="flex items-center gap-4 mt-1">
                <span className="text-xs text-gray-500 dark:text-gray-500">
                  {employee.email}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-500">
                  {employee.phone}
                </span>
              </div>
            </div>

            <div className="text-center">
              <div className="text-lg font-bold text-purple-600 dark:text-purple-400">
                {employee.performance}
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                الأداء
              </div>
            </div>

            <div className="flex gap-2">
              <motion.button
                className="p-2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Eye className="w-4 h-4" />
              </motion.button>

              <motion.button
                className="p-2 text-gray-400 hover:text-green-600 dark:hover:text-green-400"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Edit className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

interface DepartmentDocumentsTabProps {
  department: Department;
}

const DepartmentDocumentsTab = ({ department }: DepartmentDocumentsTabProps) => {
  const { t } = useI18n();

  // Mock document data
  const documents = [
    {
      id: '1',
      title: 'سياسة الموارد البشرية',
      type: 'policy',
      status: 'approved',
      lastModified: '2024-03-15',
      size: '2.5 MB'
    },
    {
      id: '2',
      title: 'دليل الإجراءات الإدارية',
      type: 'procedure',
      status: 'review',
      lastModified: '2024-03-10',
      size: '1.8 MB'
    },
    {
      id: '3',
      title: 'عقد الصيانة التقنية',
      type: 'contract',
      status: 'published',
      lastModified: '2024-03-05',
      size: '3.2 MB'
    }
  ];

  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Documents Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          وثائق القسم ({documents.length})
        </h3>

        <TikTokButton variant="primary" size="sm" className="flex items-center gap-2">
          <Plus className="w-4 h-4" />
          رفع وثيقة
        </TikTokButton>
      </div>

      {/* Documents List */}
      <div className="space-y-3">
        {documents.map((document, index) => (
          <motion.div
            key={document.id}
            className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>

            <div className="flex-1">
              <div className="font-semibold text-gray-900 dark:text-white">
                {document.title}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                آخر تعديل: {new Date(document.lastModified).toLocaleDateString('ar-SA')} • {document.size}
              </div>
            </div>

            <TikTokBadge
              variant={
                document.status === 'approved' ? 'success' :
                document.status === 'review' ? 'warning' :
                'primary'
              }
            >
              {document.status === 'approved' ? 'معتمد' :
               document.status === 'review' ? 'قيد المراجعة' :
               'منشور'}
            </TikTokBadge>

            <div className="flex gap-2">
              <motion.button
                className="p-2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Eye className="w-4 h-4" />
              </motion.button>

              <motion.button
                className="p-2 text-gray-400 hover:text-green-600 dark:hover:text-green-400"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Edit className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

interface DepartmentPerformanceTabProps {
  department: Department;
}

const DepartmentPerformanceTab = ({ department }: DepartmentPerformanceTabProps) => {
  const { t } = useI18n();

  // Mock performance data
  const kpis = [
    {
      name: 'كفاءة المعاملات',
      current: 94,
      target: 90,
      trend: 'up',
      status: 'exceeded'
    },
    {
      name: 'رضا الموظفين',
      current: 87,
      target: 85,
      trend: 'up',
      status: 'on_track'
    },
    {
      name: 'وقت الاستجابة',
      current: 2.1,
      target: 2.0,
      trend: 'down',
      status: 'at_risk'
    }
  ];

  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* KPIs */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          مؤشرات الأداء الرئيسية
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {kpis.map((kpi, index) => (
            <motion.div
              key={kpi.name}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-medium text-gray-900 dark:text-white">
                  {kpi.name}
                </span>
                <div className={`flex items-center gap-1 ${
                  kpi.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {kpi.trend === 'up' ?
                    <TrendingUp className="w-4 h-4" /> :
                    <TrendingDown className="w-4 h-4" />
                  }
                </div>
              </div>

              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl font-bold text-gray-900 dark:text-white">
                  {kpi.current}{kpi.name.includes('كفاءة') || kpi.name.includes('رضا') ? '%' : ''}
                </span>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  الهدف: {kpi.target}{kpi.name.includes('كفاءة') || kpi.name.includes('رضا') ? '%' : ''}
                </span>
              </div>

              <TikTokProgress
                value={Math.min((kpi.current / kpi.target) * 100, 100)}
                color={
                  kpi.status === 'exceeded' ? 'green' :
                  kpi.status === 'on_track' ? 'blue' :
                  'red'
                }
                size="sm"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Performance Chart Placeholder */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 text-center">
        <BarChart3 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          رسم بياني للأداء الشهري
        </h4>
        <p className="text-gray-600 dark:text-gray-400">
          سيتم عرض الرسم البياني التفاعلي هنا قريباً
        </p>
      </div>
    </motion.div>
  );
};

interface DepartmentReportsTabProps {
  department: Department;
}

const DepartmentReportsTab = ({ department }: DepartmentReportsTabProps) => {
  const { t } = useI18n();

  // Mock reports data
  const reports = [
    {
      id: '1',
      title: 'تقرير الأداء الشهري',
      type: 'performance',
      generatedAt: '2024-03-01',
      status: 'ready'
    },
    {
      id: '2',
      title: 'تقرير الموظفين',
      type: 'employees',
      generatedAt: '2024-02-28',
      status: 'ready'
    },
    {
      id: '3',
      title: 'تقرير الوثائق',
      type: 'documents',
      generatedAt: '2024-02-25',
      status: 'generating'
    }
  ];

  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Reports Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          التقارير المتاحة
        </h3>

        <TikTokButton variant="primary" size="sm" className="flex items-center gap-2">
          <Plus className="w-4 h-4" />
          إنشاء تقرير
        </TikTokButton>
      </div>

      {/* Reports List */}
      <div className="space-y-4">
        {reports.map((report, index) => (
          <motion.div
            key={report.id}
            className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>

            <div className="flex-1">
              <div className="font-semibold text-gray-900 dark:text-white">
                {report.title}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                تم الإنشاء: {new Date(report.generatedAt).toLocaleDateString('ar-SA')}
              </div>
            </div>

            <TikTokBadge
              variant={report.status === 'ready' ? 'success' : 'warning'}
            >
              {report.status === 'ready' ? 'جاهز' : 'قيد الإنشاء'}
            </TikTokBadge>

            <div className="flex gap-2">
              {report.status === 'ready' && (
                <motion.button
                  className="p-2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Eye className="w-4 h-4" />
                </motion.button>
              )}

              <motion.button
                className="p-2 text-gray-400 hover:text-green-600 dark:hover:text-green-400"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Edit className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// Export all department pages
export const departmentPages = {
  'EXEC001': () => <DepartmentPage departmentId="EXEC001" />,
  'EXEC002': () => <DepartmentPage departmentId="EXEC002" />,
  'EXEC003': () => <DepartmentPage departmentId="EXEC003" />,
  // Add all other 97 departments...
};
