// نظام إدارة الوثائق والمستندات للفئة 1: الإدارة العامة

export interface Document {
  id: string;
  title: string;
  type: 'policy' | 'procedure' | 'contract' | 'memo' | 'report' | 'form' | 'circular' | 'regulation';
  category: string;
  department: string;
  status: 'draft' | 'review' | 'approved' | 'published' | 'archived' | 'expired';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  confidentiality: 'public' | 'internal' | 'confidential' | 'restricted';
  version: string;
  author: string;
  createdAt: string;
  updatedAt: string;
  expiryDate?: string;
  fileSize?: number;
  fileType?: string;
  tags: string[];
  description?: string;
  relatedDocuments?: string[];
}

export interface DocumentWorkflow {
  id: string;
  documentId: string;
  step: number;
  status: 'pending' | 'in_progress' | 'completed' | 'rejected';
  assignedTo: string;
  assignedBy: string;
  dueDate: string;
  completedAt?: string;
  comments?: string;
  actions: Array<{
    type: 'review' | 'approve' | 'reject' | 'revise' | 'sign';
    performedBy: string;
    performedAt: string;
    comments?: string;
  }>;
}

// أنواع الوثائق الرئيسية في الإدارة العامة
export const DOCUMENT_TYPES = {
  policy: {
    name: 'سياسات',
    icon: '📋',
    color: 'blue',
    description: 'السياسات والإجراءات العامة'
  },
  procedure: {
    name: 'إجراءات',
    icon: '⚙️',
    color: 'green',
    description: 'الإجراءات التفصيلية والعمليات'
  },
  contract: {
    name: 'عقود',
    icon: '📄',
    color: 'purple',
    description: 'العقود والاتفاقيات'
  },
  memo: {
    name: 'مذكرات',
    icon: '📝',
    color: 'orange',
    description: 'المذكرات والمراسلات الداخلية'
  },
  report: {
    name: 'تقارير',
    icon: '📊',
    color: 'teal',
    description: 'التقارير والدراسات'
  },
  form: {
    name: 'نماذج',
    icon: '📋',
    color: 'gray',
    description: 'النماذج والاستمارات'
  },
  circular: {
    name: 'تعاميم',
    icon: '📢',
    color: 'red',
    description: 'التعاميم والنشرات الداخلية'
  },
  regulation: {
    name: 'لوائح',
    icon: '⚖️',
    color: 'indigo',
    description: 'اللوائح والأنظمة الداخلية'
  }
};

// دوال مساعدة لإدارة الوثائق
export const createDocument = (data: Partial<Document>): Document => {
  return {
    id: `DOC-${Date.now()}`,
    title: data.title || '',
    type: data.type || 'memo',
    category: data.category || '',
    department: data.department || '',
    status: data.status || 'draft',
    priority: data.priority || 'medium',
    confidentiality: data.confidentiality || 'internal',
    version: data.version || '1.0',
    author: data.author || 'النظام',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    tags: data.tags || [],
    description: data.description || '',
    relatedDocuments: data.relatedDocuments || []
  };
};

export const getDocumentStatusColor = (status: Document['status']) => {
  switch (status) {
    case 'draft': return 'secondary';
    case 'review': return 'warning';
    case 'approved': return 'success';
    case 'published': return 'primary';
    case 'archived': return 'gray';
    case 'expired': return 'error';
    default: return 'secondary';
  }
};

export const getDocumentPriorityColor = (priority: Document['priority']) => {
  switch (priority) {
    case 'low': return 'gray';
    case 'medium': return 'blue';
    case 'high': return 'orange';
    case 'urgent': return 'red';
    default: return 'gray';
  }
};

export const getDocumentConfidentialityLevel = (level: Document['confidentiality']) => {
  switch (level) {
    case 'public': return 'متاح للجميع';
    case 'internal': return 'داخلي';
    case 'confidential': return 'سري';
    case 'restricted': return 'مقيد';
    default: return 'داخلي';
  }
};

