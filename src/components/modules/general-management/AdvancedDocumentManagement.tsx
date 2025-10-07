'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FileText,
  FolderOpen,
  Upload,
  Download,
  Search,
  Filter,
  MoreVertical,
  Eye,
  Edit,
  Trash2,
  Share,
  Archive,
  Lock,
  Unlock,
  Clock,
  User,
  Tag,
  Calendar,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Plus,
  FolderPlus,
  FilePlus,
  Grid,
  List,
  SortAsc,
  SortDesc,
  RefreshCw,
  Cloud,
  Database,
  Shield,
  Zap,
  Workflow,
  Settings,
  BarChart3,
  PieChart,
  TrendingUp,
  Activity,
  Target,
  Award,
  Users,
  Building2
} from 'lucide-react';
import { TikTokButton, TikTokBadge, TikTokCard, TikTokModal, TikTokInput, TikTokProgress, TikTokToast } from '@/components/ui/TikTokComponents';

export interface Document {
  id: string;
  name: string;
  type: string;
  category: string;
  subcategory?: string;
  size: string;
  uploadedBy: string;
  uploadDate: string;
  modifiedDate: string;
  status: 'active' | 'archived' | 'deleted' | 'pending_review';
  accessLevel: 'public' | 'restricted' | 'confidential';
  tags: string[];
  description?: string;
  version: number;
  filePath: string;
  thumbnail?: string;
  expiryDate?: string;
  retentionPeriod?: string;
  relatedDocuments: string[];
  workflow?: {
    currentStep: string;
    steps: string[];
    approvers: string[];
    status: 'draft' | 'review' | 'approved' | 'rejected';
  };
  metadata: {
    author?: string;
    department?: string;
    project?: string;
    keywords?: string[];
    language?: string;
    pages?: number;
    checksum?: string;
  };
}

export interface DocumentCategory {
  id: string;
  name: string;
  icon: any;
  color: string;
  description: string;
  subcategories: string[];
  documentCount: number;
  totalSize: string;
}

// بيانات تجريبية للوثائق والتصنيفات
export const DOCUMENT_CATEGORIES: DocumentCategory[] = [
  {
    id: 'policies',
    name: 'السياسات والإجراءات',
    icon: Shield,
    color: 'blue',
    description: 'السياسات والإجراءات المؤسسية',
    subcategories: ['سياسات الموارد البشرية', 'سياسات مالية', 'سياسات تقنية', 'سياسات أمنية'],
    documentCount: 45,
    totalSize: '2.3 GB'
  },
  {
    id: 'contracts',
    name: 'العقود والاتفاقيات',
    icon: FileText,
    color: 'green',
    description: 'العقود والمذكرات والشراكات',
    subcategories: ['عقود عمل', 'عقود توريد', 'مذكرات تفاهم', 'عقود صيانة'],
    documentCount: 128,
    totalSize: '5.7 GB'
  },
  {
    id: 'reports',
    name: 'التقارير والدراسات',
    icon: BarChart3,
    color: 'purple',
    description: 'التقارير المالية والإدارية',
    subcategories: ['تقارير مالية', 'تقارير أداء', 'دراسات وبحوث', 'تقارير استراتيجية'],
    documentCount: 89,
    totalSize: '4.1 GB'
  },
  {
    id: 'forms',
    name: 'النماذج والاستمارات',
    icon: FolderOpen,
    color: 'orange',
    description: 'النماذج الرسمية والطلبات',
    subcategories: ['طلبات إجازة', 'طلبات شراء', 'نماذج تقييم', 'استمارات تعيين'],
    documentCount: 67,
    totalSize: '1.8 GB'
  },
  {
    id: 'manuals',
    name: 'الأدلة والكتيبات',
    icon: Database,
    color: 'teal',
    description: 'الأدلة الفنية والإرشادية',
    subcategories: ['دليل الموظف', 'دليل الإجراءات', 'كتيبات التدريب', 'دليل الطوارئ'],
    documentCount: 34,
    totalSize: '3.2 GB'
  }
];

