'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Megaphone,
  Search,
  Filter,
  Plus,
  Edit,
  Trash2,
  Eye,
  TrendingUp,
  TrendingDown,
  BarChart3,
  Download,
  Upload,
  Settings,
  Target,
  Users,
  Calendar,
  DollarSign,
  Activity,
  Award,
  CheckCircle,
  Clock,
  Globe,
  Zap,
  Lightbulb,
  Heart,
  Share2,
  Mail,
  Phone,
  Monitor,
  Smartphone,
  Tablet,
  Star,
  ThumbsUp,
  MessageSquare,
  HeartHandshake,
  Rocket,
  PieChart,
  LineChart
} from 'lucide-react';
import { TikTokButton, TikTokBadge, TikTokCard, TikTokModal, TikTokInput, TikTokProgress } from '@/components/ui/TikTokComponents';
import { SidebarLayout } from '@/components/modules/general-management/AdvancedSidebar';
import { formatDate } from '@/lib/dateUtils';

export default function MarketingManagementPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const handleSectionChange = (section: string) => {
    setActiveTab(section);
  };

  const tabs = [
    { id: 'overview', label: 'نظرة عامة', icon: Eye },
    { id: 'campaigns', label: 'الحملات', icon: Megaphone },
    { id: 'digital', label: 'التسويق الرقمي', icon: Monitor },
    { id: 'analytics', label: 'التحليلات', icon: BarChart3 },
    { id: 'content', label: 'المحتوى', icon: FileText },
    { id: 'reports', label: 'التقارير', icon: PieChart }
  ];

  return (
    <SidebarLayout
      currentSection="marketing-management"
      onSectionChange={handleSectionChange}
    >
      <div className="space-y-8">
        {/* Header Section */}
        <motion.div
          className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 rounded-2xl p-8 text-white relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="relative">
            <div className="flex items-center gap-6">
              <motion.div
                className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm"
                whileHover={{ scale: 1.05, rotate: 5 }}
              >
                <Megaphone className="w-10 h-10" />
              </motion.div>
              <div className="flex-1">
                <h1 className="text-4xl font-bold mb-3">إدارة التسويق</h1>
                <p className="text-xl text-orange-100 mb-6 leading-relaxed">
                  استراتيجيات متكاملة لبناء العلامة التجارية وتعزيز التواصل مع العملاء وزيادة المبيعات
                </p>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="w-4 h-4 text-orange-200" />
                      <span className="text-sm text-orange-200">الحملات النشطة</span>
                    </div>
                    <div className="text-2xl font-bold">12 حملة</div>
                    <div className="text-sm text-orange-200">قيد التنفيذ</div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-4 h-4 text-orange-200" />
                      <span className="text-sm text-orange-200">المتابعين</span>
                    </div>
                    <div className="text-2xl font-bold">45.2K</div>
                    <div className="text-sm text-orange-200">+15% نمو</div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <DollarSign className="w-4 h-4 text-orange-200" />
                      <span className="text-sm text-orange-200">ميزانية التسويق</span>
                    </div>
                    <div className="text-2xl font-bold">2.8M ريال</div>
                    <div className="text-sm text-orange-200">مخصصة لهذا الربع</div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-4 h-4 text-orange-200" />
                      <span className="text-sm text-orange-200">العائد على الاستثمار</span>
                    </div>
                    <div className="text-2xl font-bold">340%</div>
                    <div className="text-sm text-orange-200">ROI</div>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <TikTokButton variant="outline" size="sm" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                  <Plus className="w-4 h-4 mr-2" />
                  حملة تسويقية جديدة
                </TikTokButton>
                <TikTokButton variant="outline" size="sm" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                  <BarChart3 className="w-4 h-4 mr-2" />
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
                      ? 'border-orange-500 text-orange-600 dark:text-orange-400'
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
          {activeTab === 'overview' && <MarketingOverviewTab />}
          {activeTab === 'campaigns' && <CampaignsTab />}
          {activeTab === 'digital' && <DigitalMarketingTab />}
          {activeTab === 'analytics' && <MarketingAnalyticsTab />}
          {activeTab === 'content' && <ContentManagementTab />}
          {activeTab === 'reports' && <MarketingReportsTab />}
        </div>
      </div>
    </SidebarLayout>
  );
}

