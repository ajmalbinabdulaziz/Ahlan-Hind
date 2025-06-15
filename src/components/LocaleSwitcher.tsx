'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';

const locales = ['en', 'ar']; // Define your supported locales

export default function LocaleSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();
  const currentLocale = params.locale as string;

  const handleLocaleChange = (newLocale: string) => {
    if (newLocale === currentLocale) return;

    const segments = pathname.split('/');
    segments[1] = newLocale; // assuming locale is at index 1: /en/..., /fr/...

    const newPath = segments.join('/');
    router.replace(newPath);
  };

  return (
    <div className="flex gap-1">
      {locales.map((locale) => (
        <button
          key={locale}
          onClick={() => handleLocaleChange(locale)}
          className={`px-3 py-1 border rounded ${
            locale === currentLocale
              ? 'bg-blue-600 text-white border-blue-600'
              : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-100'
          }`}
        >
          {locale.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
