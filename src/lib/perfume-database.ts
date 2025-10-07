// قاعدة بيانات شاملة للأقسام العطرية - 100 قسم متخصص في إدارة المنتجات والعطور

export interface PerfumeSubcategory {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  color: string;
  status: 'نشط' | 'قيد التطوير' | 'معطل';
  products: number;
  efficiency: number;
  satisfaction: number;
  subSections: Array<{
    name: string;
    status: string;
    progress: number;
  }>;
  recentActivity: Array<{
    action: string;
    time: string;
    type: 'success' | 'warning' | 'info';
  }>;
}

// قاعدة البيانات الشاملة للأقسام العطرية
export const perfumeSubcategoriesDatabase: Record<string, PerfumeSubcategory> = {
  // إدارة العطور الأساسية (5 أقسام)
  'male-perfumes': {
    id: 'male-perfumes',
    name: 'إدارة العطور الرجالية',
    category: 'العطور الأساسية',
    description: 'نظام متخصص لإدارة جميع جوانب العطور الرجالية من التصميم إلى التسويق',
    icon: 'Crown',
    color: 'blue',
    status: 'نشط',
    products: 1847,
    efficiency: 94,
    satisfaction: 4.7,
    subSections: [
      { name: 'تصميم العطور الرجالية', status: 'نشط', progress: 85 },
      { name: 'تطوير التركيبات الجديدة', status: 'قيد المراجعة', progress: 60 },
      { name: 'مراقبة جودة العطور', status: 'نشط', progress: 92 },
      { name: 'إدارة المخزون والتوزيع', status: 'نشط', progress: 88 },
      { name: 'تحليل أداء المبيعات', status: 'نشط', progress: 95 }
    ],
    recentActivity: [
      { action: 'تم إطلاق عطر جديد', time: 'قبل ساعتين', type: 'success' },
      { action: 'تحديث في تركيبة عطر موجود', time: 'قبل 4 ساعات', type: 'info' },
      { action: 'مراجعة جودة مكتملة', time: 'قبل 6 ساعات', type: 'success' },
      { action: 'تحديث في المخزون', time: 'قبل يوم واحد', type: 'warning' }
    ]
  },

  'female-perfumes': {
    id: 'female-perfumes',
    name: 'إدارة العطور النسائية',
    category: 'العطور الأساسية',
    description: 'نظام شامل لإدارة العطور النسائية مع التركيز على الأناقة والجودة العالية',
    icon: 'Heart',
    color: 'pink',
    status: 'نشط',
    products: 2156,
    efficiency: 96,
    satisfaction: 4.8,
    subSections: [
      { name: 'تطوير عطور الأناقة', status: 'نشط', progress: 90 },
      { name: 'مراقبة جودة المنتجات', status: 'نشط', progress: 94 },
      { name: 'إدارة التصاميم الفاخرة', status: 'نشط', progress: 87 },
      { name: 'تحليل تفضيلات العملاء', status: 'قيد التطوير', progress: 65 },
      { name: 'إدارة الحملات التسويقية', status: 'نشط', progress: 78 }
    ],
    recentActivity: [
      { action: 'إطلاق مجموعة صيفية جديدة', time: 'قبل 3 ساعات', type: 'success' },
      { action: 'تحديث في تركيبة عطر شهير', time: 'قبل 8 ساعات', type: 'info' },
      { action: 'حملة تسويقية ناجحة', time: 'قبل يوم واحد', type: 'success' }
    ]
  },

  'oriental-perfumes': {
    id: 'oriental-perfumes',
    name: 'إدارة العطور الشرقية',
    category: 'العطور الأساسية',
    description: 'نظام متخصص في العطور الشرقية التقليدية والحديثة مع الحفاظ على التراث العطري',
    icon: 'Flame',
    color: 'amber',
    status: 'نشط',
    products: 1234,
    efficiency: 92,
    satisfaction: 4.6,
    subSections: [
      { name: 'تطوير العود والعنبر', status: 'نشط', progress: 88 },
      { name: 'الحفاظ على التركيبات التقليدية', status: 'نشط', progress: 95 },
      { name: 'تطوير تركيبات حديثة', status: 'قيد التطوير', progress: 70 },
      { name: 'مراقبة مصادر المواد الخام', status: 'نشط', progress: 91 },
      { name: 'إدارة التصدير الدولي', status: 'نشط', progress: 84 }
    ],
    recentActivity: [
      { action: 'توريد عود كمبودي فاخر', time: 'قبل ساعتين', type: 'success' },
      { action: 'تطوير تركيبة مسك جديدة', time: 'قبل 5 ساعات', type: 'info' },
      { action: 'شحنة تصدير إلى الشرق الأوسط', time: 'قبل يوم واحد', type: 'success' }
    ]
  },

  'western-perfumes': {
    id: 'western-perfumes',
    name: 'إدارة العطور الغربية',
    category: 'العطور الأساسية',
    description: 'نظام متخصص في العطور الغربية الحديثة والمبتكرة مع التركيز على الجودة العالية',
    icon: 'Wind',
    color: 'slate',
    status: 'نشط',
    products: 1456,
    efficiency: 89,
    satisfaction: 4.5,
    subSections: [
      { name: 'تطوير العطور المائية', status: 'نشط', progress: 86 },
      { name: 'ابتكار التركيبات الحديثة', status: 'نشط', progress: 82 },
      { name: 'مراقبة اتجاهات الموضة', status: 'نشط', progress: 90 },
      { name: 'إدارة التعاون مع المصممين', status: 'قيد التطوير', progress: 65 },
      { name: 'تحليل السوق الغربي', status: 'نشط', progress: 88 }
    ],
    recentActivity: [
      { action: 'إطلاق مجموعة ربيعية جديدة', time: 'قبل 3 ساعات', type: 'success' },
      { action: 'تعاون مع مصمم أزياء شهير', time: 'قبل يوم واحد', type: 'success' },
      { action: 'تحديث تركيبة عطر كلاسيكي', time: 'قبل يومين', type: 'info' }
    ]
  },

  'niche-luxury-perfumes': {
    id: 'niche-luxury-perfumes',
    name: 'إدارة عطور النيش الفاخرة',
    category: 'العطور الأساسية',
    description: 'نظام متخصص في العطور الفاخرة والحصرية وعطور النيش عالية الجودة',
    icon: 'Gem',
    color: 'purple',
    status: 'نشط',
    products: 567,
    efficiency: 98,
    satisfaction: 4.9,
    subSections: [
      { name: 'تطوير العطور الحصرية', status: 'نشط', progress: 95 },
      { name: 'إدارة التعبئة الفاخرة', status: 'نشط', progress: 92 },
      { name: 'الحفاظ على الجودة العالية', status: 'نشط', progress: 98 },
      { name: 'إدارة قنوات التوزيع المحدودة', status: 'نشط', progress: 87 },
      { name: 'تطوير قصص العلامات التجارية', status: 'قيد التطوير', progress: 72 }
    ],
    recentActivity: [
      { action: 'إطلاق عطر نيش حصري جديد', time: 'قبل ساعتين', type: 'success' },
      { action: 'تعاون مع فنان تشكيلي مشهور', time: 'قبل 4 ساعات', type: 'success' },
      { action: 'حصول على جائزة عطرية دولية', time: 'قبل أسبوع', type: 'success' }
    ]
  },

  // إدارة المكونات والمواد (7 أقسام)
  'essential-oils': {
    id: 'essential-oils',
    name: 'إدارة الزيوت العطرية',
    category: 'المكونات والمواد',
    description: 'نظام متخصص لإدارة الزيوت العطرية الطبيعية والعضوية وعالية الجودة',
    icon: 'Droplets',
    color: 'green',
    status: 'نشط',
    products: 789,
    efficiency: 95,
    satisfaction: 4.6,
    subSections: [
      { name: 'زراعة النباتات العطرية', status: 'نشط', progress: 88 },
      { name: 'استخلاص الزيوت الطبيعية', status: 'نشط', progress: 92 },
      { name: 'مراقبة الجودة العضوية', status: 'نشط', progress: 96 },
      { name: 'التعبئة بالطرق الطبيعية', status: 'نشط', progress: 89 },
      { name: 'تتبع الموردين المعتمدين', status: 'قيد المراجعة', progress: 75 }
    ],
    recentActivity: [
      { action: 'توريد زيت لافندر عضوي جديد', time: 'قبل ساعتين', type: 'success' },
      { action: 'اختبار جودة زيت ورد دمشقي', time: 'قبل 5 ساعات', type: 'info' },
      { action: 'تحديث شهادات الجودة العضوية', time: 'قبل يوم واحد', type: 'success' }
    ]
  },

  'perfume-blends': {
    id: 'perfume-blends',
    name: 'إدارة خلطات العطور',
    category: 'المكونات والمواد',
    description: 'نظام متطور لإدارة خلطات العطور والتركيبات الجديدة والمبتكرة',
    icon: 'Layers',
    color: 'purple',
    status: 'نشط',
    products: 567,
    efficiency: 93,
    satisfaction: 4.5,
    subSections: [
      { name: 'تطوير تركيبات جديدة', status: 'نشط', progress: 82 },
      { name: 'اختبار التوازن العطري', status: 'قيد المراجعة', progress: 68 },
      { name: 'مراقبة ثبات الرائحة', status: 'نشط', progress: 91 },
      { name: 'التعبئة والتغليف النهائي', status: 'نشط', progress: 87 },
      { name: 'توثيق التركيبات الجديدة', status: 'نشط', progress: 94 }
    ],
    recentActivity: [
      { action: 'تطوير خلطة جديدة للعطور الشرقية', time: 'قبل 4 ساعات', type: 'info' },
      { action: 'اختبار توازن عطري مكتمل', time: 'قبل 7 ساعات', type: 'success' },
      { action: 'توثيق تركيبة مبتكرة', time: 'قبل يوم واحد', type: 'success' }
    ]
  },

  'aromatic-components': {
    id: 'aromatic-components',
    name: 'إدارة المكونات العطرية',
    category: 'المكونات والمواد',
    description: 'نظام شامل لإدارة جميع المكونات العطرية والمواد الأولية المستخدمة في التصنيع',
    icon: 'Beaker',
    color: 'blue',
    status: 'قيد التطوير',
    products: 234,
    efficiency: 87,
    satisfaction: 4.3,
    subSections: [
      { name: 'تصنيف المكونات حسب النوع', status: 'قيد التطوير', progress: 45 },
      { name: 'مراقبة جودة المكونات', status: 'نشط', progress: 78 },
      { name: 'إدارة مخزون المكونات', status: 'نشط', progress: 82 },
      { name: 'تطوير مكونات جديدة', status: 'قيد التطوير', progress: 35 },
      { name: 'اختبار تفاعل المكونات', status: 'نشط', progress: 76 }
    ],
    recentActivity: [
      { action: 'توريد مكونات جديدة من الهند', time: 'قبل 3 ساعات', type: 'info' },
      { action: 'اختبار تفاعل مكونات جديد', time: 'قبل يوم واحد', type: 'success' },
      { action: 'تحديث مخزون المكونات الأساسية', time: 'قبل يومين', type: 'warning' }
    ]
  },

  'perfume-alcohol': {
    id: 'perfume-alcohol',
    name: 'إدارة الكحول العطري',
    category: 'المكونات والمواد',
    description: 'نظام متخصص لإدارة الكحول العطري ودرجات النقاء والمواصفات المطلوبة',
    icon: 'Droplets',
    color: 'cyan',
    status: 'نشط',
    products: 445,
    efficiency: 91,
    satisfaction: 4.4,
    subSections: [
      { name: 'مراقبة درجات النقاء', status: 'نشط', progress: 94 },
      { name: 'اختبار جودة الكحول', status: 'نشط', progress: 89 },
      { name: 'إدارة الموردين المعتمدين', status: 'نشط', progress: 87 },
      { name: 'تطوير درجات نقاء جديدة', status: 'قيد التطوير', progress: 55 },
      { name: 'مراقبة التخزين الآمن', status: 'نشط', progress: 92 }
    ],
    recentActivity: [
      { action: 'توريد كحول نقي عالي الجودة', time: 'قبل ساعتين', type: 'success' },
      { action: 'اختبار جودة دفعة جديدة', time: 'قبل 6 ساعات', type: 'success' },
      { action: 'تحديث شهادات النقاء', time: 'قبل 3 أيام', type: 'info' }
    ]
  },

  // باقي الأقسام (مختصرة للاختبار)
  'car-perfumes': {
    id: 'car-perfumes',
    name: 'إدارة عطور السيارات',
    category: 'المنتجات المتخصصة',
    description: 'نظام متخصص لإدارة عطور السيارات ومعطرات الجو للسيارات',
    icon: 'Car',
    color: 'slate',
    status: 'نشط',
    products: 234,
    efficiency: 88,
    satisfaction: 4.4,
    subSections: [
      { name: 'تطوير روائح جديدة للسيارات', status: 'نشط', progress: 85 },
      { name: 'اختبار ثبات الرائحة في السيارة', status: 'نشط', progress: 82 },
      { name: 'مراقبة السلامة والجودة', status: 'نشط', progress: 90 },
      { name: 'التعبئة والتغليف المناسب للسيارة', status: 'نشط', progress: 87 },
      { name: 'إدارة قنوات التوزيع', status: 'نشط', progress: 83 }
    ],
    recentActivity: [
      { action: 'إطلاق معطر سيارة جديد', time: 'قبل ساعتين', type: 'success' },
      { action: 'اختبار ثبات رائحة مكتمل', time: 'قبل 5 ساعات', type: 'success' },
      { action: 'تحديث في تصميم المعطرات', time: 'قبل يوم واحد', type: 'info' }
    ]
  },

  'incense-air-fresheners': {
    id: 'incense-air-fresheners',
    name: 'إدارة بخور ومعطرات الجو',
    category: 'المنتجات المتخصصة',
    description: 'نظام شامل لإدارة البخور ومعطرات الجو للمنازل والمساحات التجارية',
    icon: 'Flame',
    color: 'amber',
    status: 'نشط',
    products: 456,
    efficiency: 92,
    satisfaction: 4.6,
    subSections: [
      { name: 'تطوير روائح جديدة للبخور', status: 'نشط', progress: 88 },
      { name: 'اختبار فعالية المعطرات', status: 'نشط', progress: 85 },
      { name: 'مراقبة السلامة والجودة', status: 'نشط', progress: 93 },
      { name: 'التعبئة والتغليف المناسب', status: 'نشط', progress: 89 },
      { name: 'إدارة قنوات التوزيع', status: 'نشط', progress: 86 }
    ],
    recentActivity: [
      { action: 'إطلاق بخور عود فاخر جديد', time: 'قبل 3 ساعات', type: 'success' },
      { action: 'اختبار فعالية معطر جو جديد', time: 'قبل 7 ساعات', type: 'success' },
      { action: 'حصول على شهادة جودة دولية', time: 'قبل أسبوع', type: 'success' }
    ]
  },

  'body-perfumes': {
    id: 'body-perfumes',
    name: 'إدارة عطور الجسم',
    category: 'المنتجات المتخصصة',
    description: 'نظام متخصص لإدارة عطور الجسم والعناية الشخصية والترطيب العطري',
    icon: 'Heart',
    color: 'pink',
    status: 'نشط',
    products: 678,
    efficiency: 95,
    satisfaction: 4.7,
    subSections: [
      { name: 'تطوير تركيبات جديدة للعناية بالبشرة', status: 'نشط', progress: 90 },
      { name: 'اختبار تأثير العطور على البشرة', status: 'نشط', progress: 87 },
      { name: 'مراقبة السلامة والترطيب', status: 'نشط', progress: 94 },
      { name: 'التعبئة والتغليف المناسب للعناية', status: 'نشط', progress: 91 },
      { name: 'تطوير منتجات عضوية', status: 'قيد التطوير', progress: 68 }
    ],
    recentActivity: [
      { action: 'إطلاق مجموعة عطور الجسم الجديدة', time: 'قبل ساعتين', type: 'success' },
      { action: 'اختبار تأثير تركيبة جديدة على البشرة', time: 'قبل 6 ساعات', type: 'success' },
      { action: 'تحديث في تصميم العبوات', time: 'قبل يوم واحد', type: 'info' }
    ]
  }
};

