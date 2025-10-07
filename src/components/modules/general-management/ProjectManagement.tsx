'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Target,
  Plus,
  Calendar,
  Users,
  Clock,
  AlertTriangle,
  CheckCircle,
  Play,
  Pause,
  MoreVertical,
  Edit,
  Trash2,
  Eye
} from 'lucide-react';
import { TikTokButton, TikTokBadge, TikTokCard, TikTokModal, TikTokInput, TikTokProgress } from '@/components/ui/TikTokComponents';

export interface Project {
  id: string;
  name: string;
  description: string;
  status: 'planning' | 'active' | 'on_hold' | 'completed' | 'cancelled';
  priority: 'low' | 'medium' | 'high' | 'critical';
  progress: number;
  startDate: string;
  endDate: string;
  manager: string;
  team: string[];
  budget: number;
  departmentId: string;
  tasks: Task[];
  milestones: Milestone[];
}

export interface Task {
  id: string;
  name: string;
  description: string;
  status: 'todo' | 'in_progress' | 'review' | 'completed';
  assignee: string;
  priority: 'low' | 'medium' | 'high';
  dueDate: string;
  estimatedHours: number;
  actualHours?: number;
  dependencies: string[];
}

export interface Milestone {
  id: string;
  name: string;
  description: string;
  dueDate: string;
  status: 'upcoming' | 'achieved' | 'missed';
}

// بيانات تجريبية للمشاريع
export const SAMPLE_PROJECTS: Project[] = [
  {
    id: 'PROJ001',
    name: 'تطوير نظام إدارة الوثائق الرقمية',
    description: 'مشروع شامل لتطوير نظام إدارة الوثائق الرقمية مع إمكانيات البحث المتقدم والأرشفة الآلية',
    status: 'active',
    priority: 'high',
    progress: 65,
    startDate: '2024-01-15',
    endDate: '2024-06-30',
    manager: 'أحمد محمد علي',
    team: ['أحمد محمد', 'فاطمة علي', 'محمد حسن', 'سارة أحمد'],
    budget: 500000,
    departmentId: 'EXEC001',
    tasks: [
      {
        id: 'TASK001',
        name: 'تحليل المتطلبات',
        description: 'جمع وتحليل متطلبات النظام من جميع الإدارات',
        status: 'completed',
        assignee: 'أحمد محمد',
        priority: 'high',
        dueDate: '2024-02-15',
        estimatedHours: 40,
        actualHours: 35,
        dependencies: []
      },
      {
        id: 'TASK002',
        name: 'تصميم قاعدة البيانات',
        description: 'تصميم هيكل قاعدة البيانات وعلاقات الجداول',
        status: 'completed',
        assignee: 'فاطمة علي',
        priority: 'high',
        dueDate: '2024-03-01',
        estimatedHours: 60,
        actualHours: 58,
        dependencies: ['TASK001']
      },
      {
        id: 'TASK003',
        name: 'تطوير واجهة المستخدم',
        description: 'تطوير واجهة المستخدم الرئيسية والقوائم الجانبية',
        status: 'in_progress',
        assignee: 'محمد حسن',
        priority: 'medium',
        dueDate: '2024-05-15',
        estimatedHours: 120,
        actualHours: 45,
        dependencies: ['TASK002']
      }
    ],
    milestones: [
      {
        id: 'MILE001',
        name: 'انتهاء مرحلة التحليل',
        description: 'اكتمال جمع وتحليل جميع المتطلبات',
        dueDate: '2024-02-15',
        status: 'achieved'
      },
      {
        id: 'MILE002',
        name: 'انتهاء مرحلة التصميم',
        description: 'اكتمال تصميم النظام وقاعدة البيانات',
        dueDate: '2024-03-30',
        status: 'achieved'
      },
      {
        id: 'MILE003',
        name: 'انتهاء مرحلة التطوير',
        description: 'اكتمال تطوير النظام واختباره',
        dueDate: '2024-06-30',
        status: 'upcoming'
      }
    ]
  },
  {
    id: 'PROJ002',
    name: 'تطبيق نظام إدارة الأداء الجديد',
    description: 'تطبيق نظام إدارة الأداء الجديد مع مؤشرات الأداء الرئيسية المحدثة',
    status: 'planning',
    priority: 'medium',
    progress: 15,
    startDate: '2024-03-01',
    endDate: '2024-08-31',
    manager: 'سارة أحمد حسن',
    team: ['سارة أحمد', 'علي محمد', 'نور حسن'],
    budget: 300000,
    departmentId: 'EXEC001',
    tasks: [
      {
        id: 'TASK004',
        name: 'مراجعة مؤشرات الأداء الحالية',
        description: 'مراجعة وتقييم مؤشرات الأداء الحالية',
        status: 'in_progress',
        assignee: 'سارة أحمد',
        priority: 'high',
        dueDate: '2024-03-30',
        estimatedHours: 30,
        actualHours: 12,
        dependencies: []
      }
    ],
    milestones: [
      {
        id: 'MILE004',
        name: 'تحديد المؤشرات الجديدة',
        description: 'تحديد قائمة مؤشرات الأداء الجديدة المقترحة',
        dueDate: '2024-04-15',
        status: 'upcoming'
      }
    ]
  }
];

