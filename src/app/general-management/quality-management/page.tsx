'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Award,
  Eye,
  Settings,
  BarChart3,
  Users,
  FileText,
  Calendar,
  Plus,
  Download,
  Upload,
  Filter,
  Edit,
  Trash2,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  Target,
  Activity,
  Star,
  Shield,
  Zap,
  Clock,
  DollarSign,
  ThumbsUp,
  MessageSquare
} from 'lucide-react';
import { TikTokButton, TikTokBadge, TikTokCard, TikTokModal, TikTokInput, TikTokProgress } from '@/components/ui/TikTokComponents';
import { SidebarLayout } from '@/components/modules/general-management/AdvancedSidebar';
import { formatDate } from '@/lib/dateUtils';

export default function QualityManagementPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const handleSectionChange = (section: string) => {
    setActiveTab(section);
  };

  const tabs = [
    { id: 'overview', label: 'نظرة عامة', icon: Eye },
    { id: 'standards', label: 'المعايير', icon: Award },
    { id: 'audits', label: 'المراجعات', icon: CheckCircle },
    { id: 'improvement', label: 'التحسين', icon: TrendingUp },
    { id: 'reports', label: 'التقارير', icon: BarChart3 },
    { id: 'settings', label: 'الإعدادات', icon: Settings }
  ];

  return (
    <SidebarLayout
      currentSection="quality-management"
      onSectionChange={handleSectionChange}
    >
      <div className="space-y-8">
        {/* Header Section */}
        <motion.div
          className="bg-gradient-to-r from-teal-600 via-green-600 to-emerald-600 rounded-2xl p-8 text-white relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="relative">
            <div className="flex items-center gap-6">
              <motion.div
                className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm"
                whileHover={{ scale: 1.05, rotate: 5 }}
              >
                <Award className="w-10 h-10" />
              </motion.div>
              <div className="flex-1">
                <h1 className="text-4xl font-bold mb-3">إدارة الجودة</h1>
                <p className="text-xl text-teal-100 mb-6 leading-relaxed">
                  نظام شامل لضمان الجودة وتحسين العمليات والارتقاء بمعايير الخدمة والمنتجات
                </p>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-4 h-4 text-teal-200" />
                      <span className="text-sm text-teal-200">معايير الجودة</span>
                    </div>
                    <div className="text-2xl font-bold">156 معيار</div>
                    <div className="text-sm text-teal-200">معتمد ونشط</div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="w-4 h-4 text-teal-200" />
                      <span className="text-sm text-teal-200">المراجعات الشهرية</span>
                    </div>
                    <div className="text-2xl font-bold">12 مراجعة</div>
                    <div className="text-sm text-teal-200">تم إجراؤها</div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-4 h-4 text-teal-200" />
                      <span className="text-sm text-teal-200">مؤشر الجودة</span>
                    </div>
                    <div className="text-2xl font-bold">94.7%</div>
                    <div className="text-sm text-teal-200">+2.3% تحسن</div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-4 h-4 text-teal-200" />
                      <span className="text-sm text-teal-200">فريق الجودة</span>
                    </div>
                    <div className="text-2xl font-bold">23 متخصص</div>
                    <div className="text-sm text-teal-200">معتمدون</div>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <TikTokButton variant="outline" size="sm" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                  <Plus className="w-4 h-4 mr-2" />
                  معيار جودة جديد
                </TikTokButton>
                <TikTokButton variant="outline" size="sm" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  مراجعة جودة
                </TikTokButton>
                <TikTokButton variant="outline" size="sm" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                  <Download className="w-4 h-4 mr-2" />
                  تقرير الجودة
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
                      ? 'border-teal-500 text-teal-600 dark:text-teal-400'
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
          {activeTab === 'overview' && <QualityOverviewTab />}
          {activeTab === 'standards' && <StandardsTab />}
          {activeTab === 'audits' && <AuditsTab />}
          {activeTab === 'improvement' && <ImprovementTab />}
          {activeTab === 'reports' && <QualityReportsTab />}
          {activeTab === 'settings' && <QualitySettingsTab />}
        </div>
      </div>
    </SidebarLayout>
  );
}

