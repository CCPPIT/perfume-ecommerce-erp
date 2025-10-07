'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import {
  FileText,
  Search,
  Filter,
  Plus,
  Eye,
  Edit,
  Trash2,
  Download,
  Upload,
  Clock,
  CheckCircle,
  AlertCircle,
  Lock,
  Unlock,
  Archive,
  Tag,
  Calendar,
  User,
  Building2,
  MoreVertical,
  Folder,
  FolderOpen
} from 'lucide-react';
import { TikTokButton, TikTokBadge, TikTokModal, TikTokInput, TikTokProgress } from '../../ui/TikTokComponents';
import { useI18n } from '../../../hooks/useI18n';
import {
  Document,
  DocumentWorkflow,
  DocumentTask,
  DigitalArchive,
  DigitalSignature,
  SAMPLE_DOCUMENTS,
  DOCUMENT_TYPES,
  searchDocuments,
  filterDocumentsByType,
  filterDocumentsByStatus,
  filterDocumentsByDepartment,
  getDocumentStatusColor,
  getDocumentPriorityColor,
  getDocumentConfidentialityLevel,
  DIGITAL_ARCHIVES
} from './documents';

interface DocumentCardProps {
  document: Document;
  onView?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
  onDownload?: () => void;
  onWorkflow?: () => void;
}

export const DocumentCard = ({
  document,
  onView,
  onEdit,
  onDelete,
  onDownload,
  onWorkflow
}: DocumentCardProps) => {
  const { t } = useI18n();

  const getTypeConfig = (type: Document['type']) => {
    return DOCUMENT_TYPES[type] || DOCUMENT_TYPES.memo;
  };

  const typeConfig = getTypeConfig(document.type);
  const statusColor = getDocumentStatusColor(document.status);
  const priorityColor = getDocumentPriorityColor(document.priority);

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -2 }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <motion.div
            className={`w-12 h-12 rounded-full flex items-center justify-center text-white ${
              typeConfig.color === 'blue' ? 'bg-blue-500' :
              typeConfig.color === 'green' ? 'bg-green-500' :
              typeConfig.color === 'purple' ? 'bg-purple-500' :
              typeConfig.color === 'orange' ? 'bg-orange-500' :
              typeConfig.color === 'teal' ? 'bg-teal-500' :
              typeConfig.color === 'gray' ? 'bg-gray-500' :
              typeConfig.color === 'red' ? 'bg-red-500' :
              'bg-indigo-500'
            }`}
            whileHover={{ scale: 1.1 }}
          >
            <span className="text-lg">{typeConfig.icon}</span>
          </motion.div>

          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 dark:text-white line-clamp-2">
              {document.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {typeConfig.name} • v{document.version}
            </p>
            <div className="flex items-center gap-2 mt-1">
              <TikTokBadge variant={priorityColor as any} size="sm">
                {document.priority === 'urgent' ? 'عاجل' :
                 document.priority === 'high' ? 'عالي' :
                 document.priority === 'medium' ? 'متوسط' : 'منخفض'}
              </TikTokBadge>
              <TikTokBadge variant={statusColor as any} size="sm">
                {document.status === 'published' ? 'منشور' :
                 document.status === 'approved' ? 'معتمد' :
                 document.status === 'review' ? 'قيد المراجعة' :
                 document.status === 'draft' ? 'مسودة' :
                 document.status === 'archived' ? 'مؤرشف' : 'منتهي الصلاحية'}
              </TikTokBadge>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {document.confidentiality !== 'public' && (
            <Lock className="w-4 h-4 text-gray-400" />
          )}
          <motion.button
            className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <MoreVertical className="w-4 h-4" />
          </motion.button>
        </div>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
        {document.description}
      </p>

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center gap-1">
            <Building2 className="w-4 h-4" />
            <span>{document.department}</span>
          </div>
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            <span>{document.author}</span>
          </div>
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-500">
          {new Date(document.updatedAt).toLocaleDateString('ar-SA')}
        </div>
      </div>

      {document.expiryDate && (
        <div className="mb-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="w-4 h-4 text-yellow-600" />
            <span className="text-yellow-800 dark:text-yellow-300">
              ينتهي في: {new Date(document.expiryDate).toLocaleDateString('ar-SA')}
            </span>
          </div>
        </div>
      )}

      <div className="flex gap-2">
        {onView && (
          <TikTokButton
            onClick={onView}
            variant="outline"
            size="sm"
            className="flex-1 flex items-center gap-2"
          >
            <Eye className="w-4 h-4" />
            عرض
          </TikTokButton>
        )}

        {onWorkflow && (
          <TikTokButton
            onClick={onWorkflow}
            variant="outline"
            size="sm"
            className="flex-1 flex items-center gap-2"
          >
            <CheckCircle className="w-4 h-4" />
            سير العمل
          </TikTokButton>
        )}

        {onDownload && (
          <TikTokButton
            onClick={onDownload}
            variant="ghost"
            size="sm"
          >
            <Download className="w-4 h-4" />
          </TikTokButton>
        )}
      </div>
    </motion.div>
  );
};