export const SAMPLE_DOCUMENTS: Document[] = [
  {
    id: 'DOC001',
    name: 'دليل السياسات والإجراءات المؤسسية 2024',
    type: 'PDF',
    category: 'policies',
    subcategory: 'سياسات الموارد البشرية',
    size: '2.5 MB',
    uploadedBy: 'أحمد محمد علي',
    uploadDate: '2024-01-15',
    modifiedDate: '2024-01-20',
    status: 'active',
    accessLevel: 'restricted',
    tags: ['سياسات', 'موارد بشرية', '2024', 'رسمي'],
    description: 'دليل شامل للسياسات والإجراءات المؤسسية لعام 2024',
    version: 2,
    filePath: '/documents/policies/hr-policies-2024-v2.pdf',
    expiryDate: '2024-12-31',
    retentionPeriod: '7 سنوات',
    relatedDocuments: ['DOC002', 'DOC003'],
    workflow: {
      currentStep: 'مراجعة نهائية',
      steps: ['صياغة', 'مراجعة أولية', 'مراجعة نهائية', 'اعتماد'],
      approvers: ['أحمد محمد علي', 'فاطمة أحمد حسن'],
      status: 'review'
    },
    metadata: {
      author: 'إدارة الموارد البشرية',
      department: 'الموارد البشرية',
      keywords: ['سياسات', 'إجراءات', 'موارد بشرية'],
      language: 'العربية',
      pages: 156,
      checksum: 'sha256:abc123...'
    }
  },
  {
    id: 'DOC002',
    name: 'عقد الصيانة التقنية مع شركة تيك',
    type: 'DOCX',
    category: 'contracts',
    subcategory: 'عقود صيانة',
    size: '856 KB',
    uploadedBy: 'محمد حسن علي',
    uploadDate: '2024-01-10',
    modifiedDate: '2024-01-12',
    status: 'active',
    accessLevel: 'confidential',
    tags: ['عقد', 'صيانة', 'تقنية', 'شركة تيك'],
    description: 'عقد صيانة الأنظمة التقنية لمدة 3 سنوات',
    version: 1,
    filePath: '/documents/contracts/maintenance-tech-contract.docx',
    expiryDate: '2027-01-10',
    retentionPeriod: '10 سنوات',
    relatedDocuments: ['DOC001'],
    workflow: {
      currentStep: 'اعتماد نهائي',
      steps: ['صياغة', 'مراجعة قانونية', 'اعتماد إداري', 'اعتماد نهائي'],
      approvers: ['سارة محمد أحمد', 'أحمد محمد علي'],
      status: 'approved'
    },
    metadata: {
      author: 'إدارة الشؤون القانونية',
      department: 'الشؤون القانونية',
      project: 'صيانة الأنظمة التقنية',
      keywords: ['عقد', 'صيانة', 'تقنية'],
      language: 'العربية',
      pages: 12
    }
  }
];

