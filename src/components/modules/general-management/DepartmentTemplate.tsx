// هذا النموذج يمكن استخدامه لإنشاء صفحات الأقسام المتبقية بسرعة
// فقط انسخ هذا الملف وغير اسم القسم والأيقونة والمحتوى حسب الحاجة

'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Building2,
  TrendingUp,
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
  DollarSign,
  Activity,
  Target,
  Award,
  CheckCircle,
  Clock,
  UserCheck,
  Workflow,
  ShoppingCart,
  Package,
  Megaphone,
  FileBarChart,
  Phone,
  Search,
  AlertCircle,
  Calculator,
  CheckSquare,
  Lightbulb,
  MessageSquare,
  GitBranch,
  UserPlus,
  Cpu,
  Key,
  Wallet,
  Coins,
  Folder,
  Building,
  GitMerge,
  Archive,
  File,
  CalendarDays,
  BarChart,
  Cog,
  Code,
  Monitor,
  Palette,
  Layout,
  Eye,
  Wifi,
  Database,
  Brain,
  BookOpen,
  Heart,
  Lock,
  Shield,
  Zap,
  MapPin,
  Handshake,
  List,
  AlertTriangle,
  Timer,
  Route,
  Truck,
  Headphones,
  Scale,
  TrendingDown,
  GraduationCap,
  RefreshCw,
  User,
  Crown,
  HeartHandshake
} from 'lucide-react';
import { TikTokButton, TikTokBadge, TikTokCard, TikTokModal, TikTokInput, TikTokProgress } from '@/components/ui/TikTokComponents';
import { SidebarLayout } from '@/components/modules/general-management/AdvancedSidebar';
import { formatDate } from '@/lib/dateUtils';

// مثال لإنشاء صفحة قسم جديد - استبدل DEPARTMENT_NAME بالاسم الفعلي للقسم
const DEPARTMENT_NAME = "إدارة المشتريات"; // غير هذا بالقسم المطلوب
const DEPARTMENT_ICON = ShoppingCart; // غير هذا بالأيقونة المناسبة
const DEPARTMENT_COLOR = "emerald"; // غير هذا باللون المناسب

