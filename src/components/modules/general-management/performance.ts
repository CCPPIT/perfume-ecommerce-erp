// نظام إدارة الأداء والتقييم للفئة 1: الإدارة العامة

export interface KPI {
  id: string;
  name: string;
  description: string;
  category: 'financial' | 'operational' | 'customer' | 'employee' | 'quality' | 'innovation';
  unit: 'percentage' | 'number' | 'currency' | 'ratio' | 'score';
  target: number;
  current: number;
  previous?: number;
  trend: 'up' | 'down' | 'stable';
  frequency: 'daily' | 'weekly' | 'monthly' | 'quarterly' | 'yearly';
  department: string;
  responsible: string;
  weight: number; // وزن المؤشر في التقييم العام
  status: 'on_track' | 'at_risk' | 'off_track' | 'achieved' | 'exceeded';
  lastUpdated: string;
  nextUpdate: string;
}

export interface PerformanceEvaluation {
  id: string;
  employeeId: string;
  employeeName: string;
  department: string;
  position: string;
  evaluationPeriod: string;
  evaluator: string;
  status: 'draft' | 'in_progress' | 'submitted' | 'approved' | 'rejected';
  overallScore: number;
  categories: {
    category: string;
    score: number;
    weight: number;
    comments: string;
    goals?: string[];
    achievements?: string[];
  }[];
  goals: {
    goal: string;
    target: string;
    achieved: boolean;
    progress: number;
    comments: string;
  }[];
  strengths: string[];
  areasForImprovement: string[];
  developmentPlan: string[];
  nextPeriodGoals: string[];
  createdAt: string;
  submittedAt?: string;
  approvedAt?: string;
}

export interface PerformanceReport {
  id: string;
  title: string;
  type: 'individual' | 'department' | 'organization' | 'project';
  period: string;
  generatedBy: string;
  generatedAt: string;
  status: 'draft' | 'final' | 'published';
  summary: string;
  highlights: string[];
  challenges: string[];
  recommendations: string[];
  metrics: {
    kpiId: string;
    name: string;
    target: number;
    actual: number;
    achievement: number;
    trend: 'up' | 'down' | 'stable';
  }[];
  charts: Array<{
    type: 'line' | 'bar' | 'pie' | 'gauge';
    title: string;
    data: any[];
  }>;
}

// أنواع مؤشرات الأداء الرئيسية
export const KPI_CATEGORIES = {
  financial: {
    name: 'الأداء المالي',
    icon: '💰',
    color: 'green',
    description: 'المؤشرات المالية والاقتصادية'
  },
  operational: {
    name: 'الأداء التشغيلي',
    icon: '⚙️',
    color: 'blue',
    description: 'كفاءة العمليات والإجراءات'
  },
  customer: {
    name: 'رضا العملاء',
    icon: '👥',
    color: 'purple',
    description: 'قياس رضا وولاء العملاء'
  },
  employee: {
    name: 'الموارد البشرية',
    icon: '👨‍💼',
    color: 'orange',
    description: 'أداء وتطوير الموظفين'
  },
  quality: {
    name: 'الجودة',
    icon: '⭐',
    color: 'yellow',
    description: 'معايير الجودة والتميز'
  },
  innovation: {
    name: 'الابتكار',
    icon: '💡',
    color: 'indigo',
    description: 'الابتكار والتطوير المستمر'
  }
};

