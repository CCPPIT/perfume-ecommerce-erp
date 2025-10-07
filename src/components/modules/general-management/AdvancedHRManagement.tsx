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
  Globe
} from 'lucide-react';
import { TikTokButton, TikTokBadge, TikTokCard, TikTokModal, TikTokInput, TikTokProgress, TikTokToast } from '@/components/ui/TikTokComponents';

export interface HREmployee {
  id: string;
  employeeId: string;
  name: string;
  position: string;
  department: string;
  departmentId: string;
  email: string;
  phone: string;
  hireDate: string;
  salary: number;
  status: 'active' | 'inactive' | 'on_leave' | 'terminated' | 'probation';
  performance: number;
  skills: string[];
  manager?: string;
  location: string;
  avatar?: string;
  emergencyContact: {
    name: string;
    phone: string;
    relation: string;
  };
  documents: {
    id: string;
    name: string;
    type: string;
    expiryDate?: string;
    status: 'valid' | 'expired' | 'expiring_soon';
  }[];
  attendance: {
    totalDays: number;
    presentDays: number;
    absentDays: number;
    lateDays: number;
    overtimeHours: number;
  };
  leaveBalance: {
    annual: number;
    sick: number;
    personal: number;
    usedAnnual: number;
    usedSick: number;
    usedPersonal: number;
  };
  performanceReviews: {
    id: string;
    date: string;
    rating: number;
    reviewer: string;
    comments: string;
    goals: string[];
  }[];
  training: {
    id: string;
    course: string;
    status: 'completed' | 'in_progress' | 'planned';
    completionDate?: string;
    certificate?: string;
  }[];
}

