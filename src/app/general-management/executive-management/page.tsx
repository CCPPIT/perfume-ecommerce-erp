'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Building2,
  Users,
  TrendingUp,
  FileText,
  Settings,
  Calendar,
  DollarSign,
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
  Filter,
  Crown,
  Briefcase,
  Globe,
  Lightbulb,
  Scale,
  Mail,
  Phone,
  MapPin,
  Star,
  ThumbsUp,
  MessageSquare,
  Heart,
  Bookmark,
  Flag,
  ExternalLink,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { TikTokButton, TikTokBadge, TikTokCard, TikTokModal, TikTokInput, TikTokProgress } from '@/components/ui/TikTokComponents';
import { SidebarLayout } from '@/components/modules/general-management/AdvancedSidebar';
import { formatDate } from '@/lib/dateUtils';

export default function ExecutiveManagementPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const handleSectionChange = (section: string) => {
    setActiveTab(section);
  };

  const tabs = [
    { id: 'overview', label: 'نظرة عامة', icon: Eye },
    { id: 'strategy', label: 'الاستراتيجية', icon: Target },
    { id: 'governance', label: 'الحوكمة', icon: Shield },
    { id: 'compliance', label: 'الامتثال', icon: CheckCircle },
    { id: 'reports', label: 'التقارير', icon: BarChart3 },
    { id: 'meetings', label: 'الاجتماعات', icon: Calendar }
  ];

  return (
    <SidebarLayout
      currentSection="executive-management"
      onSectionChange={handleSectionChange}
    >
      <div className="space-y-8">
        {/* Header Section */}
        <motion.div
          className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-2xl p-8 text-white relative overflow-hidden"
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
                <Crown className="w-10 h-10" />
              </motion.div>
              <div className="flex-1">
                <h1 className="text-4xl font-bold mb-3">الإدارة التنفيذية</h1>
                <p className="text-xl text-purple-100 mb-6 leading-relaxed">
                  القيادة العليا والتوجيه الاستراتيجي للمؤسسة نحو التميز والنمو المستدام
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <Users className="w-5 h-5 text-purple-200" />
                      <span className="text-sm text-purple-200">الفريق التنفيذي</span>
                    </div>
                    <div className="text-2xl font-bold">12 عضو</div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <Target className="w-5 h-5 text-purple-200" />
                      <span className="text-sm text-purple-200">الأهداف المحققة</span>
                    </div>
                    <div className="text-2xl font-bold">87%</div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <TrendingUp className="w-5 h-5 text-purple-200" />
                      <span className="text-sm text-purple-200">نمو المؤسسة</span>
                    </div>
                    <div className="text-2xl font-bold">+23%</div>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <TikTokButton variant="outline" size="sm" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                  <Calendar className="w-4 h-4 mr-2" />
                  اجتماع مجلس الإدارة
                </TikTokButton>
                <TikTokButton variant="outline" size="sm" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                  <Download className="w-4 h-4 mr-2" />
                  تقرير الأداء
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
          {activeTab === 'overview' && <ExecutiveOverviewTab />}
          {activeTab === 'strategy' && <StrategyTab />}
          {activeTab === 'governance' && <GovernanceTab />}
          {activeTab === 'compliance' && <ComplianceTab />}
          {activeTab === 'reports' && <ReportsTab />}
          {activeTab === 'meetings' && <MeetingsTab />}
        </div>
      </div>
    </SidebarLayout>
  );
}