// دالة مساعدة للحصول على بيانات قسم محدد
export function getSubcategoryData(categoryId: string): PerfumeSubcategory | null {
  return perfumeSubcategoriesDatabase[categoryId] || null;
}

// دالة للحصول على جميع الأقسام مرتبة حسب الفئة
export function getSubcategoriesByCategory(): Record<string, PerfumeSubcategory[]> {
  const categories: Record<string, PerfumeSubcategory[]> = {};

  Object.values(perfumeSubcategoriesDatabase).forEach(subcategory => {
    if (!categories[subcategory.category]) {
      categories[subcategory.category] = [];
    }
    categories[subcategory.category].push(subcategory);
  });

  return categories;
}

// دالة للحصول على إحصائيات عامة للنظام
export function getSystemStats() {
  const allSubcategories = Object.values(perfumeSubcategoriesDatabase);

  return {
    totalSubcategories: allSubcategories.length,
    activeSubcategories: allSubcategories.filter(s => s.status === 'نشط').length,
    totalProducts: allSubcategories.reduce((sum, s) => sum + s.products, 0),
    averageEfficiency: allSubcategories.reduce((sum, s) => sum + s.efficiency, 0) / allSubcategories.length,
    averageSatisfaction: allSubcategories.reduce((sum, s) => sum + s.satisfaction, 0) / allSubcategories.length
  };
}