// بيانات تجريبية لمؤشرات الأداء
export const SAMPLE_KPIS: KPI[] = [
  {
    id: 'KPI-001',
    name: 'نسبة رضا الموظفين',
    description: 'قياس مستوى رضا الموظفين عن بيئة العمل',
    category: 'employee',
    unit: 'percentage',
    target: 85,
    current: 78,
    previous: 82,
    trend: 'down',
    frequency: 'quarterly',
    department: 'الموارد البشرية',
    responsible: 'أحمد محمد',
    weight: 15,
    status: 'at_risk',
    lastUpdated: '2024-02-15T10:00:00Z',
    nextUpdate: '2024-05-15T10:00:00Z'
  },
  {
    id: 'KPI-002',
    name: 'معدل إنجاز المعاملات',
    description: 'نسبة إنجاز المعاملات خلال الوقت المحدد',
    category: 'operational',
    unit: 'percentage',
    target: 90,
    current: 94,
    previous: 88,
    trend: 'up',
    frequency: 'monthly',
    department: 'العمليات الإدارية',
    responsible: 'فاطمة أحمد',
    weight: 20,
    status: 'exceeded',
    lastUpdated: '2024-03-01T14:00:00Z',
    nextUpdate: '2024-04-01T14:00:00Z'
  },
  {
    id: 'KPI-003',
    name: 'تكلفة التشغيل لكل معاملة',
    description: 'متوسط التكلفة لإنجاز معاملة واحدة',
    category: 'financial',
    unit: 'currency',
    target: 50,
    current: 45,
    previous: 52,
    trend: 'up',
    frequency: 'monthly',
    department: 'المالية',
    responsible: 'محمد علي',
    weight: 25,
    status: 'on_track',
    lastUpdated: '2024-03-01T16:00:00Z',
    nextUpdate: '2024-04-01T16:00:00Z'
  },
  {
    id: 'KPI-004',
    name: 'معدل الابتكار والتحسين',
    description: 'عدد الاقتراحات المقدمة للتحسين شهرياً',
    category: 'innovation',
    unit: 'number',
    target: 25,
    current: 31,
    previous: 22,
    trend: 'up',
    frequency: 'monthly',
    department: 'التطوير والابتكار',
    responsible: 'سارة عبدالله',
    weight: 10,
    status: 'exceeded',
    lastUpdated: '2024-03-05T09:00:00Z',
    nextUpdate: '2024-04-05T09:00:00Z'
  },
  {
    id: 'KPI-005',
    name: 'وقت استجابة الخدمات',
    description: 'متوسط وقت الاستجابة للطلبات الخدمية',
    category: 'customer',
    unit: 'number',
    target: 2,
    current: 1.8,
    previous: 2.2,
    trend: 'up',
    frequency: 'monthly',
    department: 'خدمة العملاء',
    responsible: 'لينا خالد',
    weight: 18,
    status: 'on_track',
    lastUpdated: '2024-03-01T11:00:00Z',
    nextUpdate: '2024-04-01T11:00:00Z'
  }
];

// بيانات تقييمات الأداء
export const SAMPLE_EVALUATIONS: PerformanceEvaluation[] = [
  {
    id: 'EVAL-001',
    employeeId: 'EMP-001',
    employeeName: 'أحمد محمد',
    department: 'الموارد البشرية',
    position: 'مدير الموارد البشرية',
    evaluationPeriod: 'يناير - مارس 2024',
    evaluator: 'الإدارة العليا',
    status: 'approved',
    overallScore: 4.2,
    categories: [
      {
        category: 'الأداء الوظيفي',
        score: 4.5,
        weight: 40,
        comments: 'أداء ممتاز في إدارة شؤون الموظفين',
        goals: ['تحسين نظام التوظيف', 'تطوير برامج التدريب'],
        achievements: ['تقليل معدل الاستقالة بنسبة 15%']
      },
      {
        category: 'المهارات القيادية',
        score: 4.0,
        weight: 30,
        comments: 'قيادة فعالة للفريق مع تطوير واضح',
        goals: ['تطوير مهارات الفريق', 'تحسين التواصل الداخلي']
      },
      {
        category: 'التطوير المهني',
        score: 4.0,
        weight: 20,
        comments: 'مشاركة فعالة في الدورات التدريبية',
        goals: ['الحصول على شهادة إدارية']
      },
      {
        category: 'الالتزام والانضباط',
        score: 4.5,
        weight: 10,
        comments: 'التزام تام بالسياسات والإجراءات'
      }
    ],
    goals: [
      {
        goal: 'تطوير نظام إدارة الأداء',
        target: 'إنجاز 80% من النظام الجديد',
        achieved: true,
        progress: 85,
        comments: 'تم إنجاز النظام بنجاح مع تجاوز الهدف المطلوب'
      },
      {
        goal: 'تقليل معدل الاستقالة',
        target: 'تقليل المعدل بنسبة 10%',
        achieved: true,
        progress: 15,
        comments: 'تم تقليل معدل الاستقالة بنسبة 15% عن طريق تحسين بيئة العمل'
      }
    ],
    strengths: [
      'قيادة ممتازة للفريق',
      'قدرة على حل المشكلات بفعالية',
      'تواصل ممتاز مع الإدارات الأخرى'
    ],
    areasForImprovement: [
      'تطوير مهارات استخدام التكنولوجيا الحديثة',
      'تحسين إدارة الوقت في الاجتماعات'
    ],
    developmentPlan: [
      'المشاركة في دورة تدريبية في إدارة الوقت',
      'الحصول على شهادة في نظم المعلومات الإدارية',
      'تطوير مهارات القيادة الرقمية'
    ],
    nextPeriodGoals: [
      'تطبيق نظام إدارة الأداء الجديد',
      'تطوير برنامج تدريبي شامل للموظفين',
      'تحسين عمليات التوظيف والاختيار'
    ],
    createdAt: '2024-03-01T10:00:00Z',
    submittedAt: '2024-03-15T14:00:00Z',
    approvedAt: '2024-03-20T09:00:00Z'
  }
];

