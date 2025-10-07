// تبويب المنتجات المتقدم - إدارة البخور ومعطرات الجو
function ProductsTab() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('جميع الفئات');
  const [showFilters, setShowFilters] = useState(false);

  const incenseProducts = [
    {
      id: 1,
      name: 'بخور العود الفاخر',
      brand: 'الشرقية',
      category: 'البخور العودي',
      price: '120 ريال',
      stock: 156,
      sales: 2340,
      rating: 4.8,
      status: 'متوفر',
      image: '🕯️'
    },
    {
      id: 2,
      name: 'معطر جو اللافندر',
      brand: 'فريش هوم',
      category: 'معطرات الجو بالرذاذ',
      price: '85 ريال',
      stock: 234,
      sales: 3120,
      rating: 4.7,
      status: 'متوفر',
      image: '💜'
    },
    {
      id: 3,
      name: 'بخور المسك الأبيض',
      brand: 'الطائف',
      category: 'البخور المسكي',
      price: '95 ريال',
      stock: 189,
      sales: 1987,
      rating: 4.9,
      status: 'متوفر',
      image: '🤍'
    },
    {
      id: 4,
      name: 'معطر جو بالورد',
      brand: 'هوم سنت',
      category: 'معطرات الجو بالرذاذ',
      price: '65 ريال',
      stock: 345,
      sales: 2890,
      rating: 4.6,
      status: 'متوفر',
      image: '🌹'
    },
    {
      id: 5,
      name: 'بخور العشبي الطبيعي',
      brand: 'ناتشرال إنسنس',
      category: 'البخور العشبي',
      price: '75 ريال',
      stock: 123,
      sales: 1456,
      rating: 4.5,
      status: 'متوفر',
      image: '🌿'
    },
    {
      id: 6,
      name: 'معطر جل للجو',
      brand: 'جل فريش',
      category: 'معطرات الجو بالجل',
      price: '45 ريال',
      stock: 456,
      sales: 3456,
      rating: 4.7,
      status: 'متوفر',
      image: '🧴'
    }
  ];

  const categories = [
    'جميع الفئات',
    'البخور العودي',
    'معطرات الجو بالرذاذ',
    'البخور المسكي',
    'البخور العشبي',
    'معطرات الجو بالجل'
  ];

  const filteredProducts = incenseProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'جميع الفئات' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center">
        <div className="flex items-center gap-3">
          <TikTokButton size="lg" className="bg-amber-600 hover:bg-amber-700">
            <Plus className="w-5 h-5 mr-2" />
            إضافة منتج جديد
          </TikTokButton>
          <TikTokButton variant="outline" size="lg">
            <Download className="w-5 h-5 mr-2" />
            تصدير البيانات
          </TikTokButton>
        </div>

        <div className="flex items-center gap-3">
          <TikTokButton
            variant="outline"
            size="sm"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter className="w-4 h-4 mr-2" />
            تصفية
          </TikTokButton>
          <div className="relative">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <TikTokInput
              placeholder="البحث في المنتجات..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pr-10 w-64"
            />
          </div>
        </div>
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                الفئة
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                حالة المخزون
              </label>
              <select className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                <option>جميع الحالات</option>
                <option>متوفر</option>
                <option>منخفض المخزون</option>
                <option>نفذ المخزون</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                تقييم العملاء
              </label>
              <select className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                <option>جميع التقييمات</option>
                <option>5 نجوم</option>
                <option>4 نجوم فما فوق</option>
                <option>3 نجوم فما فوق</option>
              </select>
            </div>

            <div className="flex items-end">
              <TikTokButton variant="outline" className="w-full">
                تطبيق التصفية
              </TikTokButton>
            </div>
          </div>
        </motion.div>
      )}

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6"
          >
            {/* Product Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center text-2xl">
                  {product.image}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {product.brand}
                  </p>
                </div>
              </div>

              <TikTokBadge className={
                product.status === 'متوفر' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
              }>
                {product.status}
              </TikTokBadge>
            </div>

            {/* Product Details */}
            <div className="space-y-3 mb-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 dark:text-gray-400">الفئة:</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {product.category}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 dark:text-gray-400">السعر:</span>
                <span className="text-sm font-bold text-amber-600 dark:text-amber-400">
                  {product.price}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 dark:text-gray-400">المخزون:</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {product.stock} وحدة
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 dark:text-gray-400">المبيعات:</span>
                <span className="text-sm font-medium text-green-600 dark:text-green-400">
                  {product.sales} مبيعة
                </span>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {product.rating}
                  </span>
                </div>
                <TikTokProgress value={product.rating * 20} max={100} className="flex-1 h-2" />
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <TikTokButton size="sm" className="flex-1">
                <Eye className="w-4 h-4 mr-1" />
                عرض
              </TikTokButton>
              <TikTokButton variant="outline" size="sm" className="flex-1">
                <Edit className="w-4 h-4 mr-1" />
                تعديل
              </TikTokButton>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Summary Stats */}
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-amber-600 dark:text-amber-400 mb-1">
              {filteredProducts.length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              منتج معروض
            </div>
          </div>

          <div className="text-center">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">
              {filteredProducts.reduce((sum, product) => sum + product.stock, 0)}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              إجمالي المخزون
            </div>
          </div>

          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">
              {filteredProducts.reduce((sum, product) => sum + product.sales, 0)}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              إجمالي المبيعات
            </div>
          </div>

          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-1">
              {(filteredProducts.reduce((sum, product) => sum + product.rating, 0) / filteredProducts.length).toFixed(1)}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              متوسط التقييم
            </div>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center">
        <div className="flex items-center gap-2">
          <TikTokButton variant="outline" size="sm">السابق</TikTokButton>
          <TikTokButton size="sm" className="bg-amber-600 text-white">1</TikTokButton>
          <TikTokButton variant="outline" size="sm">2</TikTokButton>
          <TikTokButton variant="outline" size="sm">3</TikTokButton>
          <TikTokButton variant="outline" size="sm">التالي</TikTokButton>
        </div>
      </div>
    </div>
  );
}
