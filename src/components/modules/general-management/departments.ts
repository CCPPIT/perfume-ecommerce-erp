// الفئة 1: الأقسام الإدارية - 100 قسم
export const GENERAL_MANAGEMENT_DEPARTMENTS = {
  // الإدارة التنفيذية
  executiveManagement: {
    name: "الإدارة التنفيذية",
    code: "EXEC",
    departments: [
      { id: "EXEC001", name: "الإدارة العليا", code: "EXEC001", description: "الإدارة العليا والتنفيذية" },
      { id: "EXEC002", name: "السكرتارية العامة", code: "EXEC002", description: "إدارة السكرتارية العامة" },
      { id: "EXEC003", name: "إدارة الشؤون القانونية", code: "EXEC003", description: "الشؤون القانونية والامتثال" }
    ]
  },

  // إدارة العمليات الأساسية
  coreOperations: {
    name: "إدارة العمليات الأساسية",
    code: "CORE",
    departments: [
      { id: "CORE001", name: "إدارة المشتريات", code: "CORE001", description: "إدارة عمليات الشراء والتوريد" },
      { id: "CORE002", name: "إدارة المخزون", code: "CORE002", description: "إدارة المخزون والمستودعات" },
      { id: "CORE003", name: "إدارة التسويق", code: "CORE003", description: "استراتيجيات التسويق والترويج" },
      { id: "CORE004", name: "إدارة المبيعات", code: "CORE004", description: "إدارة عمليات البيع والمبيعات" },
      { id: "CORE005", name: "إدارة العلاقات العامة", code: "CORE005", description: "إدارة العلاقات العامة والإعلام" },
      { id: "CORE006", name: "إدارة الجودة", code: "CORE006", description: "ضمان الجودة والمعايير" }
    ]
  },

  // إدارة التقنية والأنظمة
  technologyManagement: {
    name: "إدارة التقنية والأنظمة",
    code: "TECH",
    departments: [
      { id: "TECH001", name: "إدارة التقنية", code: "TECH001", description: "إدارة الأنظمة التقنية والحاسوب" },
      { id: "TECH002", name: "قسم الأمن السيبراني", code: "TECH002", description: "حماية الأنظمة والشبكات" },
      { id: "TECH003", name: "قسم النسخ الاحتياطي", code: "TECH003", description: "إدارة النسخ الاحتياطي والاسترداد" },
      { id: "TECH004", name: "قسم مراقبة الأداء", code: "TECH004", description: "مراقبة أداء الأنظمة" },
      { id: "TECH005", name: "قسم التقارير الدورية", code: "TECH005", description: "إعداد التقارير التقنية" }
    ]
  },

  // إدارة خدمة العملاء والدعم
  customerService: {
    name: "إدارة خدمة العملاء والدعم",
    code: "SERVICE",
    departments: [
      { id: "SERVICE001", name: "قسم خدمة العملاء", code: "SERVICE001", description: "دعم وخدمة العملاء" },
      { id: "SERVICE002", name: "قسم المتابعة", code: "SERVICE002", description: "متابعة الطلبات والشكاوى" },
      { id: "SERVICE003", name: "قسم إدارة المخاطر", code: "SERVICE003", description: "تحليل وإدارة المخاطر" },
      { id: "SERVICE004", name: "قسم التحليل المالي", code: "SERVICE004", description: "تحليل البيانات المالية" },
      { id: "SERVICE005", name: "قسم التدقيق الداخلي", code: "SERVICE005", description: "التدقيق والمراجعة الداخلية" }
    ]
  },

  // إدارة التطوير والابتكار
  innovationDevelopment: {
    name: "إدارة التطوير والابتكار",
    code: "INNOV",
    departments: [
      { id: "INNOV001", name: "قسم الامتثال", code: "INNOV001", description: "ضمان الامتثال للمعايير" },
      { id: "INNOV002", name: "قسم الابتكار المؤسسي", code: "INNOV002", description: "تطوير حلول مبتكرة" },
      { id: "INNOV003", name: "قسم الاتصالات الداخلية", code: "INNOV003", description: "الاتصال الداخلي والتواصل" },
      { id: "INNOV004", name: "قسم التنظيم", code: "INNOV004", description: "التنظيم والتنسيق الإداري" },
      { id: "INNOV005", name: "قسم التوظيف", code: "INNOV005", description: "عمليات التوظيف والتعيين" }
    ]
  },

  // إدارة التدريب والتطوير
  trainingDevelopment: {
    name: "إدارة التدريب والتطوير",
    code: "TRAIN",
    departments: [
      { id: "TRAIN001", name: "قسم التدريب والتطوير", code: "TRAIN001", description: "برامج التدريب والتطوير" },
      { id: "TRAIN002", name: "قسم التدريب التقني", code: "TRAIN002", description: "التدريب على التقنيات الحديثة" },
      { id: "TRAIN003", name: "قسم إدارة الصلاحيات", code: "TRAIN003", description: "إدارة صلاحيات النظام" },
      { id: "TRAIN004", name: "قسم النفقات", code: "TRAIN004", description: "إدارة النفقات والمصروفات" },
      { id: "TRAIN005", name: "قسم الإيرادات", code: "TRAIN005", description: "تحليل وإدارة الإيرادات" }
    ]
  },

  // إدارة المشاريع
  projectManagement: {
    name: "إدارة المشاريع",
    code: "PROJ",
    departments: [
      { id: "PROJ001", name: "إدارة المشاريع", code: "PROJ001", description: "إدارة وتنفيذ المشاريع" },
      { id: "PROJ002", name: "قسم المشاريع الصغيرة", code: "PROJ002", description: "إدارة المشاريع الصغيرة والسريعة" },
      { id: "PROJ003", name: "قسم المشاريع الكبرى", code: "PROJ003", description: "إدارة المشاريع الكبرى والاستراتيجية" },
      { id: "PROJ004", name: "قسم إدارة الوقت", code: "PROJ004", description: "إدارة وتحسين الوقت" },
      { id: "PROJ005", name: "قسم التنسيق", code: "PROJ005", description: "تنسيق العمليات والمشاريع" }
    ]
  },

  // إدارة الوثائق والأرشفة
  documentManagement: {
    name: "إدارة الوثائق والأرشفة",
    code: "DOC",
    departments: [
      { id: "DOC001", name: "قسم الأرشفة الإلكترونية", code: "DOC001", description: "أرشفة الوثائق إلكترونياً" },
      { id: "DOC002", name: "قسم الوثائق", code: "DOC002", description: "إدارة وحفظ الوثائق" },
      { id: "DOC003", name: "قسم الاجتماعات", code: "DOC003", description: "تنظيم وتوثيق الاجتماعات" },
      { id: "DOC004", name: "قسم الجدولة", code: "DOC004", description: "جدولة المواعيد والمهام" },
      { id: "DOC005", name: "قسم الأهداف", code: "DOC005", description: "تحديد ومتابعة الأهداف" }
    ]
  },

  // إدارة الأداء والتحليل
  performanceAnalytics: {
    name: "إدارة الأداء والتحليل",
    code: "ANALYT",
    departments: [
      { id: "ANALYT001", name: "قسم مؤشرات الأداء", code: "ANALYT001", description: "قياس وتحليل مؤشرات الأداء" },
      { id: "ANALYT002", name: "قسم التقارير التحليلية", code: "ANALYT002", description: "إعداد التقارير التحليلية" },
      { id: "ANALYT003", name: "قسم الأنظمة الإدارية", code: "ANALYT003", description: "تطوير الأنظمة الإدارية" },
      { id: "ANALYT004", name: "قسم البرمجة الداخلية", code: "ANALYT004", description: "تطوير البرمجيات الداخلية" },
      { id: "ANALYT005", name: "قسم واجهات الإدارة", code: "ANALYT005", description: "تصميم واجهات الإدارة" }
    ]
  },

  // إدارة التقنيات المتقدمة
  advancedTechnology: {
    name: "إدارة التقنيات المتقدمة",
    code: "ADVTECH",
    departments: [
      { id: "ADVTECH001", name: "قسم تصميم النماذج", code: "ADVTECH001", description: "تصميم النماذج والقوالب" },
      { id: "ADVTECH002", name: "قسم UX/UI الداخلي", code: "ADVTECH002", description: "تجربة المستخدم وواجهات الاستخدام" },
      { id: "ADVTECH003", name: "قسم التحسين المستمر", code: "ADVTECH003", description: "تحسين مستمر للأنظمة" },
      { id: "ADVTECH004", name: "قسم المراقبة الذكية", code: "ADVTECH004", description: "مراقبة ذكية للأنظمة" },
      { id: "ADVTECH005", name: "قسم إنترنت الأشياء الإداري", code: "ADVTECH005", description: "تطبيقات إنترنت الأشياء" }
    ]
  },

  // إدارة البيانات والذكاء الاصطناعي
  dataIntelligence: {
    name: "إدارة البيانات والذكاء الاصطناعي",
    code: "DATA",
    departments: [
      { id: "DATA001", name: "قسم تحليل البيانات الإدارية", code: "DATA001", description: "تحليل البيانات الإدارية" },
      { id: "DATA002", name: "قسم دعم القرارات", code: "DATA002", description: "دعم اتخاذ القرارات" },
      { id: "DATA003", name: "قسم إدارة التغيير", code: "DATA003", description: "إدارة التغيير والتطوير" },
      { id: "DATA004", name: "قسم التطوير المؤسسي", code: "DATA004", description: "تطوير المؤسسة والنمو" },
      { id: "DATA005", name: "قسم السجلات", code: "DATA005", description: "إدارة السجلات والمحفوظات" }
    ]
  },

  // إدارة المسؤولية الاجتماعية والحوكمة
  governanceSocial: {
    name: "إدارة المسؤولية الاجتماعية والحوكمة",
    code: "GOV",
    departments: [
      { id: "GOV001", name: "قسم الشفافية", code: "GOV001", description: "ضمان الشفافية والمساءلة" },
      { id: "GOV002", name: "قسم المسؤولية الاجتماعية", code: "GOV002", description: "المسؤولية الاجتماعية للمؤسسة" },
      { id: "GOV003", name: "قسم الأمن الإداري", code: "GOV003", description: "الأمن الإداري والحماية" },
      { id: "GOV004", name: "قسم الحوكمة", code: "GOV004", description: "الحوكمة والرقابة المؤسسية" },
      { id: "GOV005", name: "قسم الإدارة الذكية", code: "GOV005", description: "الإدارة الذكية والمبتكرة" }
    ]
  },

  // إدارة الذكاء المؤسسي
  institutionalIntelligence: {
    name: "إدارة الذكاء المؤسسي",
    code: "INTEL",
    departments: [
      { id: "INTEL001", name: "قسم الذكاء المؤسسي", code: "INTEL001", description: "تطبيق الذكاء في المؤسسة" },
      { id: "INTEL002", name: "قسم تقارير الذكاء الاصطناعي", code: "INTEL002", description: "تقارير مدعومة بالذكاء الاصطناعي" },
      { id: "INTEL003", name: "قسم تحليل الأداء البشري", code: "INTEL003", description: "تحليل أداء الموظفين" },
      { id: "INTEL004", name: "قسم الإنتاجية", code: "INTEL004", description: "قياس وتحسين الإنتاجية" },
      { id: "INTEL005", name: "قسم إدارة الفرق", code: "INTEL005", description: "إدارة فرق العمل بكفاءة" }
    ]
  },

  // إدارة المكاتب والمرافق
  facilitiesManagement: {
    name: "إدارة المكاتب والمرافق",
    code: "FACIL",
    departments: [
      { id: "FACIL001", name: "قسم إدارة المكاتب", code: "FACIL001", description: "إدارة المكاتب والمساحات" },
      { id: "FACIL002", name: "قسم إدارة الاجتماعات", code: "FACIL002", description: "تنظيم الاجتماعات والمؤتمرات" },
      { id: "FACIL003", name: "قسم إدارة العمل عن بعد", code: "FACIL003", description: "دعم العمل عن بعد" },
      { id: "FACIL004", name: "قسم إدارة الفروع", code: "FACIL004", description: "إدارة الفروع والمكاتب الفرعية" },
      { id: "FACIL005", name: "قسم إدارة الشراكات", code: "FACIL005", description: "إدارة الشراكات والتعاون" }
    ]
  },

  // إدارة التحليل المتقدم
  advancedAnalytics: {
    name: "إدارة التحليل المتقدم",
    code: "ADVANAL",
    departments: [
      { id: "ADVANAL001", name: "قسم التحليل الإداري المتقدم", code: "ADVANAL001", description: "تحليل متقدم للبيانات الإدارية" },
      { id: "ADVANAL002", name: "قسم الأرشفة الذكية", code: "ADVANAL002", description: "أرشفة ذكية للوثائق" },
      { id: "ADVANAL003", name: "قسم مراقبة الجودة الإدارية", code: "ADVANAL003", description: "مراقبة جودة العمليات الإدارية" },
      { id: "ADVANAL004", name: "قسم التحكم الداخلي", code: "ADVANAL004", description: "التحكم والمراقبة الداخلية" },
      { id: "ADVANAL005", name: "قسم التشغيل الإداري", code: "ADVANAL005", description: "العمليات التشغيلية الإدارية" }
    ]
  },

  // إدارة التقارير والأتمتة
  reportsAutomation: {
    name: "إدارة التقارير والأتمتة",
    code: "REPORTS",
    departments: [
      { id: "REPORTS001", name: "قسم التقارير الآلية", code: "REPORTS001", description: "أتمتة إعداد التقارير" },
      { id: "REPORTS002", name: "قسم الذكاء الإحصائي", code: "REPORTS002", description: "الإحصاءات والتحليلات الذكية" },
      { id: "REPORTS003", name: "قسم إدارة البيانات المؤسسية", code: "REPORTS003", description: "إدارة البيانات المؤسسية" },
      { id: "REPORTS004", name: "قسم إدارة العمليات", code: "REPORTS004", description: "إدارة العمليات اليومية" },
      { id: "REPORTS005", name: "قسم إدارة الشكاوى الإدارية", code: "REPORTS005", description: "إدارة الشكاوى والاقتراحات" }
    ]
  },

  // إدارة اللوائح والإجراءات
  regulationsProcedures: {
    name: "إدارة اللوائح والإجراءات",
    code: "REGUL",
    departments: [
      { id: "REGUL001", name: "قسم تطوير اللوائح", code: "REGUL001", description: "تطوير وتحديث اللوائح" },
      { id: "REGUL002", name: "قسم الإجراءات", code: "REGUL002", description: "توحيد وتوثيق الإجراءات" },
      { id: "REGUL003", name: "قسم تنظيم المهام", code: "REGUL003", description: "تنظيم وتوزيع المهام" },
      { id: "REGUL004", name: "قسم مراقبة النظام الإداري", code: "REGUL004", description: "مراقبة النظام الإداري" },
      { id: "REGUL005", name: "قسم تكامل الأقسام", code: "REGUL005", description: "تكامل وتنسيق الأقسام" }
    ]
  },

  // إدارة الوقت والكفاءة
  timeEfficiency: {
    name: "إدارة الوقت والكفاءة",
    code: "TIME",
    departments: [
      { id: "TIME001", name: "قسم مراقبة الوقت", code: "TIME001", description: "مراقبة وتحسين استخدام الوقت" },
      { id: "TIME002", name: "قسم الكفاءة التشغيلية", code: "TIME002", description: "تحسين الكفاءة التشغيلية" },
      { id: "TIME003", name: "قسم الذكاء المؤسسي التنبؤي", code: "TIME003", description: "التنبؤ بالاحتياجات المستقبلية" },
      { id: "TIME004", name: "قسم اتخاذ القرار الذكي", code: "TIME004", description: "دعم اتخاذ القرارات الذكية" },
      { id: "TIME005", name: "قسم تحليل الاتجاهات الإدارية", code: "TIME005", description: "تحليل اتجاهات الأداء الإداري" }
    ]
  },

  // إدارة النمذجة والأتمتة
  modelingAutomation: {
    name: "إدارة النمذجة والأتمتة",
    code: "MODEL",
    departments: [
      { id: "MODEL001", name: "قسم نمذجة العمليات", code: "MODEL001", description: "نمذجة وتحسين العمليات" },
      { id: "MODEL002", name: "قسم الإدارة الآلية", code: "MODEL002", description: "أتمتة الإجراءات الإدارية" },
      { id: "MODEL003", name: "قسم الذكاء الاصطناعي الإداري", code: "MODEL003", description: "تطبيق الذكاء الاصطناعي في الإدارة" }
    ]
  },

  // إدارة الشؤون القانونية والمراسلات
  legalCorrespondence: {
    name: "إدارة الشؤون القانونية والمراسلات",
    code: "LEGAL",
    departments: [
      { id: "LEGAL001", name: "إدارة الشؤون القانونية", code: "LEGAL001", description: "الشؤون القانونية والامتثال" },
      { id: "LEGAL002", name: "إدارة المراسلات", code: "LEGAL002", description: "إدارة المراسلات الرسمية" },
      { id: "LEGAL003", name: "إدارة العقود", code: "LEGAL003", description: "صياغة وإدارة العقود" },
      { id: "LEGAL004", name: "إدارة التوريد", code: "LEGAL004", description: "إدارة عمليات التوريد" },
      { id: "LEGAL005", name: "إدارة الخدمات اللوجستية", code: "LEGAL005", description: "إدارة الخدمات اللوجستية" }
    ]
  },

  // إدارة التخطيط والاستراتيجية
  strategicPlanning: {
    name: "إدارة التخطيط والاستراتيجية",
    code: "STRAT",
    departments: [
      { id: "STRAT001", name: "إدارة التخطيط الاستراتيجي", code: "STRAT001", description: "التخطيط الاستراتيجي طويل المدى" },
      { id: "STRAT002", name: "إدارة التحليل والإحصاء", code: "STRAT002", description: "تحليل البيانات والإحصاءات" }
    ]
  }
};