// Executive Overview Tab Component
function ExecutiveOverviewTab() {
  const executiveTeam = [
    {
      id: 'CEO001',
      name: 'أحمد محمد العتيبي',
      position: 'الرئيس التنفيذي',
      department: 'الإدارة التنفيذية',
      experience: '15 سنة خبرة',
      achievements: ['زيادة الإيرادات بنسبة 45%', 'توسيع السوق بنسبة 30%', 'تحسين الكفاءة بنسبة 25%'],
      status: 'نشط',
      lastActivity: 'قبل ساعتين'
    },
    {
      id: 'CFO001',
      name: 'سارة أحمد حسن',
      position: 'المدير المالي',
      department: 'الإدارة المالية',
      experience: '12 سنة خبرة',
      achievements: ['تحسين السيولة المالية', 'تقليل التكاليف بنسبة 20%', 'زيادة الربحية بنسبة 35%'],
      status: 'نشط',
      lastActivity: 'قبل 4 ساعات'
    },
    {
      id: 'CTO001',
      name: 'محمد علي الشهري',
      position: 'مدير التقنية',
      department: 'إدارة التقنية',
      experience: '14 سنة خبرة',
      achievements: ['تطوير 5 أنظمة رئيسية', 'تحسين الأمان السيبراني', 'زيادة كفاءة الأنظمة بنسبة 40%'],
      status: 'نشط',
      lastActivity: 'قبل ساعة'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Executive Dashboard Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <TikTokCard className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-purple-200 dark:border-purple-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-purple-600 dark:text-purple-400">الأهداف المحققة</p>
              <p className="text-3xl font-bold text-purple-900 dark:text-purple-100 mt-2">87%</p>
              <p className="text-sm text-purple-600 dark:text-purple-400 mt-1">+5% هذا الربع</p>
            </div>
            <Target className="w-8 h-8 text-purple-600" />
          </div>
        </TikTokCard>

        <TikTokCard className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-blue-600 dark:text-blue-400">رضا الموظفين</p>
              <p className="text-3xl font-bold text-blue-900 dark:text-blue-100 mt-2">94%</p>
              <p className="text-sm text-blue-600 dark:text-blue-400 mt-1">+3% تحسن</p>
            </div>
            <Users className="w-8 h-8 text-blue-600" />
          </div>
        </TikTokCard>

        <TikTokCard className="p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-green-600 dark:text-green-400">نمو الإيرادات</p>
              <p className="text-3xl font-bold text-green-900 dark:text-green-100 mt-2">+23%</p>
              <p className="text-sm text-green-600 dark:text-green-400 mt-1">مقابل الهدف</p>
            </div>
            <TrendingUp className="w-8 h-8 text-green-600" />
          </div>
        </TikTokCard>

        <TikTokCard className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border-orange-200 dark:border-orange-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-orange-600 dark:text-orange-400">المشاريع النشطة</p>
              <p className="text-3xl font-bold text-orange-900 dark:text-orange-100 mt-2">12</p>
              <p className="text-sm text-orange-600 dark:text-orange-400 mt-1">قيد التنفيذ</p>
            </div>
            <Briefcase className="w-8 h-8 text-orange-600" />
          </div>
        </TikTokCard>
      </div>

      {/* Executive Team */}
      <TikTokCard className="p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              الفريق التنفيذي
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              قيادة المؤسسة نحو التميز والنمو المستدام
            </p>
          </div>
          <TikTokButton>
            <Plus className="w-4 h-4 mr-2" />
            إضافة عضو جديد
          </TikTokButton>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {executiveTeam.map((member) => (
            <motion.div
              key={member.id}
              className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
              whileHover={{ y: -2 }}
            >
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto text-white font-bold text-xl">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-lg">
                    {member.name}
                  </h4>
                  <p className="text-purple-600 dark:text-purple-400 font-medium">
                    {member.position}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {member.department}
                  </p>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <Award className="w-4 h-4" />
                    <span>{member.experience}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <Clock className="w-4 h-4" />
                    <span>نشاط: {member.lastActivity}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">أبرز الإنجازات:</p>
                  <div className="space-y-1">
                    {member.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                        <span className="line-clamp-1">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <TikTokBadge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                  {member.status}
                </TikTokBadge>
              </div>
            </motion.div>
          ))}
        </div>
      </TikTokCard>

      {/* Recent Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <TikTokCard className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            الأنشطة التنفيذية الأخيرة
          </h3>

          <div className="space-y-4">
            {[
              {
                action: 'اجتماع مجلس الإدارة - مناقشة الخطة الاستراتيجية لعام 2024',
                time: 'قبل ساعتين',
                type: 'meeting',
                priority: 'high'
              },
              {
                action: 'مراجعة التقرير المالي الربع سنوي',
                time: 'قبل 4 ساعات',
                type: 'review',
                priority: 'medium'
              },
              {
                action: 'اعتماد مشروع التحول الرقمي',
                time: 'أمس',
                type: 'approval',
                priority: 'high'
              },
              {
                action: 'تقييم أداء المديرين التنفيذيين',
                time: 'منذ يومين',
                type: 'evaluation',
                priority: 'medium'
              }
            ].map((activity, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                  activity.priority === 'high'
                    ? 'bg-red-100 dark:bg-red-900/30'
                    : 'bg-blue-100 dark:bg-blue-900/30'
                }`}>
                  {activity.type === 'meeting' && <Calendar className="w-5 h-5 text-red-600" />}
                  {activity.type === 'review' && <Eye className="w-5 h-5 text-blue-600" />}
                  {activity.type === 'approval' && <CheckCircle className="w-5 h-5 text-green-600" />}
                  {activity.type === 'evaluation' && <Award className="w-5 h-5 text-purple-600" />}
                </div>

                <div className="flex-1">
                  <p className="font-medium text-gray-900 dark:text-white mb-1">
                    {activity.action}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
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

        <TikTokCard className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            مؤشرات الأداء الرئيسية
          </h3>

          <div className="space-y-6">
            {[
              { metric: 'نمو الإيرادات', current: 23, target: 20, unit: '%', color: 'green' },
              { metric: 'رضا العملاء', current: 94, target: 90, unit: '%', color: 'blue' },
              { metric: 'كفاءة العمليات', current: 87, target: 85, unit: '%', color: 'purple' },
              { metric: 'الامتثال للمعايير', current: 96, target: 95, unit: '%', color: 'orange' },
              { metric: 'التطوير والابتكار', current: 78, target: 80, unit: '%', color: 'teal' }
            ].map((kpi, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-900 dark:text-white">{kpi.metric}</span>
                  <div className="text-right">
                    <span className="font-bold text-lg text-gray-900 dark:text-white">
                      {kpi.current}{kpi.unit}
                    </span>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      هدف: {kpi.target}{kpi.unit}
                    </div>
                  </div>
                </div>

                <div className="relative">
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
                  <div className={`absolute -top-1 w-3 h-3 rounded-full border-2 border-white ${
                    kpi.color === 'green' ? 'bg-green-500 left-[87%]' :
                    kpi.color === 'blue' ? 'bg-blue-500 left-[94%]' :
                    kpi.color === 'purple' ? 'bg-purple-500 left-[87%]' :
                    kpi.color === 'orange' ? 'bg-orange-500 left-[96%]' :
                    'bg-teal-500 left-[78%]'
                  }`}></div>
                </div>
              </div>
            ))}
          </div>
        </TikTokCard>
      </div>
    </div>
  );
}

// Strategy Tab Component
function StrategyTab() {
  return (
    <TikTokCard className="p-8">
      <div className="text-center py-16">
        <Target className="w-20 h-20 text-purple-500 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          إدارة الاستراتيجية التنفيذية
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          نظام شامل لتطوير ومتابعة الاستراتيجية التنفيذية للمؤسسة مع تحديد الأهداف والمبادرات الاستراتيجية
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6">
            <Lightbulb className="w-8 h-8 text-purple-600 mx-auto mb-3" />
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">تطوير الاستراتيجية</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">صياغة وتطوير الخطط الاستراتيجية طويلة المدى</p>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
            <Target className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">تحديد الأهداف</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">تحديد الأهداف الاستراتيجية والتشغيلية بوضوح</p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6">
            <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-3" />
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">متابعة التنفيذ</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">متابعة تنفيذ المبادرات وقياس التقدم المحرز</p>
          </div>
        </div>
      </div>
    </TikTokCard>
  );
}

// Governance Tab Component
function GovernanceTab() {
  return (
    <TikTokCard className="p-8">
      <div className="text-center py-16">
        <Shield className="w-20 h-20 text-blue-500 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          نظام الحوكمة التنفيذية
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          ضمان تطبيق أعلى معايير الحوكمة والشفافية في جميع العمليات التنفيذية
        </p>
        <TikTokButton size="lg">
          <Shield className="w-5 h-5 mr-2" />
          مراجعة سياسات الحوكمة
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
          إدارة الامتثال والتزام
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          ضمان الامتثال لجميع القوانين واللوائح والمعايير الوطنية والدولية
        </p>
        <TikTokButton size="lg" variant="outline">
          <CheckCircle className="w-5 h-5 mr-2" />
          مراجعة الامتثال
        </TikTokButton>
      </div>
    </TikTokCard>
  );
}

// Reports Tab Component
function ReportsTab() {
  return (
    <TikTokCard className="p-8">
      <div className="text-center py-16">
        <BarChart3 className="w-20 h-20 text-purple-500 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          التقارير التنفيذية
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          تقارير شاملة ومفصلة عن أداء المؤسسة والإنجازات التنفيذية
        </p>
        <TikTokButton size="lg" variant="outline">
          <Download className="w-5 h-5 mr-2" />
          تصدير التقرير التنفيذي
        </TikTokButton>
      </div>
    </TikTokCard>
  );
}

// Meetings Tab Component
function MeetingsTab() {
  return (
    <TikTokCard className="p-8">
      <div className="text-center py-16">
        <Calendar className="w-20 h-20 text-orange-500 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          إدارة الاجتماعات التنفيذية
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          تنظيم وإدارة جميع الاجتماعات التنفيذية والمجالس الإدارية
        </p>
        <TikTokButton size="lg">
          <Plus className="w-5 h-5 mr-2" />
          جدولة اجتماع جديد
        </TikTokButton>
      </div>
    </TikTokCard>
  );
}
