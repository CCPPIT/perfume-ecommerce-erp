'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { formatDate } from '@/lib/dateUtils';
import { getDepartmentCategories, getAllDepartments, Department } from '@/components/modules/general-management/departments';
import { SidebarLayout } from '@/components/modules/general-management/AdvancedSidebar';

export default function EnhancedGeneralManagementDashboard() {
  const router = useRouter();
  const [currentSection, setCurrentSection] = useState('dashboard');
  const [isDepartmentModalOpen, setIsDepartmentModalOpen] = useState(false);

  // Get data
  const allDepartments = getAllDepartments();
  const categories = getDepartmentCategories();

  // Calculate statistics
  const stats = {
    totalDepartments: allDepartments.length,
    activeDepartments: allDepartments.filter((d: Department) => d.status === 'active').length,
    totalEmployees: allDepartments.reduce((sum: number, d: Department) => sum + (d.employeeCount || 0), 0),
    totalBudget: allDepartments.reduce((sum: number, d: Department) => sum + (d.budget || 0), 0)
  };

  const handleSectionChange = (section: string) => {
    setCurrentSection(section);
  };

  const handleDepartmentSelect = (departmentId: string) => {
    router.push(`/general-management/${departmentId}`);
  };

  return (
    <SidebarLayout
      currentSection={currentSection}
      onSectionChange={handleSectionChange}
    >
      <div className="space-y-8">
        {/* Welcome Section */}
        <div className="text-center py-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            مرحباً بك في نظام الإدارة العامة
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            نظام متكامل لإدارة جميع الأقسام الإدارية في المؤسسة مع إمكانيات متقدمة للمراقبة والتحليل
          </p>
        </div>

        {/* Statistics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-8 text-white text-center">
            <div className="text-4xl font-bold mb-2">{stats.totalDepartments}</div>
            <div className="text-blue-100">إجمالي الأقسام</div>
          </div>

          <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl p-8 text-white text-center">
            <div className="text-4xl font-bold mb-2">{stats.activeDepartments}</div>
            <div className="text-green-100">الأقسام النشطة</div>
          </div>

          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white text-center">
            <div className="text-4xl font-bold mb-2">{stats.totalEmployees.toLocaleString()}</div>
            <div className="text-orange-100">إجمالي الموظفين</div>
          </div>

          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white text-center">
            <div className="text-4xl font-bold mb-2">${(stats.totalBudget / 1000000).toFixed(1)}M</div>
            <div className="text-purple-100">إجمالي الميزانية</div>
          </div>
        </div>

        {/* Department Categories Grid */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            فئات الأقسام الإدارية
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.slice(0, 6).map((category: any, index: number) => {
              const categoryDepts = allDepartments.filter((d: Department) => d.category === category.name);
              const activeDepts = categoryDepts.filter((d: Department) => d.status === 'active').length;

              return (
                <div
                  key={category.code}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                  onClick={() => setCurrentSection(category.code)}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">
                        {category.name.charAt(0)}
                      </span>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {category.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {category.code} • {categoryDepts.length} قسم
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">الأقسام النشطة:</span>
                      <span className="font-medium text-green-600 dark:text-green-400">
                        {activeDepts}/{categoryDepts.length}
                      </span>
                    </div>

                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">إجمالي الموظفين:</span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {categoryDepts.reduce((sum: number, d: Department) => sum + (d.employeeCount || 0), 0)}
                      </span>
                    </div>

                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(activeDepts / categoryDepts.length) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recent Departments */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            الأقسام المضافة مؤخراً
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allDepartments.slice(0, 6).map((department: Department, index: number) => (
              <div
                key={department.id}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => handleDepartmentSelect(department.id)}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold">
                      {department.name.charAt(0)}
                    </span>
                  </div>

                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {department.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {department.code}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">الحالة:</span>
                    <span className={`font-medium ${
                      department.status === 'active'
                        ? 'text-green-600 dark:text-green-400'
                        : 'text-gray-600 dark:text-gray-400'
                    }`}>
                      {department.status === 'active' ? 'نشط' : 'غير نشط'}
                    </span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">تاريخ الإنشاء:</span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      {formatDate(department.createdAt)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* System Features */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            مميزات النظام المتقدمة
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                تحليلات متقدمة
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                مؤشرات أداء شاملة مع تقارير تفاعلية لدعم اتخاذ القرارات الاستراتيجية
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                أمان متقدم
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                نظام أمان شامل مع إدارة الصلاحيات والنسخ الاحتياطي التلقائي
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                تصميم متجاوب
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                تجربة مستخدم مثالية على جميع الأجهزة مع دعم الوضع الليلي بالكامل
              </p>
            </div>
          </div>
        </div>

        {/* Department Creation Modal */}
        {isDepartmentModalOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    إضافة قسم جديد
                  </h2>
                  <button
                    onClick={() => setIsDepartmentModalOpen(false)}
                    className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                  >
                    ✕
                  </button>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        اسم القسم *
                      </label>
                      <input
                        type="text"
                        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                        placeholder="أدخل اسم القسم"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        رمز القسم *
                      </label>
                      <input
                        type="text"
                        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                        placeholder="مثال: DEPT001"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      الفئة *
                    </label>
                    <select className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white" required>
                      <option value="">اختر الفئة</option>
                      {categories.map((category: any) => (
                        <option key={category.code} value={category.name}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex justify-end gap-4">
                    <button
                      type="button"
                      className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                      onClick={() => setIsDepartmentModalOpen(false)}
                    >
                      إلغاء
                    </button>

                    <button
                      type="submit"
                      className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                      onClick={() => {
                        console.log('Creating new department...');
                        setIsDepartmentModalOpen(false);
                      }}
                    >
                      إنشاء القسم
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </SidebarLayout>
  );
}