// Quality Overview Tab Component
function QualityOverviewTab() {
  const qualityStats = [
    {
      title: 'معايير الجودة المعتمدة',
      value: '156 معيار',
      change: '+8 هذا الشهر',
      trend: 'up',
      icon: Award,
      color: 'teal'
    },
    {
      title: 'نسبة الامتثال للمعايير',
      value: '94.7%',
      change: '+2.3%',
      trend: 'up',
      icon: CheckCircle,
      color: 'green'
    },
    {
      title: 'عدد المراجعات الداخلية',
      value: '12 مراجعة',
      change: '+3 هذا الشهر',
      trend: 'up',
      icon: Activity,
      color: 'blue'
    },
    {
      title: 'شكاوى الجودة',
      value: '3 شكاوى',
      change: '-7 شكاوى',
      trend: 'down',
      icon: AlertTriangle,
      color: 'red'
    }
  ];

  const qualityMetrics = [
    {
      metric: 'جودة المنتجات',
      current: 96.2,
      target: 95,
      trend: 'up',
      status: 'ممتاز'
    },
    {
      metric: 'جودة الخدمة',
      current: 93.8,
      target: 92,
      trend: 'up',
      status: 'جيد جداً'
    },
    {
      metric: 'رضا العملاء',
      current: 94.1,
      target: 90,
      trend: 'up',
      status: 'ممتاز'
    },
    {
      metric: 'كفاءة العمليات',
      current: 91.5,
      target: 88,
      trend: 'up',
      status: 'جيد'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Quality Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {qualityStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={index}
              className={`p-6 rounded-2xl ${
                stat.color === 'teal' ? 'bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/20 border-teal-200 dark:border-teal-800' :
                stat.color === 'green' ? 'bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-800' :
                stat.color === 'blue' ? 'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-800' :
                'bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 border-red-200 dark:border-red-800'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className={`text-sm font-medium ${
                    stat.color === 'teal' ? 'text-teal-600 dark:text-teal-400' :
                    stat.color === 'green' ? 'text-green-600 dark:text-green-400' :
                    stat.color === 'blue' ? 'text-blue-600 dark:text-blue-400' :
                    'text-red-600 dark:text-red-400'
                  }`}>
                    {stat.title}
                  </p>
                  <p className={`text-2xl font-bold ${
                    stat.color === 'teal' ? 'text-teal-900 dark:text-teal-100' :
                    stat.color === 'green' ? 'text-green-900 dark:text-green-100' :
                    stat.color === 'blue' ? 'text-blue-900 dark:text-blue-100' :
                    'text-red-900 dark:text-red-100'
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
                  stat.color === 'teal' ? 'bg-teal-100 dark:bg-teal-900/30' :
                  stat.color === 'green' ? 'bg-green-100 dark:bg-green-900/30' :
                  stat.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900/30' :
                  'bg-red-100 dark:bg-red-900/30'
                }`}>
                  <Icon className={`w-6 h-6 ${
                    stat.color === 'teal' ? 'text-teal-600' :
                    stat.color === 'green' ? 'text-green-600' :
                    stat.color === 'blue' ? 'text-blue-600' :
                    'text-red-600'
                  }`} />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Quality Metrics and Recent Audits */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Quality Metrics */}
        <TikTokCard className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            مؤشرات الجودة الرئيسية
          </h3>

          <div className="space-y-6">
            {qualityMetrics.map((metric, index) => (
              <motion.div
                key={index}
                className="space-y-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-900 dark:text-white">{metric.metric}</span>
                  <div className="text-right">
                    <span className="font-bold text-lg text-gray-900 dark:text-white">
                      {metric.current}%
                    </span>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      الهدف: {metric.target}%
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <TikTokProgress
                    value={metric.current}
                    max={100}
                    className={`h-3 ${
                      metric.status === 'ممتاز' ? 'bg-green-100' :
                      metric.status === 'جيد جداً' ? 'bg-blue-100' :
                      'bg-yellow-100'
                    }`}
                  />
                </div>

                <div className="flex justify-between items-center text-sm">
                  <TikTokBadge className={
                    metric.status === 'ممتاز' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                    metric.status === 'جيد جداً' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' :
                    'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                  }>
                    {metric.status}
                  </TikTokBadge>
                  <span className={`${
                    metric.trend === 'up' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                  }`}>
                    {metric.trend === 'up' ? '↗ تحسن' : '↘ انخفاض'}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </TikTokCard>

        {/* Recent Quality Audits */}
        <TikTokCard className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            المراجعات الجودة الأخيرة
          </h3>

          <div className="space-y-4">
            {[
              {
                id: 'QA-2024-001',
                department: 'إدارة المبيعات',
                type: 'مراجعة داخلية',
                score: 96,
                status: 'مكتملة',
                date: '2024-01-15'
              },
              {
                id: 'QA-2024-002',
                department: 'إدارة المشتريات',
                type: 'مراجعة خارجية',
                score: 92,
                status: 'قيد المراجعة',
                date: '2024-01-14'
              },
              {
                id: 'QA-2024-003',
                department: 'إدارة المخزون',
                type: 'مراجعة داخلية',
                score: 94,
                status: 'مكتملة',
                date: '2024-01-13'
              }
            ].map((audit, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-teal-600" />
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-medium text-gray-900 dark:text-white">
                      {audit.id}
                    </p>
                    <TikTokBadge className={
                      audit.status === 'مكتملة' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                      'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                    }>
                      {audit.status}
                    </TikTokBadge>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                    {audit.department} • {audit.type}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {formatDate(audit.date)}
                  </p>
                </div>

                <div className="text-right">
                  <p className="font-bold text-gray-900 dark:text-white">
                    {audit.score}%
                  </p>
                  <div className={`text-sm ${audit.score >= 95 ? 'text-green-600 dark:text-green-400' : audit.score >= 90 ? 'text-blue-600 dark:text-blue-400' : 'text-yellow-600 dark:text-yellow-400'}`}>
                    {audit.score >= 95 ? 'ممتاز' : audit.score >= 90 ? 'جيد جداً' : 'جيد'}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </TikTokCard>
      </div>

      {/* Quality Improvement Areas */}
      <TikTokCard className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
          مجالات تحسين الجودة
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              area: 'تحسين عمليات الإنتاج',
              priority: 'عالية',
              progress: 75,
              impact: 'عالي',
              deadline: '2024-02-15'
            },
            {
              area: 'تطوير معايير الخدمة',
              priority: 'متوسطة',
              progress: 60,
              impact: 'متوسط',
              deadline: '2024-03-01'
            },
            {
              area: 'تحسين نظام إدارة الجودة',
              priority: 'عالية',
              progress: 45,
              impact: 'عالي',
              deadline: '2024-02-28'
            }
          ].map((area, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                {area.area}
              </h4>

              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600 dark:text-gray-400">التقدم</span>
                    <span className="font-medium text-gray-900 dark:text-white">{area.progress}%</span>
                  </div>
                  <TikTokProgress value={area.progress} max={100} className="h-2" />
                </div>

                <div className="flex justify-between items-center">
                  <TikTokBadge className={
                    area.priority === 'عالية' ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400' :
                    'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                  }>
                    {area.priority}
                  </TikTokBadge>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {area.deadline}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </TikTokCard>
    </div>
  );
}

// باقي التبويبات - يمكن تخصيصها حسب احتياجات إدارة الجودة
function StandardsTab() {
  return (
    <TikTokCard className="p-8">
      <div className="text-center py-16">
        <Award className="w-20 h-20 text-teal-500 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          إدارة معايير الجودة
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          نظام شامل لإدارة وتطوير معايير الجودة وضمان الامتثال لها
        </p>
        <TikTokButton size="lg">
          <Plus className="w-5 h-5 mr-2" />
          إضافة معيار جديد
        </TikTokButton>
      </div>
    </TikTokCard>
  );
}

function AuditsTab() {
  return (
    <TikTokCard className="p-8">
      <div className="text-center py-16">
        <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          إدارة المراجعات والتدقيق
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          نظام شامل لإدارة عمليات المراجعة والتدقيق الداخلي والخارجي
        </p>
        <TikTokButton size="lg" variant="outline">
          <CheckCircle className="w-5 h-5 mr-2" />
          بدء مراجعة جديدة
        </TikTokButton>
      </div>
    </TikTokCard>
  );
}

function ImprovementTab() {
  return (
    <TikTokCard className="p-8">
      <div className="text-center py-16">
        <TrendingUp className="w-20 h-20 text-blue-500 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          إدارة التحسين المستمر
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          نظام متكامل لتحديد وتنفيذ فرص التحسين في جميع العمليات
        </p>
        <TikTokButton size="lg">
          <TrendingUp className="w-5 h-5 mr-2" />
          مشروع تحسين جديد
        </TikTokButton>
      </div>
    </TikTokCard>
  );
}

function QualityReportsTab() {
  return (
    <TikTokCard className="p-8">
      <div className="text-center py-16">
        <BarChart3 className="w-20 h-20 text-purple-500 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          تقارير الجودة والأداء
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          تقارير مفصلة عن أداء الجودة ومؤشرات الامتثال والتحسين
        </p>
        <TikTokButton size="lg" variant="outline">
          <Download className="w-5 h-5 mr-2" />
          تصدير تقرير الجودة
        </TikTokButton>
      </div>
    </TikTokCard>
  );
}

function QualitySettingsTab() {
  return (
    <TikTokCard className="p-8">
      <div className="text-center py-16">
        <Settings className="w-20 h-20 text-gray-500 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          إعدادات إدارة الجودة
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          تخصيص إعدادات نظام إدارة الجودة والمعايير والمراجعات
        </p>
        <TikTokButton size="lg">
          <Settings className="w-5 h-5 mr-2" />
          تعديل الإعدادات
        </TikTokButton>
      </div>
    </TikTokCard>
  );
}
