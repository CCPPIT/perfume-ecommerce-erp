'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  UserPlus,
  Search,
  Filter,
  MoreVertical,
  Edit,
  Trash2,
  Eye,
  UserCheck,
  UserX,
  Mail,
  Phone,
  Calendar,
  Award,
  TrendingUp,
  Clock,
  DollarSign,
  MapPin,
  GraduationCap,
  Briefcase,
  Target,
  Activity,
  Star,
  Heart,
  MessageSquare,
  CheckCircle,
  AlertTriangle,
  XCircle,
  Plus,
  Download,
  Upload,
  Settings,
  BarChart3,
  PieChart,
  LineChart,
  FileText,
  Camera,
  Shield,
  Key,
  Bell,
  Zap,
  Globe,
  HeartHandshake,
  UserCog,
  Building,
  TrendingDown
} from 'lucide-react';
import { TikTokButton, TikTokBadge, TikTokCard, TikTokModal, TikTokInput, TikTokProgress } from '@/components/ui/TikTokComponents';
import { SidebarLayout } from '@/components/modules/general-management/AdvancedSidebar';
import { formatDate } from '@/lib/dateUtils';

export default function HRManagementPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const handleSectionChange = (section: string) => {
    setActiveTab(section);
  };

  const tabs = [
    { id: 'overview', label: 'نظرة عامة', icon: Eye },
    { id: 'employees', label: 'الموظفون', icon: Users },
    { id: 'recruitment', label: 'التوظيف', icon: UserPlus },
    { id: 'performance', label: 'الأداء', icon: Award },
    { id: 'training', label: 'التدريب', icon: GraduationCap },
    { id: 'payroll', label: 'الرواتب', icon: DollarSign },
    { id: 'reports', label: 'التقارير', icon: BarChart3 }
  ];

  return (
    <SidebarLayout
      currentSection="hr-management"
      onSectionChange={handleSectionChange}
    >
      <div className="space-y-8">
        {/* Header Section */}
        <motion.div
          className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 rounded-2xl p-8 text-white relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full translate-y-24 -translate-x-24"></div>
          </div>

          <div className="relative">
            <div className="flex items-center gap-6">
              <motion.div
                className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm"
                whileHover={{ scale: 1.05, rotate: 5 }}
              >
                <HeartHandshake className="w-10 h-10" />
              </motion.div>
              <div className="flex-1">
                <h1 className="text-4xl font-bold mb-3">إدارة الموارد البشرية</h1>
                <p className="text-xl text-green-100 mb-6 leading-relaxed">
                  بناء وتطوير رأس المال البشري لتحقيق التميز المؤسسي والنمو المستدام
                </p>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-4 h-4 text-green-200" />
                      <span className="text-sm text-green-200">إجمالي الموظفين</span>
                    </div>
                    <div className="text-2xl font-bold">1,247</div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <UserPlus className="w-4 h-4 text-green-200" />
                      <span className="text-sm text-green-200">التوظيف الجديد</span>
                    </div>
                    <div className="text-2xl font-bold">+23</div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <GraduationCap className="w-4 h-4 text-green-200" />
                      <span className="text-sm text-green-200">الدورات التدريبية</span>
                    </div>
                    <div className="text-2xl font-bold">156</div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-4 h-4 text-green-200" />
                      <span className="text-sm text-green-200">معدل الأداء</span>
                    </div>
                    <div className="text-2xl font-bold">92%</div>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <TikTokButton variant="outline" size="sm" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                  <UserPlus className="w-4 h-4 mr-2" />
                  توظيف جديد
                </TikTokButton>
                <TikTokButton variant="outline" size="sm" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                  <Download className="w-4 h-4 mr-2" />
                  تقرير الموارد البشرية
                </TikTokButton>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tabs Navigation */}
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2 transition-colors whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-green-500 text-green-600 dark:text-green-400'
                      : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                  {tab.id === 'employees' && (
                    <TikTokBadge variant="secondary" size="sm">247</TikTokBadge>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="min-h-[600px]">
          {activeTab === 'overview' && <HROverviewTab />}
          {activeTab === 'employees' && <EmployeesTab />}
          {activeTab === 'recruitment' && <RecruitmentTab />}
          {activeTab === 'performance' && <PerformanceTab />}
          {activeTab === 'training' && <TrainingTab />}
          {activeTab === 'payroll' && <PayrollTab />}
          {activeTab === 'reports' && <HRReportsTab />}
        </div>
      </div>
    </SidebarLayout>
  );
}