// دوال مساعدة لإدارة مؤشرات الأداء
export const calculateKPIAchievement = (kpi: KPI): number => {
  return (kpi.current / kpi.target) * 100;
};

export const getKPIStatusColor = (kpi: KPI): string => {
  const achievement = calculateKPIAchievement(kpi);

  if (achievement >= 100) return 'success';
  if (achievement >= 80) return 'primary';
  if (achievement >= 60) return 'warning';
  return 'error';
};

export const getKPITrendIcon = (trend: KPI['trend']): string => {
  switch (trend) {
    case 'up': return '📈';
    case 'down': return '📉';
    case 'stable': return '➡️';
    default: return '➡️';
  }
};

// دوال إدارة التقييمات
export const calculateOverallScore = (categories: PerformanceEvaluation['categories']): number => {
  const totalWeightedScore = categories.reduce((sum, cat) => sum + (cat.score * cat.weight), 0);
  const totalWeight = categories.reduce((sum, cat) => sum + cat.weight, 0);
  return totalWeight > 0 ? totalWeightedScore / totalWeight : 0;
};

export const getEvaluationStatusColor = (status: PerformanceEvaluation['status']): string => {
  switch (status) {
    case 'draft': return 'secondary';
    case 'in_progress': return 'warning';
    case 'submitted': return 'primary';
    case 'approved': return 'success';
    case 'rejected': return 'error';
    default: return 'secondary';
  }
};

// تقارير الأداء
export const generatePerformanceReport = (period: string, department?: string): PerformanceReport => {
  const kpis = SAMPLE_KPIS.filter(kpi =>
    !department || kpi.department === department
  );

  const avgAchievement = kpis.reduce((sum, kpi) => sum + calculateKPIAchievement(kpi), 0) / kpis.length;

  return {
    id: `RPT-${Date.now()}`,
    title: `تقرير الأداء - ${period}`,
    type: department ? 'department' : 'organization',
    period,
    generatedBy: 'نظام إدارة الأداء',
    generatedAt: new Date().toISOString(),
    status: 'final',
    summary: `تقرير شامل عن أداء المؤسسة للفترة ${period} يظهر تحقيق ${avgAchievement.toFixed(1)}% من الأهداف المحددة`,
    highlights: [
      'تحسن ملحوظ في رضا الموظفين',
      'زيادة في كفاءة العمليات الإدارية',
      'تحسن في مؤشرات الأداء المالي'
    ],
    challenges: [
      'بعض التحديات في تطبيق النظم الجديدة',
      'حاجة لتطوير مهارات تقنية لدى بعض الموظفين'
    ],
    recommendations: [
      'تعزيز برامج التدريب التقني',
      'تسريع عملية التحول الرقمي',
      'تحسين آليات التواصل الداخلي'
    ],
    metrics: kpis.map(kpi => ({
      kpiId: kpi.id,
      name: kpi.name,
      target: kpi.target,
      actual: kpi.current,
      achievement: calculateKPIAchievement(kpi),
      trend: kpi.trend
    })),
    charts: [
      {
        type: 'bar',
        title: 'إنجاز مؤشرات الأداء',
        data: kpis.map(kpi => ({
          name: kpi.name,
          target: kpi.target,
          actual: kpi.current,
          achievement: calculateKPIAchievement(kpi)
        }))
      },
      {
        type: 'pie',
        title: 'توزيع الأقسام حسب الأداء',
        data: Object.entries(
          kpis.reduce((acc, kpi) => {
            const achievement = calculateKPIAchievement(kpi);
            const category = achievement >= 90 ? 'ممتاز' :
                           achievement >= 75 ? 'جيد' :
                           achievement >= 60 ? 'مقبول' : 'يحتاج تحسين';
            acc[category] = (acc[category] || 0) + 1;
            return acc;
          }, {} as Record<string, number>)
        ).map(([name, value]) => ({ name, value }))
      }
    ]
  };
};

// إحصائيات الأداء
export interface PerformanceStats {
  totalKPIs: number;
  activeKPIs: number;
  achievedKPIs: number;
  atRiskKPIs: number;
  totalEvaluations: number;
  pendingEvaluations: number;
  averageScore: number;
  topPerformers: Array<{
    name: string;
    department: string;
    score: number;
  }>;
  departmentPerformance: Array<{
    department: string;
    score: number;
    trend: 'up' | 'down' | 'stable';
  }>;
}