// Marketing Overview Tab Component
function MarketingOverviewTab() {
  const marketingStats = [
    {
      title: 'إجمالي الحملات',
      value: '24 حملة',
      change: '+4 هذا الشهر',
      trend: 'up',
      icon: Target,
      color: 'orange'
    },
    {
      title: 'التفاعل مع العملاء',
      value: '89%',
      change: '+12% تحسن',
      trend: 'up',
      icon: Heart,
      color: 'red'
    },
    {
      title: 'نسبة التحويل',
      value: '23.4%',
      change: '+3.2%',
      trend: 'up',
      icon: TrendingUp,
      color: 'green'
    },
    {
      title: 'تكلفة الاستحواذ',
      value: '156 ريال',
      change: '-8 ريال',
      trend: 'down',
      icon: DollarSign,
      color: 'blue'
    }
  ];

  const activeCampaigns = [
    {
      name: 'حملة العودة للمدرسة',
      type: 'وسائل التواصل الاجتماعي',
      budget: '150,000 ريال',
      reach: '45.2K',
      engagement: '12.3%',
      status: 'نشط',
      endDate: '2024-02-15'
    },
    {
      name: 'حملة المنتجات الجديدة',
      type: 'إعلانات مدفوعة',
      budget: '200,000 ريال',
      reach: '67.8K',
      engagement: '15.7%',
      status: 'نشط',
      endDate: '2024-02-28'
    },
    {
      name: 'حملة الولاء للعملاء',
      type: 'البريد الإلكتروني',
      budget: '75,000 ريال',
      reach: '23.1K',
      engagement: '18.9%',
      status: 'قيد المراجعة',
      endDate: '2024-03-15'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Marketing Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {marketingStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={index}
              className={`p-6 rounded-2xl ${
                stat.color === 'orange' ? 'bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border-orange-200 dark:border-orange-800' :
                stat.color === 'red' ? 'bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 border-red-200 dark:border-red-800' :
                stat.color === 'green' ? 'bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-800' :
                'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-800'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className={`text-sm font-medium ${
                    stat.color === 'orange' ? 'text-orange-600 dark:text-orange-400' :
                    stat.color === 'red' ? 'text-red-600 dark:text-red-400' :
                    stat.color === 'green' ? 'text-green-600 dark:text-green-400' :
                    'text-blue-600 dark:text-blue-400'
                  }`}>
                    {stat.title}
                  </p>
                  <p className={`text-2xl font-bold ${
                    stat.color === 'orange' ? 'text-orange-900 dark:text-orange-100' :
                    stat.color === 'red' ? 'text-red-900 dark:text-red-100' :
                    stat.color === 'green' ? 'text-green-900 dark:text-green-100' :
                    'text-blue-900 dark:text-blue-100'
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
                  stat.color === 'orange' ? 'bg-orange-100 dark:bg-orange-900/30' :
                  stat.color === 'red' ? 'bg-red-100 dark:bg-red-900/30' :
                  stat.color === 'green' ? 'bg-green-100 dark:bg-green-900/30' :
                  'bg-blue-100 dark:bg-blue-900/30'
                }`}>
                  <Icon className={`w-6 h-6 ${
                    stat.color === 'orange' ? 'text-orange-600' :
                    stat.color === 'red' ? 'text-red-600' :
                    stat.color === 'green' ? 'text-green-600' :
                    'text-blue-600'
                  }`} />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Active Campaigns and Social Media */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Active Campaigns */}
        <TikTokCard className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            الحملات التسويقية النشطة
          </h3>

          <div className="space-y-4">
            {activeCampaigns.map((campaign, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                  <Megaphone className="w-6 h-6 text-orange-600" />
                </div>

                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                    {campaign.name}
                  </h4>
                  <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <span>{campaign.type}</span>
                    <span>•</span>
                    <span>الميزانية: {campaign.budget}</span>
                    <span>•</span>
                    <span>الوصول: {campaign.reach}</span>
                  </div>
                  <div className="flex items-center gap-4 mt-2 text-sm">
                    <span className="text-orange-600 dark:text-orange-400">
                      التفاعل: {campaign.engagement}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400">
                      ينتهي: {formatDate(campaign.endDate)}
                    </span>
                  </div>
                </div>

                <TikTokBadge className={
                  campaign.status === 'نشط' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                  'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                }>
                  {campaign.status}
                </TikTokBadge>
              </motion.div>
            ))}
          </div>
        </TikTokCard>

        {/* Social Media Performance */}
        <TikTokCard className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            أداء وسائل التواصل الاجتماعي
          </h3>

          <div className="space-y-6">
            {[
              {
                platform: 'إنستاجرام',
                followers: '18.2K',
                growth: '+12%',
                engagement: '8.7%',
                posts: 156
              },
              {
                platform: 'تويتر',
                followers: '12.5K',
                growth: '+8%',
                engagement: '6.3%',
                posts: 89
              },
              {
                platform: 'لينكدإن',
                followers: '8.9K',
                growth: '+15%',
                engagement: '4.2%',
                posts: 67
              },
              {
                platform: 'تيك توك',
                followers: '5.6K',
                growth: '+25%',
                engagement: '12.1%',
                posts: 43
              }
            ].map((social, index) => (
              <motion.div
                key={index}
                className="space-y-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-900 dark:text-white">{social.platform}</span>
                  <div className="text-right">
                    <span className="font-bold text-gray-900 dark:text-white">{social.followers}</span>
                    <div className="text-sm text-green-600 dark:text-green-400">{social.growth}</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 text-sm text-gray-600 dark:text-gray-400">
                  <div>
                    <span>التفاعل: {social.engagement}</span>
                  </div>
                  <div>
                    <span>المنشورات: {social.posts}</span>
                  </div>
                  <div>
                    <TikTokProgress value={parseFloat(social.engagement)} max={15} className="h-2" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </TikTokCard>
      </div>

      {/* Marketing Funnel and ROI */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Marketing Funnel */}
        <TikTokCard className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            مسار التسويق (Marketing Funnel)
          </h3>

          <div className="space-y-6">
            {[
              { stage: 'الوعي', count: 45200, percentage: 100, color: 'blue' },
              { stage: 'الاهتمام', count: 12800, percentage: 28, color: 'purple' },
              { stage: 'الرغبة', count: 5600, percentage: 12, color: 'orange' },
              { stage: 'الشراء', count: 2340, percentage: 5, color: 'green' }
            ].map((stage, index) => (
              <motion.div
                key={index}
                className="space-y-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-900 dark:text-white">{stage.stage}</span>
                  <div className="text-right">
                    <span className="font-bold text-gray-900 dark:text-white">{stage.count.toLocaleString()}</span>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{stage.percentage}%</div>
                  </div>
                </div>

                <div className="relative">
                  <TikTokProgress
                    value={stage.percentage}
                    max={100}
                    className={`h-4 ${
                      stage.color === 'blue' ? 'bg-blue-100' :
                      stage.color === 'purple' ? 'bg-purple-100' :
                      stage.color === 'orange' ? 'bg-orange-100' :
                      'bg-green-100'
                    }`}
                  />
                  <div className={`absolute -top-1 w-4 h-4 rounded-full border-2 border-white ${
                    stage.color === 'blue' ? 'bg-blue-500' :
                    stage.color === 'purple' ? 'bg-purple-500' :
                    stage.color === 'orange' ? 'bg-orange-500' :
                    'bg-green-500'
                  }`} style={{ left: `${stage.percentage}%`, transform: 'translateX(-50%)' }}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </TikTokCard>

        {/* ROI Analysis */}
        <TikTokCard className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
          العائد على الاستثمار التسويقي</h3>

          <div className="space-y-6">
            {[
              { channel: 'وسائل التواصل الاجتماعي', spent: 450000, revenue: 1230000, roi: 273 },
              { channel: 'الإعلانات المدفوعة', spent: 380000, revenue: 890000, roi: 234 },
              { channel: 'التسويق بالمحتوى', spent: 120000, revenue: 450000, roi: 375 },
              { channel: 'التسويق عبر البريد الإلكتروني', spent: 95000, revenue: 320000, roi: 337 }
            ].map((channel, index) => (
              <motion.div
                key={index}
                className="space-y-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-900 dark:text-white">{channel.channel}</span>
                  <div className="text-right">
                    <span className="font-bold text-gray-900 dark:text-white">{channel.roi}%</span>
                    <div className="text-sm text-gray-600 dark:text-gray-400">ROI</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600 dark:text-gray-400">الإنفاق: {channel.spent.toLocaleString()} ريال</span>
                  </div>
                  <div>
                    <span className="text-green-600 dark:text-green-400">الإيرادات: {channel.revenue.toLocaleString()} ريال</span>
                  </div>
                </div>

                <TikTokProgress value={channel.roi} max={400} className="h-2" />
              </motion.div>
            ))}
          </div>
        </TikTokCard>
      </div>
    </div>
  );
}

// Campaigns Tab Component
function CampaignsTab() {
  return (
    <TikTokCard className="p-8">
      <div className="text-center py-16">
        <Megaphone className="w-20 h-20 text-orange-500 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          إدارة الحملات التسويقية
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          نظام شامل لتخطيط وتنفيذ ومراقبة جميع الحملات التسويقية بمختلف أنواعها
        </p>
        <TikTokButton size="lg">
          <Plus className="w-5 h-5 mr-2" />
          إنشاء حملة جديدة
        </TikTokButton>
      </div>
    </TikTokCard>
  );
}

// Digital Marketing Tab Component
function DigitalMarketingTab() {
  return (
    <TikTokCard className="p-8">
      <div className="text-center py-16">
        <Monitor className="w-20 h-20 text-blue-500 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          التسويق الرقمي
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          إدارة شاملة للتسويق الرقمي عبر جميع المنصات والقنوات الرقمية
        </p>
        <TikTokButton size="lg" variant="outline">
          <Monitor className="w-5 h-5 mr-2" />
          إدارة الإعلانات الرقمية
        </TikTokButton>
      </div>
    </TikTokCard>
  );
}

// Marketing Analytics Tab Component
function MarketingAnalyticsTab() {
  return (
    <TikTokCard className="p-8">
      <div className="text-center py-16">
        <BarChart3 className="w-20 h-20 text-purple-500 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          التحليلات والإحصائيات
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          تحليلات متقدمة وإحصائيات مفصلة لقياس أداء الحملات التسويقية
        </p>
        <TikTokButton size="lg">
          <BarChart3 className="w-5 h-5 mr-2" />
          عرض التحليلات المفصلة
        </TikTokButton>
      </div>
    </TikTokCard>
  );
}

// Content Management Tab Component
function ContentManagementTab() {
  return (
    <TikTokCard className="p-8">
      <div className="text-center py-16">
        <FileText className="w-20 h-20 text-green-500 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          إدارة المحتوى التسويقي
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          إنشاء وإدارة وتوزيع المحتوى التسويقي عبر جميع المنصات والقنوات
        </p>
        <TikTokButton size="lg" variant="outline">
          <Plus className="w-5 h-5 mr-2" />
          إنشاء محتوى جديد
        </TikTokButton>
      </div>
    </TikTokCard>
  );
}

// Marketing Reports Tab Component
function MarketingReportsTab() {
  return (
    <TikTokCard className="p-8">
      <div className="text-center py-16">
        <PieChart className="w-20 h-20 text-indigo-500 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          تقارير التسويق الشاملة
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          تقارير مفصلة وشاملة عن أداء جميع الأنشطة التسويقية مع التحليلات والتوصيات
        </p>
        <TikTokButton size="lg">
          <Download className="w-5 h-5 mr-2" />
          تصدير التقرير الشامل
        </TikTokButton>
      </div>
    </TikTokCard>
  );
}