// مكون إدارة المشاريع
export default function ProjectManagement() {
  const [projects, setProjects] = useState<Project[]>(SAMPLE_PROJECTS);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState<'all' | 'active' | 'completed' | 'on_hold'>('all');

  const filteredProjects = projects.filter(project => {
    if (filter === 'all') return true;
    return project.status === filter;
  });

  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'planning': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
      case 'active': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'on_hold': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'completed': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400';
      case 'cancelled': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  const getPriorityColor = (priority: Project['priority']) => {
    switch (priority) {
      case 'critical': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400';
      case 'high': return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400';
      case 'medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'low': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            إدارة المشاريع
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            متابعة وإدارة جميع المشاريع النشطة في القسم
          </p>
        </div>
        <TikTokButton onClick={() => setIsModalOpen(true)}>
          <Plus className="w-4 h-4 mr-2" />
          مشروع جديد
        </TikTokButton>
      </div>

      {/* Filter Tabs */}
      <div className="flex space-x-1 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
        {[
          { key: 'all', label: 'الكل' },
          { key: 'active', label: 'نشط' },
          { key: 'planning', label: 'تخطيط' },
          { key: 'on_hold', label: 'متوقف' },
          { key: 'completed', label: 'مكتمل' }
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setFilter(tab.key as any)}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
              filter === tab.key
                ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <TikTokCard key={project.id} className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
            <div className="space-y-4">
              {/* Project Header */}
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {project.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                    {project.description}
                  </p>
                </div>
                <div className="relative">
                  <button className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Status and Priority */}
              <div className="flex items-center gap-2">
                <TikTokBadge className={getStatusColor(project.status)}>
                  {project.status === 'planning' ? 'تخطيط' :
                   project.status === 'active' ? 'نشط' :
                   project.status === 'on_hold' ? 'متوقف' :
                   project.status === 'completed' ? 'مكتمل' :
                   'ملغي'}
                </TikTokBadge>
                <TikTokBadge className={getPriorityColor(project.priority)}>
                  {project.priority === 'critical' ? 'حرج' :
                   project.priority === 'high' ? 'عالي' :
                   project.priority === 'medium' ? 'متوسط' :
                   'منخفض'}
                </TikTokBadge>
              </div>

              {/* Progress */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">التقدم</span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {project.progress}%
                  </span>
                </div>
                <TikTokProgress value={project.progress} max={100} className="h-2" />
              </div>

              {/* Project Info */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <Users className="w-4 h-4" />
                  <span>{project.team.length} عضو</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <Clock className="w-4 h-4" />
                  <span>{project.tasks.length} مهمة</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(project.endDate).toLocaleDateString('ar-SA')}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <Target className="w-4 h-4" />
                  <span>{project.milestones.filter(m => m.status === 'achieved').length}/{project.milestones.length}</span>
                </div>
              </div>
            </div>
          </TikTokCard>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <Target className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            لا توجد مشاريع
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            لا توجد مشاريع في هذه الفئة حالياً
          </p>
        </div>
      )}

      {/* Project Modal */}
      <TikTokModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="مشروع جديد"
      >
        <ProjectForm onSubmit={(project) => {
          setProjects([...projects, { ...project, id: `PROJ${Date.now()}` }]);
          setIsModalOpen(false);
        }} />
      </TikTokModal>
    </div>
  );
}

// نموذج إنشاء مشروع جديد
function ProjectForm({ onSubmit }: { onSubmit: (project: Partial<Project>) => void }) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    priority: 'medium' as Project['priority'],
    startDate: '',
    endDate: '',
    budget: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      status: 'planning',
      progress: 0,
      manager: 'مدير المشروع',
      team: [],
      tasks: [],
      milestones: [],
      departmentId: 'EXEC001'
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <TikTokInput
        label="اسم المشروع"
        value={formData.name}
        onChange={(value) => setFormData({ ...formData, name: value })}
        required
      />

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          وصف المشروع
        </label>
        <textarea
          className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          rows={4}
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            تاريخ البداية
          </label>
          <input
            type="date"
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            value={formData.startDate}
            onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            تاريخ الانتهاء
          </label>
          <input
            type="date"
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            value={formData.endDate}
            onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            الأولوية
          </label>
          <select
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            value={formData.priority}
            onChange={(e) => setFormData({ ...formData, priority: e.target.value as Project['priority'] })}
          >
            <option value="low">منخفض</option>
            <option value="medium">متوسط</option>
            <option value="high">عالي</option>
            <option value="critical">حرج</option>
          </select>
        </div>

        <TikTokInput
          label="الميزانية (ريال)"
          type="number"
          value={formData.budget}
          onChange={(value) => setFormData({ ...formData, budget: value })}
        />
      </div>

      <div className="flex justify-end gap-3 pt-4">
        <TikTokButton type="button" variant="outline">
          إلغاء
        </TikTokButton>
        <TikTokButton type="submit">
          إنشاء المشروع
        </TikTokButton>
      </div>
    </form>
  );
}
