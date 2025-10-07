'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  Plus,
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
  AlertTriangle
} from 'lucide-react';
import { TikTokButton, TikTokBadge, TikTokCard, TikTokModal, TikTokInput, TikTokProgress } from '@/components/ui/TikTokComponents';

export interface Employee {
  id: string;
  name: string;
  position: string;
  department: string;
  departmentId: string;
  email: string;
  phone: string;
  hireDate: string;
  salary: number;
  status: 'active' | 'inactive' | 'on_leave' | 'terminated';
  performance: number;
  skills: string[];
  manager?: string;
  location: string;
  avatar?: string;
}

// بيانات تجريبية للموظفين
export const SAMPLE_EMPLOYEES: Employee[] = [
  {
    id: 'EMP001',
    name: 'أحمد محمد علي',
    position: 'مدير إداري',
    department: 'الإدارة التنفيذية',
    departmentId: 'EXEC001',
    email: 'ahmed.mohamed@company.com',
    phone: '+966501234567',
    hireDate: '2020-01-15',
    salary: 25000,
    status: 'active',
    performance: 92,
    skills: ['إدارة', 'تخطيط استراتيجي', 'قيادة فرق'],
    manager: 'CEO',
    location: 'الرياض - المقر الرئيسي'
  },
  {
    id: 'EMP002',
    name: 'فاطمة أحمد حسن',
    position: 'محللة أعمال',
    department: 'إدارة الجودة',
    departmentId: 'QUAL001',
    email: 'fatima.ahmed@company.com',
    phone: '+966507654321',
    hireDate: '2021-03-10',
    salary: 18000,
    status: 'active',
    performance: 88,
    skills: ['تحليل البيانات', 'جودة', 'تقارير'],
    manager: 'أحمد محمد علي',
    location: 'الرياض - المقر الرئيسي'
  },
  {
    id: 'EMP003',
    name: 'محمد حسن علي',
    position: 'مطور برمجيات',
    department: 'قسم إدارة الوقت',
    departmentId: 'QUAL002',
    email: 'mohamed.hassan@company.com',
    phone: '+966509876543',
    hireDate: '2022-01-20',
    salary: 22000,
    status: 'active',
    performance: 85,
    skills: ['تطوير الويب', 'قواعد البيانات', 'إدارة المشاريع'],
    manager: 'فاطمة أحمد حسن',
    location: 'جدة - فرع جدة'
  },
  {
    id: 'EMP004',
    name: 'سارة محمد أحمد',
    position: 'مسؤولة موارد بشرية',
    department: 'إدارة المراسلات',
    departmentId: 'CORP001',
    email: 'sara.mohamed@company.com',
    phone: '+966503456789',
    hireDate: '2021-08-15',
    salary: 19000,
    status: 'on_leave',
    performance: 90,
    skills: ['موارد بشرية', 'تواصل', 'تنظيم'],
    manager: 'أحمد محمد علي',
    location: 'الرياض - المقر الرئيسي'
  },
  {
    id: 'EMP005',
    name: 'علي حسن محمد',
    position: 'محاسب',
    department: 'إدارة العقود',
    departmentId: 'CORP002',
    email: 'ali.hassan@company.com',
    phone: '+966501112233',
    hireDate: '2020-11-01',
    salary: 17000,
    status: 'active',
    performance: 87,
    skills: ['محاسبة', 'عقود', 'تحليل مالي'],
    manager: 'سارة محمد أحمد',
    location: 'الدمام - فرع الدمام'
  }
];