// دمج جميع الأقسام
export const ALL_DEPARTMENTS = {
  ...GENERAL_MANAGEMENT_DEPARTMENTS
};

// أنواع البيانات للأقسام
export interface Department {
  id: string;
  name: string;
  code: string;
  description: string;
  category?: string;
  parentDepartment?: string;
  manager?: string;
  employeeCount?: number;
  budget?: number;
  status: 'active' | 'inactive' | 'under_review';
  createdAt: string;
  updatedAt: string;
}

export interface DepartmentCategory {
  name: string;
  code: string;
  departments: Department[];
}

// دوال مساعدة للتعامل مع الأقسام
export const getAllDepartments = (): Department[] => {
  return Object.values(GENERAL_MANAGEMENT_DEPARTMENTS).flatMap(category =>
    category.departments.map(dept => ({
      ...dept,
      category: category.name,
      status: 'active' as const,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }))
  );
};

export const getDepartmentById = (id: string): Department | undefined => {
  return getAllDepartments().find(dept => dept.id === id);
};

export const getDepartmentsByCategory = (categoryCode: string): Department[] => {
  const category = Object.values(GENERAL_MANAGEMENT_DEPARTMENTS).find(cat => cat.code === categoryCode);
  return category ? category.departments.map(dept => ({
    ...dept,
    category: category.name,
    status: 'active' as const,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  })) : [];
};

export const getDepartmentCategories = () => {
  return Object.values(GENERAL_MANAGEMENT_DEPARTMENTS);
};
