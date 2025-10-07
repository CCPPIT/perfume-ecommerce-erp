'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  Building2,
  Users,
  TrendingUp,
  Calendar,
  DollarSign,
  FileText,
  Settings,
  Activity,
  Target,
  Award,
  AlertTriangle,
  CheckCircle,
  Clock,
  BarChart3,
  UserCheck,
  Workflow,
  Shield,
  Zap,
  Database,
  MessageCircle,
  Bell,
  Edit,
  Trash2,
  Plus,
  Download,
  Upload,
  Eye,
  Filter
} from 'lucide-react';
import { TikTokButton, TikTokBadge, TikTokCard, TikTokModal, TikTokInput, TikTokProgress } from '@/components/ui/TikTokComponents';
import { SidebarLayout } from '@/components/modules/general-management/AdvancedSidebar';
import { getDepartmentById, Department } from '@/components/modules/general-management/departments';

interface DepartmentDetailPageProps {
  params: {
    id: string;
  };
}

export default function DepartmentDetailPage({ params }: DepartmentDetailPageProps) {
  const router = useRouter();
  const [department, setDepartment] = useState<Department | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const dept = getDepartmentById(params.id);
    setDepartment(dept || null);
    setLoading(false);
  }, [params.id]);

  const handleSectionChange = (section: string) => {
    if (section.startsWith('DEPT_')) {
      router.push(`/general-management/${section}`);
    }
  };

  if (loading) {
    return (
      <SidebarLayout
        currentSection={params.id}
        onSectionChange={handleSectionChange}
      >
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
        </div>
      </SidebarLayout>
    );
  }

  if (!department) {
    return (
      <SidebarLayout
        currentSection={params.id}
        onSectionChange={handleSectionChange}
      >
        <div className="text-center py-12">
          <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            القسم غير موجود
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            لم نتمكن من العثور على القسم المطلوب
          </p>
          <TikTokButton onClick={() => router.push('/general-management')}>
            العودة للرئيسية
          </TikTokButton>
        </div>
      </SidebarLayout>
    );
  }

  const tabs = [
    { id: 'overview', label: 'نظرة عامة', icon: Eye },
    { id: 'employees', label: 'الموظفون', icon: Users },
    { id: 'performance', label: 'الأداء', icon: TrendingUp },
    { id: 'documents', label: 'الوثائق', icon: FileText },
    { id: 'projects', label: 'المشاريع', icon: Target },
    { id: 'reports', label: 'التقارير', icon: BarChart3 }
  ];

  return (
    <SidebarLayout
      currentSection={params.id}
      onSectionChange={handleSectionChange}
    >
      <div className="space-y-8">
        {/* Header Section */}
        <motion.div
          className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-white/20 rounded-xl flex items-center justify-center">
              <Building2 className="w-10 h-10" />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-2">{department.name}</h1>
              <p className="text-purple-100 mb-4">{department.description}</p>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <span className="text-sm">الكود:</span>
                  <TikTokBadge variant="secondary">{department.code}</TikTokBadge>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm">الحالة:</span>
                  <TikTokBadge variant={department.status === 'active' ? 'success' : 'warning'}>
                    {department.status === 'active' ? 'نشط' : 'غير نشط'}
                  </TikTokBadge>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span className="text-sm">{department.employeeCount || 0} موظف</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4" />
                  <span className="text-sm">${((department.budget || 0) / 1000000).toFixed(1)}M</span>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <TikTokButton variant="outline" size="sm">
                <Edit className="w-4 h-4 mr-2" />
                تعديل
              </TikTokButton>
              <TikTokButton variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                تصدير
              </TikTokButton>
            </div>
          </div>
        </motion.div>

        {/* Tabs Navigation */}
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="flex space-x-8">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2 transition-colors ${
                    activeTab === tab.id
                      ? 'border-purple-500 text-purple-600 dark:text-purple-400'
                      : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="min-h-[600px]">
          {activeTab === 'overview' && <OverviewTab department={department} />}
          {activeTab === 'employees' && <EmployeesTab department={department} />}
          {activeTab === 'performance' && <PerformanceTab department={department} />}
          {activeTab === 'documents' && <DocumentsTab department={department} />}
          {activeTab === 'projects' && <ProjectsTab department={department} />}
          {activeTab === 'reports' && <ReportsTab department={department} />}
        </div>
      </div>
    </SidebarLayout>
  );
}

