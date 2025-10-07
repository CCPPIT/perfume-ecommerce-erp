'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Headphones,
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
  MessageCircle,
  Phone,
  Mail,
  Star,
  ThumbsUp,
  Clock,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  Target,
  Award,
  Activity
} from 'lucide-react';
import { TikTokButton, TikTokBadge, TikTokCard, TikTokModal, TikTokInput, TikTokProgress } from '@/components/ui/TikTokComponents';
import { SidebarLayout } from '@/components/modules/general-management/AdvancedSidebar';
import { formatDate } from '@/lib/dateUtils';

export default function CustomerServicePage() {
  const [activeTab, setActiveTab] = useState('overview');

  const handleSectionChange = (section: string) => {
    setActiveTab(section);
  };

  const tabs = [
    { id: 'overview', label: 'نظرة عامة', icon: Eye },
    { id: 'tickets', label: 'التذاكر', icon: MessageCircle },
    { id: 'calls', label: 'المكالمات', icon: Phone },
    { id: 'emails', label: 'البريد الإلكتروني', icon: Mail },
    { id: 'reports', label: 'التقارير', icon: BarChart3 },
    { id: 'settings', label: 'الإعدادات', icon: Settings }
  ];

  return (
    <SidebarLayout
      currentSection="customer-service"
      onSectionChange={handleSectionChange}
    >
      <div className="space-y-8">
        {/* Header Section */}
        <motion.div
          className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-2xl p-8 text-white relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="relative">
            <div className="flex items-center gap-6">
              <motion.div
                className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm"
                whileHover={{ scale: 1.05, rotate: 5 }}
              >
                <Headphones className="w-10 h-10" />
              </motion.div>
              <div className="flex-1">
                <h1 className="text-4xl font-bold mb-3">خدمة العملاء</h1>
                <p className="text-xl text-blue-100 mb-6 leading-relaxed">
                  نظام شامل لإدارة خدمة العملاء وتقديم الدعم الفني وضمان رضا العملاء
                </p>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <MessageCircle className="w-4 h-4 text-blue-200" />
                      <span className="text-sm text-blue-200">التذاكر المفتوحة</span>
                    </div>
                    <div className="text-2xl font-bold">127 تذكرة</div>
                    <div className="text-sm text-blue-200">-12% انخفاض</div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-4 h-4 text-blue-200" />
                      <span className="text-sm text-blue-200">وقت الاستجابة</span>
                    </div>
                    <div className="text-2xl font-bold">2.3 ساعة</div>
                    <div className="text-sm text-blue-200">-0.5 ساعة تحسن</div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="w-4 h-4 text-blue-200" />
                      <span className="text-sm text-blue-200">رضا العملاء</span>
                    </div>
                    <div className="text-2xl font-bold">94%</div>
                    <div className="text-sm text-blue-200">+3% تحسن</div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-4 h-4 text-blue-200" />
                      <span className="text-sm text-blue-200">فريق الدعم</span>
                    </div>
                    <div className="text-2xl font-bold">15 موظف</div>
                    <div className="text-sm text-blue-200">نشطون الآن</div>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <TikTokButton variant="outline" size="sm" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                  <Plus className="w-4 h-4 mr-2" />
                  تذكرة جديدة
                </TikTokButton>
                <TikTokButton variant="outline" size="sm" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                  <Download className="w-4 h-4 mr-2" />
                  تقرير الخدمة
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
                      ? 'border-blue-500 text-blue-600 dark:text-blue-400'
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
          {activeTab === 'overview' && <CustomerServiceOverviewTab />}
          {activeTab === 'tickets' && <TicketsTab />}
          {activeTab === 'calls' && <CallsTab />}
          {activeTab === 'emails' && <EmailsTab />}
          {activeTab === 'reports' && <CustomerServiceReportsTab />}
          {activeTab === 'settings' && <CustomerServiceSettingsTab />}
        </div>
      </div>
    </SidebarLayout>
  );
}