// بيانات تجريبية للوثائق
export const SAMPLE_DOCUMENTS: Document[] = [
  {
    id: 'DOC-001',
    title: 'سياسة الموارد البشرية العامة',
    type: 'policy',
    category: 'الموارد البشرية',
    department: 'الإدارة التنفيذية',
    status: 'published',
    priority: 'high',
    confidentiality: 'internal',
    version: '2.1',
    author: 'أحمد محمد',
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-03-01T14:30:00Z',
    expiryDate: '2025-01-15T00:00:00Z',
    tags: ['سياسات', 'موارد بشرية', 'توظيف'],
    description: 'سياسة شاملة لإدارة الموارد البشرية في المؤسسة'
  },
  {
    id: 'DOC-002',
    title: 'دليل إجراءات السلامة والصحة المهنية',
    type: 'procedure',
    category: 'السلامة والصحة',
    department: 'إدارة الأمن والسلامة',
    status: 'approved',
    priority: 'high',
    confidentiality: 'internal',
    version: '1.5',
    author: 'فاطمة أحمد',
    createdAt: '2024-02-01T09:00:00Z',
    updatedAt: '2024-02-15T11:20:00Z',
    tags: ['سلامة', 'صحة مهنية', 'إجراءات'],
    description: 'دليل شامل لإجراءات السلامة والصحة المهنية'
  },
  {
    id: 'DOC-003',
    title: 'عقد صيانة المعدات التقنية',
    type: 'contract',
    category: 'العقود',
    department: 'إدارة المشتريات العامة',
    status: 'review',
    priority: 'medium',
    confidentiality: 'confidential',
    version: '1.0',
    author: 'محمد علي',
    createdAt: '2024-03-01T13:00:00Z',
    updatedAt: '2024-03-05T10:00:00Z',
    expiryDate: '2027-03-01T00:00:00Z',
    tags: ['عقود', 'صيانة', 'تقنية'],
    description: 'عقد صيانة المعدات والأنظمة التقنية'
  },
  {
    id: 'DOC-004',
    title: 'تقرير الأداء الشهري - فبراير 2024',
    type: 'report',
    category: 'التقارير',
    department: 'إدارة التخطيط الاستراتيجي',
    status: 'published',
    priority: 'medium',
    confidentiality: 'internal',
    version: '1.0',
    author: 'سارة عبدالله',
    createdAt: '2024-03-01T15:00:00Z',
    updatedAt: '2024-03-01T15:00:00Z',
    tags: ['تقارير', 'أداء', 'شهري'],
    description: 'تقرير شامل عن أداء المؤسسة لشهر فبراير 2024'
  },
  {
    id: 'DOC-005',
    title: 'نموذج طلب إجازة سنوية',
    type: 'form',
    category: 'النماذج',
    department: 'إدارة الموارد البشرية',
    status: 'published',
    priority: 'low',
    confidentiality: 'internal',
    version: '3.2',
    author: 'لينا خالد',
    createdAt: '2023-12-01T10:00:00Z',
    updatedAt: '2024-01-15T09:30:00Z',
    tags: ['نماذج', 'إجازات', 'موارد بشرية'],
    description: 'نموذج رسمي لطلب الإجازة السنوية'
  }
];

// دوال البحث والتصفية
export const searchDocuments = (query: string, documents: Document[]): Document[] => {
  if (!query.trim()) return documents;

  const searchTerm = query.toLowerCase();
  return documents.filter(doc =>
    doc.title.toLowerCase().includes(searchTerm) ||
    doc.description?.toLowerCase().includes(searchTerm) ||
    doc.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
    doc.department.toLowerCase().includes(searchTerm) ||
    doc.category.toLowerCase().includes(searchTerm)
  );
};

export const filterDocumentsByType = (type: string, documents: Document[]): Document[] => {
  if (type === 'all') return documents;
  return documents.filter(doc => doc.type === type);
};