// مكون إدارة الموظفين
export default function EmployeeManagement() {
  const [employees, setEmployees] = useState<Employee[]>(SAMPLE_EMPLOYEES);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | Employee['status']>('all');
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredEmployees = employees.filter(employee => {
    const matchesSearch = employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         employee.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         employee.department.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = statusFilter === 'all' || employee.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: Employee['status']) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'inactive': return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
      case 'on_leave': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'terminated': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  const getStatusLabel = (status: Employee['status']) => {
    switch (status) {
      case 'active': return 'نشط';
      case 'inactive': return 'غير نشط';
      case 'on_leave': return 'في إجازة';
      case 'terminated': return 'مفصول';
      default: return 'غير محدد';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            إدارة الموظفين
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            إدارة ومتابعة جميع موظفي القسم
          </p>
        </div>
        <TikTokButton onClick={() => setIsModalOpen(true)}>
          <Plus className="w-4 h-4 mr-2" />
          إضافة موظف
        </TikTokButton>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <TikTokInput
            placeholder="البحث في الموظفين..."
            value={searchQuery}
            onChange={setSearchQuery}
            icon={<Search className="w-4 h-4 text-gray-400" />}
          />
        </div>
        <div className="flex gap-2">
          <select
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as any)}
          >
            <option value="all">جميع الحالات</option>
            <option value="active">نشط</option>
            <option value="inactive">غير نشط</option>
            <option value="on_leave">في إجازة</option>
            <option value="terminated">مفصول</option>
          </select>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <TikTokCard className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                إجمالي الموظفين
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {employees.length}
              </p>
            </div>
            <Users className="w-8 h-8 text-blue-600" />
          </div>
        </TikTokCard>

        <TikTokCard className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                الموظفين النشطين
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {employees.filter(e => e.status === 'active').length}
              </p>
            </div>
            <UserCheck className="w-8 h-8 text-green-600" />
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
            </div>
            <TrendingUp className="w-8 h-8 text-purple-600" />
          </div>
        </TikTokCard>

        <TikTokCard className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                في إجازة
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {employees.filter(e => e.status === 'on_leave').length}
              </p>
            </div>
            <Calendar className="w-8 h-8 text-orange-600" />
          </div>
        </TikTokCard>
      </div>

      {/* Employees Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEmployees.map((employee) => (
          <TikTokCard key={employee.id} className="p-6">
            <div className="space-y-4">
              {/* Employee Header */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                  {employee.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {employee.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {employee.position}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                    {employee.department}
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
                {getStatusLabel(employee.status)}
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

              {/* Contact Info */}
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
                  <Calendar className="w-4 h-4" />
                  <span>منذ {new Date().getFullYear() - new Date(employee.hireDate).getFullYear()} سنة</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <Award className="w-4 h-4" />
                  <span>{employee.salary.toLocaleString()} ريال</span>
                </div>
              </div>

              {/* Skills */}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">المهارات:</p>
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
        ))}
      </div>

      {filteredEmployees.length === 0 && (
        <div className="text-center py-12">
          <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            لا يوجد موظفون
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            لا يوجد موظفون مطابقون لمعايير البحث
          </p>
        </div>
      )}

      {/* Employee Modal */}
      <TikTokModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="إضافة موظف جديد"
      >
        <EmployeeForm onSubmit={(employee) => {
          setEmployees([...employees, { ...employee, id: `EMP${Date.now()}` }]);
          setIsModalOpen(false);
        }} />
      </TikTokModal>
    </div>
  );
}

// نموذج إضافة موظف جديد
function EmployeeForm({ onSubmit }: { onSubmit: (employee: Partial<Employee>) => void }) {
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    department: '',
    email: '',
    phone: '',
    hireDate: '',
    salary: '',
    skills: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      status: 'active',
      performance: 85,
      departmentId: 'EXEC001',
      location: 'الرياض - المقر الرئيسي',
      skills: formData.skills.split(',').map(skill => skill.trim()).filter(Boolean)
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <TikTokInput
          label="الاسم الكامل"
          value={formData.name}
          onChange={(value) => setFormData({ ...formData, name: value })}
          required
        />

        <TikTokInput
          label="المنصب"
          value={formData.position}
          onChange={(value) => setFormData({ ...formData, position: value })}
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <TikTokInput
          label="البريد الإلكتروني"
          type="email"
          value={formData.email}
          onChange={(value) => setFormData({ ...formData, email: value })}
          required
        />

        <TikTokInput
          label="رقم الهاتف"
          value={formData.phone}
          onChange={(value) => setFormData({ ...formData, phone: value })}
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <TikTokInput
          label="القسم"
          value={formData.department}
          onChange={(value) => setFormData({ ...formData, department: value })}
          required
        />

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            تاريخ التوظيف
          </label>
          <input
            type="date"
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            value={formData.hireDate}
            onChange={(e) => setFormData({ ...formData, hireDate: e.target.value })}
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <TikTokInput
          label="الراتب الشهري (ريال)"
          type="number"
          value={formData.salary}
          onChange={(value) => setFormData({ ...formData, salary: value })}
          required
        />

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            المهارات (مفصولة بفواصل)
          </label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            placeholder="مثال: إدارة، تخطيط، قيادة"
            value={formData.skills}
            onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
          />
        </div>
      </div>

      <div className="flex justify-end gap-3 pt-4">
        <TikTokButton type="button" variant="outline">
          إلغاء
        </TikTokButton>
        <TikTokButton type="submit">
          إضافة الموظف
        </TikTokButton>
      </div>
    </form>
  );
}