interface DocumentManagementDashboardProps {
  onDocumentSelect?: (document: Document) => void;
}

export const DocumentManagementDashboard = ({ onDocumentSelect }: DocumentManagementDashboardProps) => {
  const { t } = useI18n();
  const [documents, setDocuments] = useState<Document[]>(SAMPLE_DOCUMENTS);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = searchDocuments(searchQuery, [doc]).length > 0;
    const matchesType = selectedType === 'all' || doc.type === selectedType;
    const matchesStatus = selectedStatus === 'all' || doc.status === selectedStatus;
    const matchesDepartment = selectedDepartment === 'all' || doc.department === selectedDepartment;

    return matchesSearch && matchesType && matchesStatus && matchesDepartment;
  });

  const getDocumentStats = () => {
    const total = documents.length;
    const published = documents.filter(d => d.status === 'published').length;
    const pending = documents.filter(d => d.status === 'review' || d.status === 'draft').length;
    const expired = documents.filter(d => d.expiryDate && new Date(d.expiryDate) < new Date()).length;

    return { total, published, pending, expired };
  };

  const stats = getDocumentStats();

  // Get unique departments for filter
  const departments = Array.from(new Set(documents.map(d => d.department)));

  return (
    <motion.div
      className="space-y-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              إدارة الوثائق والمستندات
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              نظام شامل لإدارة {documents.length} وثيقة إدارية
            </p>
          </div>

          <TikTokButton
            onClick={() => setIsUploadModalOpen(true)}
            variant="primary"
            className="flex items-center gap-2"
          >
            <Upload className="w-5 h-5" />
            رفع وثيقة جديدة
          </TikTokButton>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <motion.div
            className="text-center p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
              {stats.total}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              إجمالي الوثائق
            </div>
          </motion.div>

          <motion.div
            className="text-center p-6 bg-green-50 dark:bg-green-900/20 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="text-3xl font-bold text-green-600 dark:text-green-400">
              {stats.published}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              الوثائق المنشورة
            </div>
          </motion.div>

          <motion.div
            className="text-center p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">
              {stats.pending}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              قيد المراجعة
            </div>
          </motion.div>

          <motion.div
            className="text-center p-6 bg-red-50 dark:bg-red-900/20 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="text-3xl font-bold text-red-600 dark:text-red-400">
              {stats.expired}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              منتهية الصلاحية
            </div>
          </motion.div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1">
            <TikTokInput
              placeholder="البحث في الوثائق..."
              value={searchQuery}
              onChange={setSearchQuery}
              icon={<Search className="w-5 h-5 text-gray-400" />}
            />
          </div>

          <div className="w-full lg:w-48">
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-4 py-3 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white focus:border-purple-500 focus:outline-none"
            >
              <option value="all">جميع الأنواع</option>
              {Object.entries(DOCUMENT_TYPES).map(([key, config]) => (
                <option key={key} value={key}>
                  {config.icon} {config.name}
                </option>
              ))}
            </select>
          </div>

          <div className="w-full lg:w-48">
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full px-4 py-3 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white focus:border-purple-500 focus:outline-none"
            >
              <option value="all">جميع الحالات</option>
              <option value="published">منشور</option>
              <option value="approved">معتمد</option>
              <option value="review">قيد المراجعة</option>
              <option value="draft">مسودة</option>
              <option value="archived">مؤرشف</option>
            </select>
          </div>

          <div className="w-full lg:w-48">
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="w-full px-4 py-3 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white focus:border-purple-500 focus:outline-none"
            >
              <option value="all">جميع الأقسام</option>
              {departments.map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Documents Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        initial="hidden"
        animate="visible"
      >
        {filteredDocuments.map((document) => (
          <DocumentCard
            key={document.id}
            document={document}
            onView={() => onDocumentSelect?.(document)}
            onWorkflow={() => {
              console.log('Document workflow for:', document.id);
            }}
            onDownload={() => {
              console.log('Download document:', document.id);
            }}
          />
        ))}
      </motion.div>

      {filteredDocuments.length === 0 && (
        <motion.div
          className="text-center py-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            لا توجد وثائق
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            لم يتم العثور على وثائق تطابق معايير البحث
          </p>
          <TikTokButton variant="outline">
            مسح المرشحات
          </TikTokButton>
        </motion.div>
      )}

      {/* Document Upload Modal */}
      <TikTokModal
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
        title="رفع وثيقة جديدة"
        size="lg"
      >
        <div className="space-y-6">
          <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl p-8 text-center">
            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              اسحب وأفلت الملف هنا أو انقر للاختيار
            </p>
            <TikTokButton variant="outline">
              اختيار ملف
            </TikTokButton>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TikTokInput
              label="عنوان الوثيقة"
              placeholder="أدخل عنوان الوثيقة"
            />

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                نوع الوثيقة
              </label>
              <select className="w-full px-4 py-3 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white focus:border-purple-500 focus:outline-none">
                <option>اختيار النوع</option>
                {Object.entries(DOCUMENT_TYPES).map(([key, config]) => (
                  <option key={key} value={key}>
                    {config.icon} {config.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex gap-3">
            <TikTokButton variant="outline" onClick={() => setIsUploadModalOpen(false)} className="flex-1">
              إلغاء
            </TikTokButton>
            <TikTokButton variant="primary" className="flex-1">
              رفع الوثيقة
            </TikTokButton>
          </div>
        </div>
      </TikTokModal>
    </motion.div>
  );
};

interface DigitalArchiveCardProps {
  archive: DigitalArchive;
  onView?: () => void;
  onEdit?: () => void;
  onManage?: () => void;
}

export const DigitalArchiveCard = ({
  archive,
  onView,
  onEdit,
  onManage
}: DigitalArchiveCardProps) => {
  const { t } = useI18n();

  const getSizeInMB = (bytes: number) => {
    return (bytes / (1024 * 1024)).toFixed(1);
  };

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -2 }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <motion.div
            className={`w-12 h-12 rounded-full flex items-center justify-center text-white ${
              archive.type === 'department' ? 'bg-blue-500' :
              archive.type === 'category' ? 'bg-green-500' :
              archive.type === 'year' ? 'bg-purple-500' :
              archive.type === 'project' ? 'bg-orange-500' :
              'bg-gray-500'
            }`}
            whileHover={{ scale: 1.1 }}
          >
            {archive.isPublic ? <FolderOpen className="w-6 h-6" /> : <Folder className="w-6 h-6" />}
          </motion.div>

          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 dark:text-white">
              {archive.name}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {archive.description}
            </p>
            <div className="flex items-center gap-2 mt-1">
              <TikTokBadge variant={archive.isPublic ? 'success' : 'secondary'} size="sm">
                {archive.isPublic ? 'عام' : 'خاص'}
              </TikTokBadge>
              <span className="text-xs text-gray-500 dark:text-gray-500">
                {archive.documentCount} وثيقة • {getSizeInMB(archive.size)} MB
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {!archive.isPublic && <Lock className="w-4 h-4 text-gray-400" />}
          <motion.button
            className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <MoreVertical className="w-4 h-4" />
          </motion.button>
        </div>
      </div>

      <div className="flex gap-2">
        {onView && (
          <TikTokButton
            onClick={onView}
            variant="outline"
            size="sm"
            className="flex-1 flex items-center gap-2"
          >
            <Eye className="w-4 h-4" />
            عرض المحتوى
          </TikTokButton>
        )}

        {onManage && (
          <TikTokButton
            onClick={onManage}
            variant="outline"
            size="sm"
            className="flex-1 flex items-center gap-2"
          >
            <Archive className="w-4 h-4" />
            إدارة الأرشيف
          </TikTokButton>
        )}
      </div>
    </motion.div>
  );
};

interface DigitalArchivesDashboardProps {
  onArchiveSelect?: (archive: DigitalArchive) => void;
}

export const DigitalArchivesDashboard = ({ onArchiveSelect }: DigitalArchivesDashboardProps) => {
  const { t } = useI18n();
  const [archives, setArchives] = useState<DigitalArchive[]>(DIGITAL_ARCHIVES);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');

  const filteredArchives = archives.filter(archive => {
    const matchesSearch = archive.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         archive.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === 'all' || archive.type === selectedType;
    return matchesSearch && matchesType;
  });

  const getArchiveStats = () => {
    const total = archives.length;
    const publicArchives = archives.filter(a => a.isPublic).length;
    const totalDocuments = archives.reduce((sum, a) => sum + a.documentCount, 0);
    const totalSize = archives.reduce((sum, a) => sum + a.size, 0);

    return { total, publicArchives, totalDocuments, totalSize };
  };

  const stats = getArchiveStats();

  return (
    <motion.div
      className="space-y-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              الأرشيف الرقمي
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              نظام أرشفة ذكي يحتوي على {archives.length} أرشيف رقمي
            </p>
          </div>

          <TikTokButton
            variant="primary"
            className="flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            إنشاء أرشيف جديد
          </TikTokButton>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <motion.div
            className="text-center p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
              {stats.total}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              إجمالي الأرشيفات
            </div>
          </motion.div>

          <motion.div
            className="text-center p-6 bg-green-50 dark:bg-green-900/20 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="text-3xl font-bold text-green-600 dark:text-green-400">
              {stats.publicArchives}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              الأرشيفات العامة
            </div>
          </motion.div>

          <motion.div
            className="text-center p-6 bg-purple-50 dark:bg-purple-900/20 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
              {stats.totalDocuments}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              إجمالي الوثائق
            </div>
          </motion.div>

          <motion.div
            className="text-center p-6 bg-orange-50 dark:bg-orange-900/20 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">
              {(stats.totalSize / (1024 * 1024 * 1024)).toFixed(1)} GB
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              حجم التخزين
            </div>
          </motion.div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1">
            <TikTokInput
              placeholder="البحث في الأرشيفات..."
              value={searchQuery}
              onChange={setSearchQuery}
              icon={<Search className="w-5 h-5 text-gray-400" />}
            />
          </div>

          <div className="w-full lg:w-48">
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-4 py-3 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white focus:border-purple-500 focus:outline-none"
            >
              <option value="all">جميع الأنواع</option>
              <option value="department">أقسام</option>
              <option value="category">فئات</option>
              <option value="year">سنوات</option>
              <option value="project">مشاريع</option>
              <option value="custom">مخصص</option>
            </select>
          </div>
        </div>
      </div>

      {/* Archives Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        initial="hidden"
        animate="visible"
      >
        {filteredArchives.map((archive) => (
          <DigitalArchiveCard
            key={archive.id}
            archive={archive}
            onView={() => onArchiveSelect?.(archive)}
            onManage={() => {
              console.log('Manage archive:', archive.id);
            }}
          />
        ))}
      </motion.div>

      {filteredArchives.length === 0 && (
        <motion.div
          className="text-center py-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Archive className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            لا توجد أرشيفات
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            لم يتم العثور على أرشيفات تطابق معايير البحث
          </p>
          <TikTokButton variant="outline">
            مسح المرشحات
          </TikTokButton>
        </motion.div>
      )}
    </motion.div>
  );
};

interface DocumentWorkflowModalProps {
  isOpen: boolean;
  onClose: () => void;
  document: Document;
  workflow?: DocumentWorkflow[];
  tasks?: DocumentTask[];
}

export const DocumentWorkflowModal = ({
  isOpen,
  onClose,
  document,
  workflow = [],
  tasks = []
}: DocumentWorkflowModalProps) => {
  const { t } = useI18n();

  return (
    <TikTokModal
      isOpen={isOpen}
      onClose={onClose}
      title={`سير عمل الوثيقة: ${document.title}`}
      size="xl"
    >
      <div className="space-y-6">
        {/* Document Info */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <div className="text-sm text-gray-600 dark:text-gray-400">نوع الوثيقة</div>
              <div className="font-medium">{DOCUMENT_TYPES[document.type].name}</div>
            </div>
            <div>
              <div className="text-sm text-gray-600 dark:text-gray-400">الحالة</div>
              <TikTokBadge variant={getDocumentStatusColor(document.status) as any}>
                {document.status}
              </TikTokBadge>
            </div>
            <div>
              <div className="text-sm text-gray-600 dark:text-gray-400">الأولوية</div>
              <TikTokBadge variant={getDocumentPriorityColor(document.priority) as any}>
                {document.priority}
              </TikTokBadge>
            </div>
          </div>
        </div>

        {/* Workflow Steps */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            مراحل سير العمل
          </h3>
          <div className="space-y-4">
            {workflow.length > 0 ? (
              workflow.map((step, index) => (
                <motion.div
                  key={step.id}
                  className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${
                    step.status === 'completed' ? 'bg-green-500' :
                    step.status === 'in_progress' ? 'bg-blue-500' :
                    step.status === 'rejected' ? 'bg-red-500' :
                    'bg-gray-400'
                  }`}>
                    {step.status === 'completed' ? <CheckCircle className="w-4 h-4" /> :
                     step.status === 'in_progress' ? <Clock className="w-4 h-4" /> :
                     step.status === 'rejected' ? <AlertCircle className="w-4 h-4" /> :
                     index + 1}
                  </div>

                  <div className="flex-1">
                    <div className="font-medium text-gray-900 dark:text-white">
                      الخطوة {step.step}: مراجعة الوثيقة
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      تم تعيينها لـ: {step.assignedTo}
                    </div>
                    {step.comments && (
                      <div className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                        تعليق: {step.comments}
                      </div>
                    )}
                  </div>

                  <div className="text-sm text-gray-500 dark:text-gray-500">
                    {step.completedAt ?
                      new Date(step.completedAt).toLocaleDateString('ar-SA') :
                      step.dueDate ?
                        `ينتهي: ${new Date(step.dueDate).toLocaleDateString('ar-SA')}` :
                        'في الانتظار'
                    }
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                لا توجد مراحل سير عمل محددة لهذه الوثيقة
              </div>
            )}
          </div>
        </div>

        {/* Tasks */}
        {tasks.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              المهام المطلوبة
            </h3>
            <div className="space-y-3">
              {tasks.map((task) => (
                <motion.div
                  key={task.id}
                  className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${
                      task.status === 'completed' ? 'bg-green-500' :
                      task.status === 'in_progress' ? 'bg-blue-500' :
                      task.status === 'overdue' ? 'bg-red-500' :
                      'bg-gray-400'
                    }`} />
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">
                        {task.title}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        تم تعيينها لـ: {task.assignedTo}
                      </div>
                    </div>
                  </div>

                  <div className="text-sm text-gray-500 dark:text-gray-500">
                    {task.dueDate && new Date(task.dueDate).toLocaleDateString('ar-SA')}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        <div className="flex gap-3">
          <TikTokButton variant="outline" onClick={onClose} className="flex-1">
            إغلاق
          </TikTokButton>
          <TikTokButton variant="primary" className="flex-1">
            إضافة مهمة جديدة
          </TikTokButton>
        </div>
      </div>
    </TikTokModal>
  );
};
