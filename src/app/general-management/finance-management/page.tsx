'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  DollarSign,
  TrendingUp,
  TrendingDown,
  PieChart,
  BarChart3,
  LineChart,
  Calculator,
  FileText,
  CreditCard,
  PiggyBank,
  Wallet,
  Receipt,
  Target,
  AlertTriangle,
  CheckCircle,
  Clock,
  Calendar,
  Download,
  Upload,
  Filter,
  Eye,
  Edit,
  Plus,
  Settings,
  Building2,
  Coins,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  Zap,
  Shield,
  Users,
  Briefcase,
  Globe,
  Award,
  Star
} from 'lucide-react';
import { TikTokButton, TikTokBadge, TikTokCard, TikTokModal, TikTokInput, TikTokProgress } from '@/components/ui/TikTokComponents';
import { SidebarLayout } from '@/components/modules/general-management/AdvancedSidebar';
import { formatDate } from '@/lib/dateUtils';

export default function FinanceManagementPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const handleSectionChange = (section: string) => {
    setActiveTab(section);
  };

  const tabs = [
    { id: 'overview', label: 'نظرة عامة', icon: Eye },
    { id: 'budgeting', label: 'التخطيط المالي', icon: Calculator },
    { id: 'accounting', label: 'المحاسبة', icon: FileText },
    { id: 'reporting', label: 'التقارير', icon: BarChart3 },
    { id: 'audit', label: 'التدقيق', icon: Shield },
    { id: 'compliance', label: 'الامتثال', icon: CheckCircle }
  ];

  return (
    <SidebarLayout
      currentSection="finance-management"
      onSectionChange={handleSectionChange}
    >
      <div className="space-y-8">
        {/* Header Section */}
        <motion.div
          className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 rounded-2xl p-8 text-white relative overflow-hidden"
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
                <Coins className="w-10 h-10" />
              </motion.div>
              <div className="flex-1">
                <h1 className="text-4xl font-bold mb-3">إدارة المالية</h1>
                <p className="text-xl text-emerald-100 mb-6 leading-relaxed">
                  إدارة شاملة ومتقدمة للشؤون المالية والمحاسبية لضمان الاستدامة والنمو المالي
                </p>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-4 h-4 text-emerald-200" />
                      <span className="text-sm text-emerald-200">الإيرادات</span>
                    </div>
                    <div className="text-2xl font-bold">15.7M ريال</div>
                    <div className="text-sm text-emerald-200">+12% هذا الشهر</div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingDown className="w-4 h-4 text-emerald-200" />
                      <span className="text-sm text-emerald-200">المصروفات</span>
                    </div>
                    <div className="text-2xl font-bold">8.3M ريال</div>
                    <div className="text-sm text-emerald-200">-5% انخفاض</div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <PiggyBank className="w-4 h-4 text-emerald-200" />
                      <span className="text-sm text-emerald-200">صافي الربح</span>
                    </div>
                    <div className="text-2xl font-bold">7.4M ريال</div>
                    <div className="text-sm text-emerald-200">+23% نمو</div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="w-4 h-4 text-emerald-200" />
                      <span className="text-sm text-emerald-200">الأهداف المالية</span>
                    </div>
                    <div className="text-2xl font-bold">94%</div>
                    <div className="text-sm text-emerald-200">محققة</div>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <TikTokButton variant="outline" size="sm" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                  <Download className="w-4 h-4 mr-2" />
                  التقرير المالي
                </TikTokButton>
                <TikTokButton variant="outline" size="sm" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                  <Settings className="w-4 h-4 mr-2" />
                  إعدادات مالية
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
                      ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400'
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
          {activeTab === 'overview' && <FinanceOverviewTab />}
          {activeTab === 'budgeting' && <BudgetingTab />}
          {activeTab === 'accounting' && <AccountingTab />}
          {activeTab === 'reporting' && <ReportingTab />}
          {activeTab === 'audit' && <AuditTab />}
          {activeTab === 'compliance' && <ComplianceTab />}
        </div>
      </div>
    </SidebarLayout>
  );
}