// مكون إدارة الوثائق المتقدمة
export default function AdvancedDocumentManagement() {
  const [documents, setDocuments] = useState<Document[]>(SAMPLE_DOCUMENTS);
  const [categories] = useState<DocumentCategory[]>(DOCUMENT_CATEGORIES);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'date' | 'size' | 'type'>('date');
  const [selectedDocument, setSelectedDocument] = useState<Document | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doc.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doc.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const sortedDocuments = [...filteredDocuments].sort((a, b) => {
    switch (sortBy) {
      case 'name': return a.name.localeCompare(b.name);
      case 'date': return new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime();
      case 'size': return parseFloat(b.size) - parseFloat(a.size);
      case 'type': return a.type.localeCompare(b.type);
      default: return 0;
    }
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            إدارة الوثائق والأرشفة المتقدمة
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            نظام شامل لإدارة وأرشفة جميع الوثائق المؤسسية
          </p>
        </div>
        <div className="flex gap-3">
          <TikTokButton variant="outline" onClick={() => setIsModalOpen(true)}>
            <Upload className="w-4 h-4 mr-2" />
            رفع وثيقة
          </TikTokButton>
          <TikTokButton>
            <FolderPlus className="w-4 h-4 mr-2" />
            تصنيف جديد
          </TikTokButton>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <TikTokCard className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                إجمالي الوثائق
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {documents.length}
              </p>
              <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                +12 هذا الشهر
              </p>
            </div>
            <FileText className="w-8 h-8 text-blue-600" />
          </div>
        </TikTokCard>

        <TikTokCard className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                مساحة التخزين
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                17.1 GB
              </p>
              <p className="text-sm text-orange-600 dark:text-orange-400 mt-1">
                من 50 GB
              </p>
            </div>
            <Database className="w-8 h-8 text-green-600" />
          </div>
        </TikTokCard>

        <TikTokCard className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                قيد المراجعة
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {documents.filter(d => d.workflow?.status === 'review').length}
              </p>
              <p className="text-sm text-yellow-600 dark:text-yellow-400 mt-1">
                يحتاج موافقة
              </p>
            </div>
            <Clock className="w-8 h-8 text-yellow-600" />
          </div>
        </TikTokCard>

        <TikTokCard className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                الوثائق المؤرشفة
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {documents.filter(d => d.status === 'archived').length}
              </p>
              <p className="text-sm text-purple-600 dark:text-purple-400 mt-1">
                آمنة ومحفوظة
              </p>
            </div>
            <Archive className="w-8 h-8 text-purple-600" />
          </div>
        </TikTokCard>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <TikTokCard
              key={category.id}
              className={`p-6 cursor-pointer transition-all hover:shadow-lg ${
                selectedCategory === category.id ? 'ring-2 ring-purple-500 bg-purple-50 dark:bg-purple-900/20' : ''
              }`}
              onClick={() => setSelectedCategory(category.id)}
            >
              <div className="text-center space-y-4">
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mx-auto ${
                  category.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900/30' :
                  category.color === 'green' ? 'bg-green-100 dark:bg-green-900/30' :
                  category.color === 'purple' ? 'bg-purple-100 dark:bg-purple-900/30' :
                  category.color === 'orange' ? 'bg-orange-100 dark:bg-orange-900/30' :
                  'bg-teal-100 dark:bg-teal-900/30'
                }`}>
                  <Icon className={`w-8 h-8 ${
                    category.color === 'blue' ? 'text-blue-600' :
                    category.color === 'green' ? 'text-green-600' :
                    category.color === 'purple' ? 'text-purple-600' :
                    category.color === 'orange' ? 'text-orange-600' :
                    'text-teal-600'
                  }`} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {category.documentCount} وثيقة
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                    {category.totalSize}
                  </p>
                </div>
              </div>
            </TikTokCard>
          );
        })}
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1">
          <TikTokInput
            placeholder="البحث في الوثائق والملفات..."
            value={searchQuery}
            onChange={setSearchQuery}
            icon={<Search className="w-4 h-4 text-gray-400" />}
          />
        </div>
        <div className="flex gap-2">
          <select
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
          >
            <option value="date">ترتيب بالتاريخ</option>
            <option value="name">ترتيب بالاسم</option>
            <option value="size">ترتيب بالحجم</option>
            <option value="type">ترتيب بالنوع</option>
          </select>
          <div className="flex border border-gray-300 dark:border-gray-600 rounded-lg">
            <button
              className={`p-2 ${viewMode === 'grid' ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-600' : 'text-gray-600'}`}
              onClick={() => setViewMode('grid')}
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              className={`p-2 border-l border-gray-300 dark:border-gray-600 ${viewMode === 'list' ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-600' : 'text-gray-600'}`}
              onClick={() => setViewMode('list')}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Documents Display */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedDocuments.map((doc) => (
            <DocumentCard key={doc.id} document={doc} />
          ))}
        </div>
      ) : (
        <div className="space-y-2">
          {sortedDocuments.map((doc) => (
            <DocumentListItem key={doc.id} document={doc} />
          ))}
        </div>
      )}

      {sortedDocuments.length === 0 && (
        <div className="text-center py-12">
          <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            لا توجد وثائق
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            لا توجد وثائق مطابقة لمعايير البحث
          </p>
        </div>
      )}

      {/* Upload Modal */}
      <TikTokModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="رفع وثيقة جديدة"
      >
        <DocumentUploadForm onSubmit={(doc) => {
          setDocuments([...documents, { ...doc, id: `DOC${Date.now()}` }]);
          setIsModalOpen(false);
        }} />
      </TikTokModal>
    </div>
  );
}