export default function DepartmentPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const handleSectionChange = (section: string) => {
    setActiveTab(section);
  };

  const tabs = [
    { id: 'overview', label: 'نظرة عامة', icon: Eye },
    { id: 'operations', label: 'العمليات', icon: Workflow },
    { id: 'suppliers', label: 'الموردين', icon: Users },
    { id: 'inventory', label: 'المخزون', icon: Package },
    { id: 'reports', label: 'التقارير', icon: BarChart3 },
    { id: 'settings', label: 'الإعدادات', icon: Settings }
  ];

  return (
    <SidebarLayout
      currentSection={`${DEPARTMENT_NAME.toLowerCase().replace(/\s+/g, '-')}`}
      onSectionChange={handleSectionChange}
    >
      <div className="space-y-8">
        {/* Header Section - يمكن تخصيصها لكل قسم */}
        <motion.div
          className={`bg-gradient-to-r from-${DEPARTMENT_COLOR}-600 via-${DEPARTMENT_COLOR}-500 to-${DEPARTMENT_COLOR}-400 rounded-2xl p-8 text-white relative overflow-hidden`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="relative">
            <div className="flex items-center gap-6">
              <motion.div
                className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm"
                whileHover={{ scale: 1.05, rotate: 5 }}
              >
                <DEPARTMENT_ICON className="w-10 h-10" />
              </motion.div>
              <div className="flex-1">
                <h1 className="text-4xl font-bold mb-3">{DEPARTMENT_NAME}</h1>
                <p className="text-xl text-white/90 mb-6 leading-relaxed">
                  {/* وصف مخصص للقسم - يمكن تخصيصه */}
                  إدارة شاملة ومتقدمة لعمليات الشراء والتوريد وضمان توفر الموارد بالكفاءة المطلوبة
                </p>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {/* إحصائيات مخصصة للقسم */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <ShoppingCart className="w-4 h-4 text-white/80" />
                      <span className="text-sm text-white/80">طلبات الشراء</span>
                    </div>
                    <div className="text-2xl font-bold">247 طلب</div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-4 h-4 text-white/80" />
                      <span className="text-sm text-white/80">الموردين النشطين</span>
                    </div>
                    <div className="text-2xl font-bold">89 مورد</div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <DollarSign className="w-4 h-4 text-white/80" />
                      <span className="text-sm text-white/80">قيمة المشتريات</span>
                    </div>
                    <div className="text-2xl font-bold">12.5M ريال</div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-4 h-4 text-white/80" />
                      <span className="text-sm text-white/80">نسبة التنفيذ</span>
                    </div>
                    <div className="text-2xl font-bold">94%</div>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <TikTokButton variant="outline" size="sm" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                  <Plus className="w-4 h-4 mr-2" />
                  طلب شراء جديد
                </TikTokButton>
                <TikTokButton variant="outline" size="sm" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                  <Download className="w-4 h-4 mr-2" />
                  تقرير المشتريات
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
                      ? `border-${DEPARTMENT_COLOR}-500 text-${DEPARTMENT_COLOR}-600 dark:text-${DEPARTMENT_COLOR}-400`
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
          {activeTab === 'overview' && <DepartmentOverviewTab />}
          {activeTab === 'operations' && <OperationsTab />}
          {activeTab === 'suppliers' && <SuppliersTab />}
          {activeTab === 'inventory' && <InventoryTab />}
          {activeTab === 'reports' && <ReportsTab />}
          {activeTab === 'settings' && <SettingsTab />}
        </div>
      </div>
    </SidebarLayout>
  );
}

// Department Overview Tab Component - يمكن تخصيصها لكل قسم
function DepartmentOverviewTab() {
  return (
    <div className="space-y-8">
      {/* قسم مخصص للنظرة العامة */}
      <TikTokCard className="p-8">
        <div className="text-center py-16">
          <Building2 className="w-20 h-20 text-emerald-500 mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            نظرة عامة على {DEPARTMENT_NAME}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            {/* وصف مخصص للقسم */}
            نظام شامل لإدارة عمليات الشراء والتوريد مع ضمان الجودة والكفاءة في التوريد
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-6">
              <ShoppingCart className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">إدارة الطلبات</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">معالجة وتتبع جميع طلبات الشراء</p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
              <Users className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">إدارة الموردين</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">تقييم وإدارة قاعدة الموردين</p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6">
              <BarChart3 className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">التحليلات والتقارير</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">تحليل أداء المشتريات والتوريد</p>
            </div>
          </div>
        </div>
      </TikTokCard>
    </div>
  );
}

// باقي التبويبات - يمكن تخصيصها حسب احتياجات كل قسم
function OperationsTab() {
  return (
    <TikTokCard className="p-8">
      <div className="text-center py-16">
        <Workflow className="w-20 h-20 text-blue-500 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          إدارة العمليات
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          إدارة وتنسيق جميع العمليات اليومية للقسم بكفاءة وفعالية
        </p>
        <TikTokButton size="lg">
          <Plus className="w-5 h-5 mr-2" />
          مهمة جديدة
        </TikTokButton>
      </div>
    </TikTokCard>
  );
}

function SuppliersTab() {
  return (
    <TikTokCard className="p-8">
      <div className="text-center py-16">
        <Users className="w-20 h-20 text-green-500 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          إدارة الموردين
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          إدارة شاملة لقاعدة الموردين وتقييم أدائهم وتطوير العلاقات التجارية
        </p>
        <TikTokButton size="lg" variant="outline">
          <UserPlus className="w-5 h-5 mr-2" />
          إضافة مورد جديد
        </TikTokButton>
      </div>
    </TikTokCard>
  );
}

function InventoryTab() {
  return (
    <TikTokCard className="p-8">
      <div className="text-center py-16">
        <Package className="w-20 h-20 text-purple-500 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          إدارة المخزون والتوريد
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          مراقبة وإدارة مستويات المخزون وضمان توفر المواد بالكميات المطلوبة
        </p>
        <TikTokButton size="lg">
          <Package className="w-5 h-5 mr-2" />
          جرد المخزون
        </TikTokButton>
      </div>
    </TikTokCard>
  );
}

function ReportsTab() {
  return (
    <TikTokCard className="p-8">
      <div className="text-center py-16">
        <BarChart3 className="w-20 h-20 text-orange-500 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          التقارير والإحصائيات
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          تقارير مفصلة عن أداء القسم والمؤشرات الرئيسية والتحليلات المتقدمة
        </p>
        <TikTokButton size="lg" variant="outline">
          <Download className="w-5 h-5 mr-2" />
          تصدير التقرير
        </TikTokButton>
      </div>
    </TikTokCard>
  );
}

function SettingsTab() {
  return (
    <TikTokCard className="p-8">
      <div className="text-center py-16">
        <Settings className="w-20 h-20 text-gray-500 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          إعدادات القسم
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          تخصيص إعدادات القسم والتفضيلات والصلاحيات والتكوينات المختلفة
        </p>
        <TikTokButton size="lg">
          <Settings className="w-5 h-5 mr-2" />
          تعديل الإعدادات
        </TikTokButton>
      </div>
    </TikTokCard>
  );
}