// HR Overview Tab Component
function HROverviewTab() {
  const hrStats = [
    {
      title: 'إجمالي الموظفين',
      value: '1,247',
      change: '+23 هذا الشهر',
      trend: 'up',
      icon: Users,
      color: 'blue'
    },
    {
      title: 'معدل التوظيف',
      value: '94%',
      change: '+3% تحسن',
      trend: 'up',
      icon: UserPlus,
      color: 'green'
    },
    {
      title: 'رضا الموظفين',
      value: '92%',
      change: '+5% تحسن',
      trend: 'up',
      icon: Heart,
      color: 'purple'
    },
    {
      title: 'معدل الاحتفاظ',
      value: '87%',
      change: '+2% تحسن',
      trend: 'up',
      icon: UserCheck,
      color: 'teal'
    }
  ];

  const recentActivities = [
    {
      type: 'hiring',
      title: 'تم توظيف مطور برمجيات جديد',
      department: 'إدارة التقنية',
      time: 'قبل ساعتين',
      priority: 'medium'
    },
    {
      type: 'training',
      title: 'بدء دورة تدريبية في القيادة',
      department: 'إدارة التدريب',
      time: 'قبل 4 ساعات',
      priority: 'high'
    },
    {
      type: 'promotion',
      title: 'ترقية مدير قسم لمنصب أعلى',
      department: 'إدارة المبيعات',
      time: 'أمس',
      priority: 'high'
    },
    {
      type: 'policy',
      title: 'تحديث سياسات الموارد البشرية',
      department: 'إدارة الموارد البشرية',
      time: 'منذ يومين',
      priority: 'medium'
    }
  ];

  return (
    <div className="space-y-8">
      {/* HR Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {hrStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={index}
              className={`p-6 rounded-2xl ${
                stat.color === 'blue' ? 'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-800' :
                stat.color === 'green' ? 'bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-800' :
                stat.color === 'purple' ? 'bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-purple-200 dark:border-purple-800' :
                'bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/20 border-teal-200 dark:border-teal-800'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className={`text-sm font-medium ${
                    stat.color === 'blue' ? 'text-blue-600 dark:text-blue-400' :
                    stat.color === 'green' ? 'text-green-600 dark:text-green-400' :
                    stat.color === 'purple' ? 'text-purple-600 dark:text-purple-400' :
                    'text-teal-600 dark:text-teal-400'
                  }`}>
                    {stat.title}
                  </p>
                  <p className={`text-3xl font-bold ${
                    stat.color === 'blue' ? 'text-blue-900 dark:text-blue-100' :
                    stat.color === 'green' ? 'text-green-900 dark:text-green-100' :
                    stat.color === 'purple' ? 'text-purple-900 dark:text-purple-100' :
                    'text-teal-900 dark:text-teal-100'
                  } mt-2`}>
                    {stat.value}
                  </p>
                  <p className={`text-sm mt-1 ${
                    stat.trend === 'up' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                  }`}>
                    {stat.change}
                  </p>
                </div>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  stat.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900/30' :
                  stat.color === 'green' ? 'bg-green-100 dark:bg-green-900/30' :
                  stat.color === 'purple' ? 'bg-purple-100 dark:bg-purple-900/30' :
                  'bg-teal-100 dark:bg-teal-900/30'
                }`}>
                  <Icon className={`w-6 h-6 ${
                    stat.color === 'blue' ? 'text-blue-600' :
                    stat.color === 'green' ? 'text-green-600' :
                    stat.color === 'purple' ? 'text-purple-600' :
                    'text-teal-600'
                  }`} />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* HR Activities and Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activities */}
        <TikTokCard className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            الأنشطة الأخيرة في الموارد البشرية
          </h3>

          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                  activity.type === 'hiring' ? 'bg-blue-100 dark:bg-blue-900/30' :
                  activity.type === 'training' ? 'bg-green-100 dark:bg-green-900/30' :
                  activity.type === 'promotion' ? 'bg-purple-100 dark:bg-purple-900/30' :
                  'bg-orange-100 dark:bg-orange-900/30'
                }`}>
                  {activity.type === 'hiring' && <UserPlus className="w-5 h-5 text-blue-600" />}
                  {activity.type === 'training' && <GraduationCap className="w-5 h-5 text-green-600" />}
                  {activity.type === 'promotion' && <TrendingUp className="w-5 h-5 text-purple-600" />}
                  {activity.type === 'policy' && <FileText className="w-5 h-5 text-orange-600" />}
                </div>

                <div className="flex-1">
                  <p className="font-medium text-gray-900 dark:text-white mb-1">
                    {activity.title}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Building className="w-3 h-3" />
                    <span>{activity.department}</span>
                    <span>•</span>
                    <Clock className="w-3 h-3" />
                    <span>{activity.time}</span>
                    {activity.priority === 'high' && (
                      <TikTokBadge variant="error" size="sm">عالي الأولوية</TikTokBadge>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </TikTokCard>

        {/* Performance Metrics */}
        <TikTokCard className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            مؤشرات الأداء الرئيسية
          </h3>

          <div className="space-y-6">
            {[
              { metric: 'معدل التوظيف', current: 94, target: 90, color: 'green' },
              { metric: 'رضا الموظفين', current: 92, target: 85, color: 'blue' },
              { metric: 'معدل الاحتفاظ', current: 87, target: 80, color: 'purple' },
              { metric: 'كفاءة التدريب', current: 89, target: 85, color: 'orange' },
              { metric: 'التنوع والشمولية', current: 78, target: 75, color: 'teal' }
            ].map((kpi, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-900 dark:text-white">{kpi.metric}</span>
                  <div className="text-right">
                    <span className="font-bold text-lg text-gray-900 dark:text-white">
                      {kpi.current}%
                    </span>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      هدف: {kpi.target}%
                    </div>
                  </div>
                </div>

                <TikTokProgress
                  value={kpi.current}
                  max={100}
                  className={`h-3 ${
                    kpi.color === 'green' ? 'bg-green-100' :
                    kpi.color === 'blue' ? 'bg-blue-100' :
                    kpi.color === 'purple' ? 'bg-purple-100' :
                    kpi.color === 'orange' ? 'bg-orange-100' :
                    'bg-teal-100'
                  }`}
                />
              </div>
            ))}
          </div>
        </TikTokCard>
      </div>

      {/* Department Distribution */}
      <TikTokCard className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
          توزيع الموظفين حسب الأقسام
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: 'الإدارة التنفيذية', count: 12, percentage: 1, color: 'purple' },
            { name: 'إدارة التقنية', count: 156, percentage: 13, color: 'blue' },
            { name: 'إدارة المالية', count: 89, percentage: 7, color: 'green' },
            { name: 'إدارة التسويق', count: 134, percentage: 11, color: 'orange' },
            { name: 'إدارة المبيعات', count: 203, percentage: 16, color: 'red' },
            { name: 'إدارة العمليات', count: 178, percentage: 14, color: 'teal' }
          ].map((dept, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  {dept.name}
                </h4>
                <div className={`w-3 h-3 rounded-full ${
                  dept.color === 'purple' ? 'bg-purple-500' :
                  dept.color === 'blue' ? 'bg-blue-500' :
                  dept.color === 'green' ? 'bg-green-500' :
                  dept.color === 'orange' ? 'bg-orange-500' :
                  dept.color === 'red' ? 'bg-red-500' :
                  'bg-teal-500'
                }`}></div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">عدد الموظفين</span>
                  <span className="font-medium text-gray-900 dark:text-white">{dept.count}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">النسبة المئوية</span>
                  <span className="font-medium text-gray-900 dark:text-white">{dept.percentage}%</span>
                </div>
                <TikTokProgress value={dept.percentage} max={20} className="h-2" />
              </div>
            </motion.div>
          ))}
        </div>
      </TikTokCard>
    </div>
  );
}

// Employees Tab Component
function EmployeesTab() {
  return (
    <TikTokCard className="p-8">
      <div className="text-center py-16">
        <Users className="w-20 h-20 text-green-500 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          إدارة الموظفين
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          نظام شامل لإدارة جميع موظفي المؤسسة مع تتبع الأداء والحضور والتطوير المهني
        </p>
        <TikTokButton size="lg">
          <Users className="w-5 h-5 mr-2" />
          عرض جميع الموظفين
        </TikTokButton>
      </div>
    </TikTokCard>
  );
}

// Recruitment Tab Component
function RecruitmentTab() {
  return (
    <TikTokCard className="p-8">
      <div className="text-center py-16">
        <UserPlus className="w-20 h-20 text-blue-500 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          إدارة التوظيف والتعيين
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          نظام متكامل لإدارة عمليات التوظيف من الإعلان عن الوظائف وحتى التعيين والاستقبال
        </p>
        <TikTokButton size="lg" variant="outline">
          <Plus className="w-5 h-5 mr-2" />
          نشر وظيفة جديدة
        </TikTokButton>
      </div>
    </TikTokCard>
  );
}

// Performance Tab Component
function PerformanceTab() {
  return (
    <TikTokCard className="p-8">
      <div className="text-center py-16">
        <Award className="w-20 h-20 text-purple-500 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          إدارة الأداء والتقييم
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          نظام شامل لتقييم أداء الموظفين وتطوير خطط التحسين والتطوير المهني
        </p>
        <TikTokButton size="lg">
          <Award className="w-5 h-5 mr-2" />
          بدء تقييم الأداء
        </TikTokButton>
      </div>
    </TikTokCard>
  );
}

// Training Tab Component
function TrainingTab() {
  return (
    <TikTokCard className="p-8">
      <div className="text-center py-16">
        <GraduationCap className="w-20 h-20 text-orange-500 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          إدارة التدريب والتطوير
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          تطوير وتنفيذ برامج التدريب والتطوير المهني لرفع كفاءة الموظفين
        </p>
        <TikTokButton size="lg" variant="outline">
          <Plus className="w-5 h-5 mr-2" />
          إضافة دورة تدريبية جديدة
        </TikTokButton>
      </div>
    </TikTokCard>
  );
}

// Payroll Tab Component
function PayrollTab() {
  return (
    <TikTokCard className="p-8">
      <div className="text-center py-16">
        <DollarSign className="w-20 h-20 text-emerald-500 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          إدارة الرواتب والمزايا
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          حساب وإدارة الرواتب والمزايا المالية والتعويضات لجميع الموظفين
        </p>
        <TikTokButton size="lg">
          <DollarSign className="w-5 h-5 mr-2" />
          معالجة كشوف المرتبات
        </TikTokButton>
      </div>
    </TikTokCard>
  );
}

// HR Reports Tab Component
function HRReportsTab() {
  return (
    <TikTokCard className="p-8">
      <div className="text-center py-16">
        <BarChart3 className="w-20 h-20 text-indigo-500 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          تقارير الموارد البشرية
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          تقارير شاملة ومفصلة عن جميع جوانب الموارد البشرية والأداء المؤسسي
        </p>
        <TikTokButton size="lg" variant="outline">
          <Download className="w-5 h-5 mr-2" />
          تصدير التقرير الشامل
        </TikTokButton>
      </div>
    </TikTokCard>
  );
}