// بيانات تجريبية للموظفين مع تفاصيل أكثر
export const HR_SAMPLE_EMPLOYEES: HREmployee[] = [
  {
    id: 'EMP001',
    employeeId: 'EMP-2020-001',
    name: 'أحمد محمد علي العتيبي',
    position: 'مدير إداري أول',
    department: 'الإدارة التنفيذية',
    departmentId: 'EXEC001',
    email: 'ahmed.mohamed@company.com',
    phone: '+966501234567',
    hireDate: '2020-01-15',
    salary: 25000,
    status: 'active',
    performance: 92,
    skills: ['إدارة استراتيجية', 'تخطيط', 'قيادة فرق', 'تحليل البيانات', 'إدارة المخاطر'],
    manager: 'المدير التنفيذي',
    location: 'الرياض - المقر الرئيسي',
    emergencyContact: {
      name: 'فاطمة أحمد علي',
      phone: '+966507654321',
      relation: 'زوجة'
    },
    documents: [
      {
        id: 'DOC001',
        name: 'الهوية الوطنية',
        type: 'هوية',
        expiryDate: '2028-05-15',
        status: 'valid'
      },
      {
        id: 'DOC002',
        name: 'جواز السفر',
        type: 'جواز سفر',
        expiryDate: '2027-03-20',
        status: 'valid'
      },
      {
        id: 'DOC003',
        name: 'الرخصة الدولية لقيادة السيارات',
        type: 'رخصة قيادة',
        expiryDate: '2024-12-31',
        status: 'expiring_soon'
      }
    ],
    attendance: {
      totalDays: 240,
      presentDays: 235,
      absentDays: 3,
      lateDays: 2,
      overtimeHours: 45
    },
    leaveBalance: {
      annual: 30,
      sick: 15,
      personal: 5,
      usedAnnual: 12,
      usedSick: 3,
      usedPersonal: 1
    },
    performanceReviews: [
      {
        id: 'REV001',
        date: '2024-01-15',
        rating: 92,
        reviewer: 'المدير التنفيذي',
        comments: 'أداء ممتاز في قيادة الفريق وتحقيق الأهداف الاستراتيجية',
        goals: ['زيادة كفاءة الفريق بنسبة 15%', 'تطوير 3 مبادرات جديدة']
      }
    ],
    training: [
      {
        id: 'TRAIN001',
        course: 'إدارة المخاطر المتقدمة',
        status: 'completed',
        completionDate: '2023-12-15',
        certificate: 'CERT-2023-001'
      },
      {
        id: 'TRAIN002',
        course: 'الذكاء الاصطناعي في الأعمال',
        status: 'in_progress',
        completionDate: '2024-06-30'
      }
    ]
  },
  {
    id: 'EMP002',
    employeeId: 'EMP-2021-045',
    name: 'فاطمة أحمد حسن الشهري',
    position: 'محللة أعمال أولى',
    department: 'إدارة الجودة والتطوير',
    departmentId: 'QUAL001',
    email: 'fatima.ahmed@company.com',
    phone: '+966507654321',
    hireDate: '2021-03-10',
    salary: 18000,
    status: 'active',
    performance: 88,
    skills: ['تحليل البيانات', 'جودة العمليات', 'إدارة المشاريع', 'تقارير الأعمال'],
    manager: 'أحمد محمد علي',
    location: 'الرياض - المقر الرئيسي',
    emergencyContact: {
      name: 'حسن أحمد حسن',
      phone: '+966509876543',
      relation: 'أخ'
    },
    documents: [
      {
        id: 'DOC004',
        name: 'الهوية الوطنية',
        type: 'هوية',
        expiryDate: '2029-08-22',
        status: 'valid'
      }
    ],
    attendance: {
      totalDays: 240,
      presentDays: 238,
      absentDays: 1,
      lateDays: 1,
      overtimeHours: 32
    },
    leaveBalance: {
      annual: 30,
      sick: 15,
      personal: 5,
      usedAnnual: 8,
      usedSick: 2,
      usedPersonal: 0
    },
    performanceReviews: [
      {
        id: 'REV002',
        date: '2023-12-20',
        rating: 88,
        reviewer: 'أحمد محمد علي',
        comments: 'مساهمة فعالة في تحسين جودة العمليات',
        goals: ['إنجاز 5 مشاريع تحسين', 'تطوير مهارات القيادة']
      }
    ],
    training: [
      {
        id: 'TRAIN003',
        course: 'منهجية سيكس سيجما',
        status: 'completed',
        completionDate: '2023-09-15',
        certificate: 'CERT-2023-002'
      }
    ]
  }
];

