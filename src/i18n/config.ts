export type Locale = (typeof locales)[number];

// export const locales = ['ar', 'en'] as const;
export const locales = ['en', 'ar'] as const;
export const defaultLocale: Locale = 'ar';