export const filterDocumentsByStatus = (status: string, documents: Document[]): Document[] => {
  if (status === 'all') return documents;
  return documents.filter(doc => doc.status === status);
};

export const filterDocumentsByDepartment = (department: string, documents: Document[]): Document[] => {
  if (department === 'all') return documents;
  return documents.filter(doc => doc.department === department);
};

// نظام إدارة الوثائق الرقمية
export interface DigitalArchive {
  id: string;
  name: string;
  description: string;
  type: 'department' | 'category' | 'year' | 'project' | 'custom';
  parentId?: string;
  createdBy: string;
  createdAt: string;
  isPublic: boolean;
  documentCount: number;
  size: number; // in bytes
  tags: string[];
}

// بيانات الأرشيف الرقمي
export const DIGITAL_ARCHIVES: DigitalArchive[] = [
  {
    id: 'ARCH-001',
    name: 'أرشيف الإدارة التنفيذية',
    description: 'الوثائق الرسمية للإدارة العليا',
    type: 'department',
    createdBy: 'أحمد محمد',
    createdAt: '2024-01-01T00:00:00Z',
    isPublic: false,
    documentCount: 156,
    size: 2048576000, // 2GB
    tags: ['تنفيذي', 'رسمي', 'سري']
  },
  {
    id: 'ARCH-002',
    name: 'أرشيف السياسات والإجراءات',
    description: 'جميع السياسات والإجراءات المؤسسية',
    type: 'category',
    createdBy: 'فاطمة أحمد',
    createdAt: '2024-01-15T00:00:00Z',
    isPublic: true,
    documentCount: 89,
    size: 1048576000, // 1GB
    tags: ['سياسات', 'إجراءات', 'مرجعي']
  },
  {
    id: 'ARCH-003',
    name: 'أرشيف العقود والعطاءات',
    description: 'العقود والاتفاقيات والعطاءات',
    type: 'category',
    createdBy: 'محمد علي',
    createdAt: '2024-02-01T00:00:00Z',
    isPublic: false,
    documentCount: 234,
    size: 5242880000, // 5GB
    tags: ['عقود', 'عطاءات', 'قانوني']
  }
];

// نظام التوقيعات الرقمية
export interface DigitalSignature {
  id: string;
  documentId: string;
  signerName: string;
  signerPosition: string;
  signerDepartment: string;
  signatureType: 'electronic' | 'digital' | 'biometric';
  signedAt: string;
  isValid: boolean;
  certificateId?: string;
  ipAddress?: string;
  location?: string;
  verificationMethod: 'password' | 'token' | 'biometric' | 'certificate';
}

// نظام إدارة المهام والموافقات
export interface DocumentTask {
  id: string;
  documentId: string;
  taskType: 'review' | 'approve' | 'sign' | 'comment' | 'revise';
  title: string;
  description: string;
  assignedTo: string;
  assignedBy: string;
  status: 'pending' | 'in_progress' | 'completed' | 'overdue';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  dueDate: string;
  completedAt?: string;
  comments?: string;
  attachments?: string[];
}

// نظام البحث المتقدم في الوثائق
export interface DocumentSearchFilters {
  query?: string;
  type?: string;
  status?: string;
  department?: string;
  category?: string;
  priority?: string;
  confidentiality?: string;
  dateFrom?: string;
  dateTo?: string;
  author?: string;
  tags?: string[];
  hasExpiry?: boolean;
  sizeFrom?: number;
  sizeTo?: number;
}

// إحصائيات الوثائق
export interface DocumentStats {
  totalDocuments: number;
  documentsByType: Record<string, number>;
  documentsByStatus: Record<string, number>;
  documentsByDepartment: Record<string, number>;
  totalSize: number;
  averageProcessingTime: number;
  overdueTasks: number;
  pendingApprovals: number;
}