// مكون إدارة الموارد البشرية المتقدمة
export default function AdvancedHRManagement() {
  const [employees, setEmployees] = useState<HREmployee[]>(HR_SAMPLE_EMPLOYEES);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | HREmployee['status']>('all');
  const [selectedEmployee, setSelectedEmployee] = useState<HREmployee | null>(null);
  const [activeTab, setActiveTab] = useState('employees');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredEmployees = employees.filter(employee => {
    const matchesSearch = employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         employee.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         employee.employeeId.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = statusFilter === 'all' || employee.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const tabs = [
    { id: 'employees', label: 'الموظفون', icon: Users },
    { id: 'attendance', label: 'الحضور والانصراف', icon: Clock },
    { id: 'payroll', label: 'الرواتب والمزايا', icon: DollarSign },
    { id: 'performance', label: 'تقييم الأداء', icon: Award },
    { id: 'training', label: 'التدريب والتطوير', icon: GraduationCap },
    { id: 'reports', label: 'التقارير', icon: BarChart3 }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            إدارة الموارد البشرية المتقدمة
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            نظام شامل لإدارة الموظفين والموارد البشرية
          </p>
        </div>
        <TikTokButton onClick={() => setIsModalOpen(true)}>
          <UserPlus className="w-4 h-4 mr-2" />
          إضافة موظف جديد
        </TikTokButton>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <TikTokCard className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                إجمالي الموظفين
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {employees.length}
              </p>
              <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                +3 هذا الشهر
              </p>
            </div>
            <Users className="w-8 h-8 text-blue-600" />
          </div>
        </TikTokCard>

        <TikTokCard className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                متوسط الأداء
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {Math.round(employees.reduce((sum, e) => sum + e.performance, 0) / employees.length)}%
              </p>
              <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                +5% تحسن
              </p>
            </div>
            <TrendingUp className="w-8 h-8 text-green-600" />
          </div>
        </TikTokCard>

        <TikTokCard className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                في إجازة اليوم
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {employees.filter(e => e.status === 'on_leave').length}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                من أصل {employees.length}
              </p>
            </div>
            <Calendar className="w-8 h-8 text-orange-600" />
          </div>
        </TikTokCard>

        <TikTokCard className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                إجمالي الرواتب
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {employees.reduce((sum, e) => sum + e.salary, 0).toLocaleString()}
              </p>
              <p className="text-sm text-purple-600 dark:text-purple-400 mt-1">
                ريال شهرياً
              </p>
            </div>
            <DollarSign className="w-8 h-8 text-purple-600" />
          </div>
        </TikTokCard>
      </div>

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
        {activeTab === 'employees' && <EmployeesTab employees={filteredEmployees} />}
        {activeTab === 'attendance' && <AttendanceTab employees={employees} />}
        {activeTab === 'payroll' && <PayrollTab employees={employees} />}
        {activeTab === 'performance' && <PerformanceTab employees={employees} />}
        {activeTab === 'training' && <TrainingTab employees={employees} />}
        {activeTab === 'reports' && <ReportsTab employees={employees} />}
      </div>
    </div>
  );
}

// Employees Tab Component
function EmployeesTab({ employees }: { employees: HREmployee[] }) {
  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <TikTokInput
            placeholder="البحث في الموظفين..."
            value=""
            onChange={() => {}}
            icon={<Search className="w-4 h-4 text-gray-400" />}
          />
        </div>
        <div className="flex gap-2">
          <select className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm">
            <option value="all">جميع الأقسام</option>
            <option value="EXEC001">الإدارة التنفيذية</option>
            <option value="QUAL001">إدارة الجودة</option>
          </select>
          <select className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm">
            <option value="all">جميع الحالات</option>
            <option value="active">نشط</option>
            <option value="on_leave">في إجازة</option>
          </select>
        </div>
      </div>

      {/* Employees Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {employees.map((employee) => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))}
      </div>
    </div>
  );
}

// Employee Card Component
function EmployeeCard({ employee }: { employee: HREmployee }) {
  const getStatusColor = (status: HREmployee['status']) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'inactive': return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
      case 'on_leave': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'terminated': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400';
      case 'probation': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  return (
    <TikTokCard className="p-6 hover:shadow-lg transition-shadow">
      <div className="space-y-4">
        {/* Employee Header */}
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
            {employee.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
              {employee.name}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {employee.position}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
              {employee.employeeId} • {employee.department}
            </p>
          </div>
          <div className="relative">
            <button className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
              <MoreVertical className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Status Badge */}
        <TikTokBadge className={getStatusColor(employee.status)}>
          {employee.status === 'active' ? 'نشط' :
           employee.status === 'inactive' ? 'غير نشط' :
           employee.status === 'on_leave' ? 'في إجازة' :
           employee.status === 'terminated' ? 'مفصول' :
           'فترة تجربة'}
        </TikTokBadge>

        {/* Performance */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600 dark:text-gray-400">الأداء</span>
            <span className="font-medium text-gray-900 dark:text-white">
              {employee.performance}%
            </span>
          </div>
          <TikTokProgress value={employee.performance} max={100} className="h-2" />
        </div>

        {/* Quick Info */}
        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <Mail className="w-4 h-4" />
            <span className="truncate">{employee.email}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <Phone className="w-4 h-4" />
            <span>{employee.phone}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <MapPin className="w-4 h-4" />
            <span>{employee.location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <Calendar className="w-4 h-4" />
            <span>منذ {new Date().getFullYear() - new Date(employee.hireDate).getFullYear()} سنة</span>
          </div>
        </div>

        {/* Skills */}
        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">المهارات الرئيسية:</p>
          <div className="flex flex-wrap gap-1">
            {employee.skills.slice(0, 3).map((skill, index) => (
              <TikTokBadge key={index} variant="outline" size="sm">
                {skill}
              </TikTokBadge>
            ))}
            {employee.skills.length > 3 && (
              <TikTokBadge variant="outline" size="sm">
                +{employee.skills.length - 3}
              </TikTokBadge>
            )}
          </div>
        </div>
      </div>
    </TikTokCard>
  );
}

// Attendance Tab Component
function AttendanceTab({ employees }: { employees: HREmployee[] }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            متابعة الحضور والانصراف
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            مراقبة أوقات العمل والحضور اليومي
          </p>
        </div>
        <TikTokButton variant="outline">
          <Download className="w-4 h-4 mr-2" />
          تصدير التقرير
        </TikTokButton>
      </div>

      <div className="text-center py-12">
        <Clock className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
          نظام الحضور قيد التطوير
        </h4>
        <p className="text-gray-600 dark:text-gray-400">
          سيتم إضافة نظام متابعة الحضور قريباً
        </p>
      </div>
    </div>
  );
}

// Payroll Tab Component
function PayrollTab({ employees }: { employees: HREmployee[] }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            إدارة الرواتب والمزايا
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            حساب وإدارة الرواتب والمزايا المالية
          </p>
        </div>
        <TikTokButton variant="outline">
          <FileText className="w-4 h-4 mr-2" />
          إنشاء كشف راتب
        </TikTokButton>
      </div>

      <div className="text-center py-12">
        <DollarSign className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
          نظام الرواتب قيد التطوير
        </h4>
        <p className="text-gray-600 dark:text-gray-400">
          سيتم إضافة نظام إدارة الرواتب قريباً
        </p>
      </div>
    </div>
  );
}

// Performance Tab Component
function PerformanceTab({ employees }: { employees: HREmployee[] }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            تقييم الأداء والمراجعات
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            نظام شامل لتقييم أداء الموظفين
          </p>
        </div>
        <TikTokButton variant="outline">
          <Plus className="w-4 h-4 mr-2" />
          مراجعة أداء جديدة
        </TikTokButton>
      </div>

      <div className="text-center py-12">
        <Award className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
          نظام تقييم الأداء قيد التطوير
        </h4>
        <p className="text-gray-600 dark:text-gray-400">
          سيتم إضافة نظام تقييم الأداء قريباً
        </p>
      </div>
    </div>
  );
}