// Overview Tab Component
function OverviewTab({ department }: { department: Department }) {
  const stats = [
    {
      title: 'إجمالي الموظفين',
      value: department.employeeCount || 0,
      icon: Users,
      color: 'blue',
      change: '+5%'
    },
    {
      title: 'الميزانية السنوية',
      value: `$${(department.budget || 0).toLocaleString()}`,
      icon: DollarSign,
      color: 'green',
      change: '+12%'
    },
    {
      title: 'المشاريع النشطة',
      value: '8',
      icon: Target,
      color: 'purple',
      change: '+3'
    },
    {
      title: 'نسبة الإنجاز',
      value: '87%',
      icon: Activity,
      color: 'orange',
      change: '+7%'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Statistics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <TikTokCard key={index} className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">
                    {stat.value}
                  </p>
                  <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                    {stat.change}
                  </p>
                </div>
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                  stat.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900/30' :
                  stat.color === 'green' ? 'bg-green-100 dark:bg-green-900/30' :
                  stat.color === 'purple' ? 'bg-purple-100 dark:bg-purple-900/30' :
                  'bg-orange-100 dark:bg-orange-900/30'
                }`}>
                  <Icon className={`w-6 h-6 ${
                    stat.color === 'blue' ? 'text-blue-600' :
                    stat.color === 'green' ? 'text-green-600' :
                    stat.color === 'purple' ? 'text-purple-600' :
                    'text-orange-600'
                  }`} />
                </div>
              </div>
            </TikTokCard>
          );
        })}
      </div>

      {/* Recent Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TikTokCard className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            الأنشطة الأخيرة
          </h3>
          <div className="space-y-4">
            {[
              { action: 'تم إنجاز مشروع التطوير الرقمي', time: 'قبل ساعتين', type: 'success' },
              { action: 'تم تعيين موظف جديد', time: 'قبل 4 ساعات', type: 'info' },
              { action: 'تحديث في السياسات الداخلية', time: 'أمس', type: 'warning' },
              { action: 'اجتماع مجلس الإدارة', time: 'منذ يومين', type: 'info' }
            ].map((activity, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className={`w-2 h-2 rounded-full ${
                  activity.type === 'success' ? 'bg-green-500' :
                  activity.type === 'warning' ? 'bg-yellow-500' :
                  'bg-blue-500'
                }`} />
                <div className="flex-1">
                  <p className="text-sm text-gray-900 dark:text-white">
                    {activity.action}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </TikTokCard>

        <TikTokCard className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            مؤشرات الأداء الرئيسية
          </h3>
          <div className="space-y-4">
            {[
              { metric: 'رضا الموظفين', value: 92, target: 90 },
              { metric: 'كفاءة العمليات', value: 87, target: 85 },
              { metric: 'الامتثال للمعايير', value: 95, target: 95 },
              { metric: 'التطوير المستمر', value: 78, target: 80 }
            ].map((kpi, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">{kpi.metric}</span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {kpi.value}% / {kpi.target}%
                  </span>
                </div>
                <TikTokProgress
                  value={kpi.value}
                  max={100}
                  className="h-2"
                />
              </div>
            ))}
          </div>
        </TikTokCard>
      </div>
    </div>
  );
}

// Employees Tab Component
function EmployeesTab({ department }: { department: Department }) {
  return (
    <TikTokCard className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          موظفو القسم ({department.employeeCount || 0})
        </h3>
        <TikTokButton size="sm">
          <Plus className="w-4 h-4 mr-2" />
          إضافة موظف
        </TikTokButton>
      </div>

      <div className="text-center py-12 text-gray-500 dark:text-gray-400">
        <Users className="w-16 h-16 mx-auto mb-4 opacity-50" />
        <p>سيتم عرض قائمة الموظفين قريباً</p>
      </div>
    </TikTokCard>
  );
}

// Performance Tab Component
function PerformanceTab({ department }: { department: Department }) {
  return (
    <TikTokCard className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          تقارير الأداء
        </h3>
        <TikTokButton size="sm" variant="outline">
          <Download className="w-4 h-4 mr-2" />
          تصدير التقرير
        </TikTokButton>
      </div>

      <div className="text-center py-12 text-gray-500 dark:text-gray-400">
        <TrendingUp className="w-16 h-16 mx-auto mb-4 opacity-50" />
        <p>سيتم عرض تقارير الأداء قريباً</p>
      </div>
    </TikTokCard>
  );
}

// Documents Tab Component
function DocumentsTab({ department }: { department: Department }) {
  return (
    <TikTokCard className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          وثائق القسم
        </h3>
        <TikTokButton size="sm">
          <Upload className="w-4 h-4 mr-2" />
          رفع وثيقة
        </TikTokButton>
      </div>

      <div className="text-center py-12 text-gray-500 dark:text-gray-400">
        <FileText className="w-16 h-16 mx-auto mb-4 opacity-50" />
        <p>سيتم عرض الوثائق قريباً</p>
      </div>
    </TikTokCard>
  );
}

// Projects Tab Component
function ProjectsTab({ department }: { department: Department }) {
  return (
    <TikTokCard className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          مشاريع القسم
        </h3>
        <TikTokButton size="sm">
          <Plus className="w-4 h-4 mr-2" />
          مشروع جديد
        </TikTokButton>
      </div>

      <div className="text-center py-12 text-gray-500 dark:text-gray-400">
        <Target className="w-16 h-16 mx-auto mb-4 opacity-50" />
        <p>سيتم عرض المشاريع قريباً</p>
      </div>
    </TikTokCard>
  );
}

// Reports Tab Component
function ReportsTab({ department }: { department: Department }) {
  return (
    <TikTokCard className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          التقارير والإحصائيات
        </h3>
        <TikTokButton size="sm" variant="outline">
          <Filter className="w-4 h-4 mr-2" />
          فلترة
        </TikTokButton>
      </div>

      <div className="text-center py-12 text-gray-500 dark:text-gray-400">
        <BarChart3 className="w-16 h-16 mx-auto mb-4 opacity-50" />
        <p>سيتم عرض التقارير قريباً</p>
      </div>
    </TikTokCard>
  );
}