// Customer Service Overview Tab Component
function CustomerServiceOverviewTab() {
  const serviceStats = [
    {
      title: 'التذاكر المحلولة',
      value: '2,847 تذكرة',
      change: '+15% هذا الشهر',
      trend: 'up',
      icon: CheckCircle,
      color: 'green'
    },
    {
      title: 'متوسط وقت الحل',
      value: '4.2 ساعات',
      change: '-1.2 ساعة',
      trend: 'down',
      icon: Clock,
      color: 'blue'
    },
    {
      title: 'رضا العملاء',
      value: '94%',
      change: '+3%',
      trend: 'up',
      icon: Star,
      color: 'yellow'
    },
    {
      title: 'التذاكر الجديدة',
      value: '156 تذكرة',
      change: '+12%',
      trend: 'up',
      icon: MessageCircle,
      color: 'purple'
    }
  ];

  const recentTickets = [
    {
      id: 'TICK-2024-001',
      customer: 'أحمد محمد علي',
      subject: 'مشكلة في الطلب رقم 12345',
      priority: 'عالية',
      status: 'قيد المعالجة',
      created: '2024-01-15'
    },
    {
      id: 'TICK-2024-002',
      customer: 'فاطمة أحمد حسن',
      subject: 'استفسار عن حالة الطلب',
      priority: 'متوسطة',
      status: 'مغلقة',
      created: '2024-01-14'
    },
    {
      id: 'TICK-2024-003',
      customer: 'محمد حسن علي',
      subject: 'طلب إرجاع منتج',
      priority: 'عالية',
      status: 'قيد المعالجة',
      created: '2024-01-13'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Service Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {serviceStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={index}
              className={`p-6 rounded-2xl ${
                stat.color === 'green' ? 'bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-800' :
                stat.color === 'blue' ? 'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-800' :
                stat.color === 'yellow' ? 'bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 border-yellow-200 dark:border-yellow-800' :
                'bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-purple-200 dark:border-purple-800'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className={`text-sm font-medium ${
                    stat.color === 'green' ? 'text-green-600 dark:text-green-400' :
                    stat.color === 'blue' ? 'text-blue-600 dark:text-blue-400' :
                    stat.color === 'yellow' ? 'text-yellow-600 dark:text-yellow-400' :
                    'text-purple-600 dark:text-purple-400'
                  }`}>
                    {stat.title}
                  </p>
                  <p className={`text-2xl font-bold ${
                    stat.color === 'green' ? 'text-green-900 dark:text-green-100' :
                    stat.color === 'blue' ? 'text-blue-900 dark:text-blue-100' :
                    stat.color === 'yellow' ? 'text-yellow-900 dark:text-yellow-100' :
                    'text-purple-900 dark:text-purple-100'
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
                  stat.color === 'green' ? 'bg-green-100 dark:bg-green-900/30' :
                  stat.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900/30' :
                  stat.color === 'yellow' ? 'bg-yellow-100 dark:bg-yellow-900/30' :
                  'bg-purple-100 dark:bg-purple-900/30'
                }`}>
                  <Icon className={`w-6 h-6 ${
                    stat.color === 'green' ? 'text-green-600' :
                    stat.color === 'blue' ? 'text-blue-600' :
                    stat.color === 'yellow' ? 'text-yellow-600' :
                    'text-purple-600'
                  }`} />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Recent Tickets and Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Tickets */}
        <TikTokCard className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            التذاكر الأخيرة
          </h3>

          <div className="space-y-4">
            {recentTickets.map((ticket, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-blue-600" />
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-medium text-gray-900 dark:text-white">
                      {ticket.id}
                    </p>
                    <TikTokBadge className={
                      ticket.priority === 'عالية' ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400' :
                      'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                    }>
                      {ticket.priority}
                    </TikTokBadge>
                    <TikTokBadge className={
                      ticket.status === 'مغلقة' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                      'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                    }>
                      {ticket.status}
                    </TikTokBadge>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                    {ticket.subject}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {ticket.customer} • {formatDate(ticket.created)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </TikTokCard>

        {/* Customer Satisfaction */}
        <TikTokCard className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            رضا العملاء
          </h3>

          <div className="space-y-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                94%
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                متوسط رضا العملاء
              </p>
              <TikTokProgress value={94} max={100} className="h-3" />
            </div>

            <div className="space-y-4">
              {[
                { rating: 5, percentage: 67, count: 234 },
                { rating: 4, percentage: 23, count: 89 },
                { rating: 3, percentage: 7, count: 23 },
                { rating: 2, percentage: 2, count: 8 },
                { rating: 1, percentage: 1, count: 3 }
              ].map((rating, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center gap-1 w-16">
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {rating.rating}
                    </span>
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  </div>
                  <div className="flex-1">
                    <TikTokProgress value={rating.percentage} max={70} className="h-2" />
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 w-16 text-right">
                    {rating.count}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </TikTokCard>
      </div>

      {/* Service Channels */}
      <TikTokCard className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
          قنوات الخدمة
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              channel: 'البريد الإلكتروني',
              volume: '45%',
              response: '2.1 ساعة',
              satisfaction: '92%'
            },
            {
              channel: 'الهاتف',
              volume: '35%',
              response: '1.8 ساعة',
              satisfaction: '96%'
            },
            {
              channel: 'المحادثة الفورية',
              volume: '20%',
              response: '0.5 ساعة',
              satisfaction: '94%'
            }
          ].map((channel, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                {channel.channel}
              </h4>

              <div className="space-y-3">
                <div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {channel.volume}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    حجم الاستخدام
                  </div>
                </div>

                <div>
                  <div className="text-lg font-medium text-gray-900 dark:text-white">
                    {channel.response}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    متوسط وقت الاستجابة
                  </div>
                </div>

                <div>
                  <div className="text-lg font-medium text-green-600 dark:text-green-400">
                    {channel.satisfaction}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    رضا العملاء
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </TikTokCard>
    </div>
  );
}

// باقي التبويبات - يمكن تخصيصها حسب الحاجة
function TicketsTab() {
  return (
    <TikTokCard className="p-8">
      <div className="text-center py-16">
        <MessageCircle className="w-20 h-20 text-blue-500 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          إدارة التذاكر والاستفسارات
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          نظام شامل لإدارة جميع تذاكر الدعم الفني والاستفسارات من العملاء
        </p>
        <TikTokButton size="lg">
          <Plus className="w-5 h-5 mr-2" />
          إنشاء تذكرة جديدة
        </TikTokButton>
      </div>
    </TikTokCard>
  );
}

function CallsTab() {
  return (
    <TikTokCard className="p-8">
      <div className="text-center py-16">
        <Phone className="w-20 h-20 text-green-500 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          إدارة المكالمات الهاتفية
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          تتبع وإدارة جميع المكالمات الواردة والصادرة مع العملاء
        </p>
        <TikTokButton size="lg" variant="outline">
          <Phone className="w-5 h-5 mr-2" />
          بدء مكالمة جديدة
        </TikTokButton>
      </div>
    </TikTokCard>
  );
}

function EmailsTab() {
  return (
    <TikTokCard className="p-8">
      <div className="text-center py-16">
        <Mail className="w-20 h-20 text-purple-500 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          إدارة البريد الإلكتروني
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          إدارة شاملة لجميع رسائل البريد الإلكتروني والمراسلات مع العملاء
        </p>
        <TikTokButton size="lg">
          <Mail className="w-5 h-5 mr-2" />
          إرسال رسالة جديدة
        </TikTokButton>
      </div>
    </TikTokCard>
  );
}

function CustomerServiceReportsTab() {
  return (
    <TikTokCard className="p-8">
      <div className="text-center py-16">
        <BarChart3 className="w-20 h-20 text-orange-500 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          تقارير خدمة العملاء
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          تقارير مفصلة عن أداء خدمة العملاء مع التحليلات والإحصائيات الشاملة
        </p>
        <TikTokButton size="lg" variant="outline">
          <Download className="w-5 h-5 mr-2" />
          تصدير التقرير الشامل
        </TikTokButton>
      </div>
    </TikTokCard>
  );
}

function CustomerServiceSettingsTab() {
  return (
    <TikTokCard className="p-8">
      <div className="text-center py-16">
        <Settings className="w-20 h-20 text-gray-500 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          إعدادات خدمة العملاء
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          تخصيص إعدادات نظام خدمة العملاء والتفضيلات والتكوينات المختلفة
        </p>
        <TikTokButton size="lg">
          <Settings className="w-5 h-5 mr-2" />
          تعديل الإعدادات
        </TikTokButton>
      </div>
    </TikTokCard>
  );
}