// Training Tab Component
function TrainingTab({ employees }: { employees: HREmployee[] }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            التدريب والتطوير
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            إدارة برامج التدريب والتطوير المهني
          </p>
        </div>
        <TikTokButton variant="outline">
          <GraduationCap className="w-4 h-4 mr-2" />
          دورة تدريبية جديدة
        </TikTokButton>
      </div>

      <div className="text-center py-12">
        <GraduationCap className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
          نظام التدريب قيد التطوير
        </h4>
        <p className="text-gray-600 dark:text-gray-400">
          سيتم إضافة نظام التدريب والتطوير قريباً
        </p>
      </div>
    </div>
  );
}

// Reports Tab Component
function ReportsTab({ employees }: { employees: HREmployee[] }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            التقارير والإحصائيات
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            تقارير مفصلة عن الموارد البشرية والأداء
          </p>
        </div>
        <div className="flex gap-2">
          <TikTokButton variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            فلترة
          </TikTokButton>
          <TikTokButton variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            تصدير
          </TikTokButton>
        </div>
      </div>

      <div className="text-center py-12">
        <BarChart3 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
          نظام التقارير قيد التطوير
        </h4>
        <p className="text-gray-600 dark:text-gray-400">
          سيتم إضافة نظام التقارير المتقدم قريباً
        </p>
      </div>
    </div>
  );
}