// Document Card Component
function DocumentCard({ document }: { document: Document }) {
  const getStatusColor = (status: Document['status']) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'archived': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
      case 'deleted': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400';
      case 'pending_review': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  const getAccessLevelColor = (level: Document['accessLevel']) => {
    switch (level) {
      case 'public': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'restricted': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'confidential': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  return (
    <TikTokCard className="p-6 hover:shadow-lg transition-shadow cursor-pointer group">
      <div className="space-y-4">
        {/* Document Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-gray-900 dark:text-white line-clamp-2">
                {document.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {document.type} • {document.size}
              </p>
            </div>
          </div>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
              <MoreVertical className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Status and Access Level */}
        <div className="flex items-center gap-2">
          <TikTokBadge className={getStatusColor(document.status)}>
            {document.status === 'active' ? 'نشط' :
             document.status === 'archived' ? 'مؤرشف' :
             document.status === 'deleted' ? 'محذوف' :
             'قيد المراجعة'}
          </TikTokBadge>
          <TikTokBadge className={getAccessLevelColor(document.accessLevel)}>
            {document.accessLevel === 'public' ? 'عام' :
             document.accessLevel === 'restricted' ? 'مقيد' :
             'سري'}
          </TikTokBadge>
        </div>

        {/* Document Info */}
        <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span>رفع بواسطة: {document.uploadedBy}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{new Date(document.uploadDate).toLocaleDateString('ar-SA')}</span>
          </div>
          {document.workflow && (
            <div className="flex items-center gap-2">
              <Workflow className="w-4 h-4" />
              <span>الحالة: {document.workflow.currentStep}</span>
            </div>
          )}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          {document.tags.slice(0, 3).map((tag, index) => (
            <TikTokBadge key={index} variant="outline" size="sm">
              {tag}
            </TikTokBadge>
          ))}
          {document.tags.length > 3 && (
            <TikTokBadge variant="outline" size="sm">
              +{document.tags.length - 3}
            </TikTokBadge>
          )}
        </div>
      </div>
    </TikTokCard>
  );
}

// Document List Item Component
function DocumentListItem({ document }: { document: Document }) {
  const getStatusColor = (status: Document['status']) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'archived': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
      case 'deleted': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400';
      case 'pending_review': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  return (
    <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
      <div className="flex items-center gap-4 flex-1">
        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
          <FileText className="w-5 h-5 text-blue-600" />
        </div>
        <div className="flex-1">
          <h4 className="font-medium text-gray-900 dark:text-white">
            {document.name}
          </h4>
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span>{document.type}</span>
            <span>•</span>
            <span>{document.size}</span>
            <span>•</span>
            <span>رفع بواسطة {document.uploadedBy}</span>
            <span>•</span>
            <span>{new Date(document.uploadDate).toLocaleDateString('ar-SA')}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <TikTokBadge className={getStatusColor(document.status)}>
          {document.status === 'active' ? 'نشط' : document.status === 'archived' ? 'مؤرشف' : 'قيد المراجعة'}
        </TikTokBadge>
        <button className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
          <MoreVertical className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

// Document Upload Form Component
function DocumentUploadForm({ onSubmit }: { onSubmit: (document: Partial<Document>) => void }) {
  const [formData, setFormData] = useState({
    name: '',
    type: 'PDF',
    category: 'policies',
    subcategory: '',
    description: '',
    accessLevel: 'restricted' as Document['accessLevel'],
    tags: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      size: '0 KB',
      uploadedBy: 'المستخدم الحالي',
      uploadDate: new Date().toISOString(),
      modifiedDate: new Date().toISOString(),
      status: 'active',
      version: 1,
      filePath: `/documents/${formData.category}/${Date.now()}.${formData.type.toLowerCase()}`,
      tags: formData.tags.split(',').map(tag => tag.trim()).filter(Boolean),
      workflow: {
        currentStep: 'صياغة',
        steps: ['صياغة', 'مراجعة', 'اعتماد'],
        approvers: ['مدير القسم'],
        status: 'draft'
      },
      metadata: {
        department: 'الإدارة العامة',
        language: 'العربية'
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <TikTokInput
        label="اسم الوثيقة"
        value={formData.name}
        onChange={(value) => setFormData({ ...formData, name: value })}
        required
      />

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            نوع الملف
          </label>
          <select
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          >
            <option value="PDF">PDF</option>
            <option value="DOCX">DOCX</option>
            <option value="XLSX">XLSX</option>
            <option value="PPTX">PPTX</option>
            <option value="TXT">TXT</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            التصنيف الرئيسي
          </label>
          <select
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          >
            <option value="policies">السياسات والإجراءات</option>
            <option value="contracts">العقود والاتفاقيات</option>
            <option value="reports">التقارير والدراسات</option>
            <option value="forms">النماذج والاستمارات</option>
            <option value="manuals">الأدلة والكتيبات</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          التصنيف الفرعي (اختياري)
        </label>
        <input
          type="text"
          className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          value={formData.subcategory}
          onChange={(e) => setFormData({ ...formData, subcategory: e.target.value })}
          placeholder="مثال: سياسات الموارد البشرية"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          وصف الوثيقة
        </label>
        <textarea
          className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          rows={3}
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          placeholder="وصف مختصر لمحتوى الوثيقة"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            مستوى الوصول
          </label>
          <select
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            value={formData.accessLevel}
            onChange={(e) => setFormData({ ...formData, accessLevel: e.target.value as Document['accessLevel'] })}
          >
            <option value="public">عام</option>
            <option value="restricted">مقيد</option>
            <option value="confidential">سري</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            العلامات (مفصولة بفواصل)
          </label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            value={formData.tags}
            onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
            placeholder="مثال: مهم، رسمي، 2024"
          />
        </div>
      </div>

      <div className="flex justify-end gap-3 pt-4">
        <TikTokButton type="button" variant="outline">
          إلغاء
        </TikTokButton>
        <TikTokButton type="submit">
          رفع الوثيقة
        </TikTokButton>
      </div>
    </form>
  );
}
