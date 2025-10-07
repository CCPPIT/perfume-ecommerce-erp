// Utility function for consistent date formatting in SSR environments
export const formatDate = (dateString: string, locale: string = 'ar-SA'): string => {
  try {
    const date = new Date(dateString);

    // For Arabic locale, we need to handle the Islamic calendar properly
    if (locale === 'ar-SA') {
      return date.toLocaleDateString('ar-SA', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        calendar: 'islamic-umalqura' // Use Islamic calendar for Arabic locale
      });
    }

    // For other locales, use standard Gregorian calendar
    return date.toLocaleDateString(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  } catch (error) {
    console.error('Error formatting date:', error);
    return dateString; // Fallback to original string if formatting fails
  }
};

// Alternative function that always uses Gregorian calendar (more compatible with SSR)
export const formatDateGregorian = (dateString: string, locale: string = 'ar-SA'): string => {
  try {
    const date = new Date(dateString);

    return date.toLocaleDateString(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      calendar: 'gregory' // Explicitly use Gregorian calendar
    });
  } catch (error) {
    console.error('Error formatting date:', error);
    return dateString;
  }
};

// Function to format relative time (e.g., "منذ يومين", "قبل ساعة")
export const formatRelativeTime = (dateString: string): string => {
  try {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diffInSeconds < 60) return 'الآن';
    if (diffInSeconds < 3600) return `قبل ${Math.floor(diffInSeconds / 60)} دقيقة`;
    if (diffInSeconds < 86400) return `قبل ${Math.floor(diffInSeconds / 3600)} ساعة`;
    if (diffInSeconds < 604800) return `قبل ${Math.floor(diffInSeconds / 86400)} يوم`;

    return formatDateGregorian(dateString);
  } catch (error) {
    console.error('Error formatting relative time:', error);
    return formatDateGregorian(dateString);
  }
};