// Finance Overview Tab Component
function FinanceOverviewTab() {
  const financialMetrics = [
    {
      title: 'إجمالي الإيرادات',
      value: '15,750,000 ريال',
      change: '+12%',
      trend: 'up',
      icon: TrendingUp,
      color: 'green',
      period: 'هذا الشهر'
    },
    {
      title: 'إجمالي المصروفات',
      value: '8,320,000 ريال',
      change: '-5%',
      trend: 'down',
      icon: TrendingDown,
      color: 'blue',
      period: 'هذا الشهر'
    },
    {
      title: 'صافي الربح',
      value: '7,430,000 ريال',
      change: '+23%',
      trend: 'up',
      icon: PiggyBank,
      color: 'purple',
      period: 'هذا الشهر'
    },
    {
      title: 'التدفق النقدي',
      value: '4,890,000 ريال',
      change: '+8%',
      trend: 'up',
      icon: Wallet,
      color: 'teal',
      period: 'هذا الشهر'
    }
  ];

  const budgetUtilization = [
    { category: 'الرواتب والمزايا', allocated: 4500000, spent: 4120000, percentage: 92 },
    { category: 'التسويق والإعلان', allocated: 1200000, spent: 980000, percentage: 82 },
    { category: 'التطوير التقني', allocated: 800000, spent: 750000, percentage: 94 },
    { category: 'العمليات واللوجستيات', allocated: 600000, spent: 520000, percentage: 87 }
  ];

  return (
    <div className="space-y-8">
      {/* Financial Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {financialMetrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <motion.div
              key={index}
              className={`p-6 rounded-2xl ${
                metric.color === 'green' ? 'bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-800' :
                metric.color === 'blue' ? 'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-800' :
                metric.color === 'purple' ? 'bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-purple-200 dark:border-purple-800' :
                'bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/20 border-teal-200 dark:border-teal-800'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className={`text-sm font-medium ${
                    metric.color === 'green' ? 'text-green-600 dark:text-green-400' :
                    metric.color === 'blue' ? 'text-blue-600 dark:text-blue-400' :
                    metric.color === 'purple' ? 'text-purple-600 dark:text-purple-400' :
                    'text-teal-600 dark:text-teal-400'
                  }`}>
                    {metric.title}
                  </p>
                  <p className={`text-2xl font-bold ${
                    metric.color === 'green' ? 'text-green-900 dark:text-green-100' :
                    metric.color === 'blue' ? 'text-blue-900 dark:text-blue-100' :
                    metric.color === 'purple' ? 'text-purple-900 dark:text-purple-100' :
                    'text-teal-900 dark:text-teal-100'
                  } mt-2`}>
                    {metric.value}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    {metric.trend === 'up' ? (
                      <ArrowUpRight className={`w-3 h-3 ${
                        metric.color === 'green' ? 'text-green-600' :
                        metric.color === 'purple' ? 'text-purple-600' :
                        'text-teal-600'
                      }`} />
                    ) : (
                      <ArrowDownRight className="w-3 h-3 text-blue-600" />
                    )}
                    <span className={`text-sm ${
                      metric.trend === 'up'
                        ? (metric.color === 'green' ? 'text-green-600' : metric.color === 'purple' ? 'text-purple-600' : 'text-teal-600')
                        : 'text-blue-600'
                    }`}>
                      {metric.change}
                    </span>
                    <span className="text-xs text-gray-500">{metric.period}</span>
                  </div>
                </div>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  metric.color === 'green' ? 'bg-green-100 dark:bg-green-900/30' :
                  metric.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900/30' :
                  metric.color === 'purple' ? 'bg-purple-100 dark:bg-purple-900/30' :
                  'bg-teal-100 dark:bg-teal-900/30'
                }`}>
                  <Icon className={`w-6 h-6 ${
                    metric.color === 'green' ? 'text-green-600' :
                    metric.color === 'blue' ? 'text-blue-600' :
                    metric.color === 'purple' ? 'text-purple-600' :
                    'text-teal-600'
                  }`} />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Budget Utilization and Recent Transactions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Budget Utilization */}
        <TikTokCard className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            استغلال الميزانية حسب الفئات
          </h3>

          <div className="space-y-6">
            {budgetUtilization.map((item, index) => (
              <motion.div
                key={index}
                className="space-y-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-900 dark:text-white">{item.category}</span>
                  <div className="text-right">
                    <span className="font-bold text-gray-900 dark:text-white">
                      {item.spent.toLocaleString()} ريال
                    </span>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      من {item.allocated.toLocaleString()} ريال
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <TikTokProgress
                    value={item.percentage}
                    max={100}
                    className="h-3 bg-gray-200 dark:bg-gray-700"
                  />
                  <div className="absolute -top-1 w-3 h-3 rounded-full border-2 border-white bg-emerald-500"
                       style={{ left: `${item.percentage}%`, transform: 'translateX(-50%)' }}>
                  </div>
                </div>

                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                  <span>المتبقي: {(item.allocated - item.spent).toLocaleString()} ريال</span>
                  <span>{item.percentage}% مستغل</span>
                </div>
              </motion.div>
            ))}
          </div>
        </TikTokCard>

        {/* Recent Financial Activities */}
        <TikTokCard className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            الأنشطة المالية الأخيرة
          </h3>

          <div className="space-y-4">
            {[
              {
                type: 'income',
                title: 'إيرادات من مبيعات المنتجات',
                amount: '450,000 ريال',
                time: 'قبل ساعتين',
                category: 'المبيعات'
              },
              {
                type: 'expense',
                title: 'دفع رواتب الموظفين',
                amount: '2,340,000 ريال',
                time: 'أمس',
                category: 'الرواتب'
              },
              {
                type: 'income',
                title: 'إيرادات من الخدمات الاستشارية',
                amount: '180,000 ريال',
                time: 'منذ يومين',
                category: 'الخدمات'
              },
              {
                type: 'expense',
                title: 'شراء معدات تقنية جديدة',
                amount: '320,000 ريال',
                time: 'منذ 3 أيام',
                category: 'التقنية'
              }
            ].map((activity, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                  activity.type === 'income' ? 'bg-green-100 dark:bg-green-900/30' : 'bg-red-100 dark:bg-red-900/30'
                }`}>
                  {activity.type === 'income' ? (
                    <ArrowUpRight className="w-5 h-5 text-green-600" />
                  ) : (
                    <ArrowDownRight className="w-5 h-5 text-red-600" />
                  )}
                </div>

                <div className="flex-1">
                  <p className="font-medium text-gray-900 dark:text-white mb-1">
                    {activity.title}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <span>{activity.category}</span>
                    <span>•</span>
                    <Clock className="w-3 h-3" />
                    <span>{activity.time}</span>
                  </div>
                </div>

                <div className={`font-bold ${
                  activity.type === 'income' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                }`}>
                  {activity.type === 'income' ? '+' : '-'}{activity.amount}
                </div>
              </motion.div>
            ))}
          </div>
        </TikTokCard>
      </div>

      {/* Financial Health Indicators */}
      <TikTokCard className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
          مؤشرات الصحة المالية
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'نسبة السيولة',
              value: '2.3',
              status: 'ممتاز',
              description: 'القدرة على الوفاء بالالتزامات قصيرة الأجل'
            },
            {
              title: 'نسبة المديونية',
              value: '0.45',
              status: 'جيد',
              description: 'نسبة الديون إلى الأصول الكلية'
            },
            {
              title: 'العائد على الأصول',
              value: '18.7%',
              status: 'ممتاز',
              description: 'كفاءة استخدام الأصول في توليد الأرباح'
            },
            {
              title: 'العائد على الاستثمار',
              value: '24.3%',
              status: 'ممتاز',
              description: 'كفاءة الاستثمارات في توليد العوائد'
            }
          ].map((indicator, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-center space-y-3">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {indicator.value}
                </div>
                <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {indicator.title}
                </div>
                <TikTokBadge
                  className={
                    indicator.status === 'ممتاز' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                    indicator.status === 'جيد' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' :
                    'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                  }
                >
                  {indicator.status}
                </TikTokBadge>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  {indicator.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </TikTokCard>
    </div>
  );
}

// Budgeting Tab Component
function BudgetingTab() {
  return (
    <TikTokCard className="p-8">
      <div className="text-center py-16">
        <Calculator className="w-20 h-20 text-emerald-500 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          التخطيط والميزانية المالية
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          نظام شامل لتخطيط وإدارة الميزانيات المالية والتنبؤ بالاحتياجات المستقبلية
        </p>
        <TikTokButton size="lg">
          <Calculator className="w-5 h-5 mr-2" />
          إنشاء ميزانية جديدة
        </TikTokButton>
      </div>
    </TikTokCard>
  );
}

// Accounting Tab Component
function AccountingTab() {
  return (
    <TikTokCard className="p-8">
      <div className="text-center py-16">
        <FileText className="w-20 h-20 text-blue-500 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          إدارة المحاسبة والقيود
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          نظام محاسبي متكامل لتسجيل وتتبع جميع المعاملات المالية والقيود المحاسبية
        </p>
        <TikTokButton size="lg" variant="outline">
          <Plus className="w-5 h-5 mr-2" />
          إضافة قيد محاسبي جديد
        </TikTokButton>
      </div>
    </TikTokCard>
  );
}

// Reporting Tab Component
function ReportingTab() {
  return (
    <TikTokCard className="p-8">
      <div className="text-center py-16">
        <BarChart3 className="w-20 h-20 text-purple-500 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          التقارير المالية والمحاسبية
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          تقارير مالية شاملة ومفصلة مع تحليلات متقدمة ورسوم بيانية تفاعلية
        </p>
        <TikTokButton size="lg">
          <Download className="w-5 h-5 mr-2" />
          تصدير التقرير المالي
        </TikTokButton>
      </div>
    </TikTokCard>
  );
}

// Audit Tab Component
function AuditTab() {
  return (
    <TikTokCard className="p-8">
      <div className="text-center py-16">
        <Shield className="w-20 h-20 text-indigo-500 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          التدقيق والمراجعة المالية
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          ضمان دقة وصحة السجلات المالية والامتثال للمعايير المحاسبية والقانونية
        </p>
        <TikTokButton size="lg" variant="outline">
          <Shield className="w-5 h-5 mr-2" />
          بدء عملية التدقيق
        </TikTokButton>
      </div>
    </TikTokCard>
  );
}

// Compliance Tab Component
function ComplianceTab() {
  return (
    <TikTokCard className="p-8">
      <div className="text-center py-16">
        <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          الامتثال واللوائح المالية
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          ضمان الامتثال لجميع اللوائح والقوانين المالية والمحاسبية الوطنية والدولية
        </p>
        <TikTokButton size="lg">
          <CheckCircle className="w-5 h-5 mr-2" />
          مراجعة الامتثال المالي
        </TikTokButton>
      </div>
    </TikTokCard>
  );
}
