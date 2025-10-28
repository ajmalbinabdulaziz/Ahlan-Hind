'use client'

import React from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'

interface LanguageSwitcherProps {
  className?: string
}

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const t = useTranslations('Navigation')

  const languages = [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'ar', name: 'Arabic', nativeName: 'العربية' }
  ]

  const handleLanguageChange = (newLocale: string) => {
    // Remove the current locale from the pathname
    const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/'
    
    // Navigate to the new locale
    router.push(`/${newLocale}${pathWithoutLocale}`)
  }

  return (
    <div className={className}>
      <select
        value={locale}
        onChange={(e) => handleLanguageChange(e.target.value)}
        className="px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Select language"
      >
        {languages.map((language) => (
          <option key={language.code} value={language.code}>
            {language.nativeName}
          </option>
        ))}
      </select>
    </div>
  )
}

// Alternative implementation using buttons
export function LanguageSwitcherButtons({ className }: LanguageSwitcherProps) {
  const locale = useLocale()
  const pathname = usePathname()

  const languages = [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'ar', name: 'Arabic', nativeName: 'العربية' }
  ]

  const getLocalizedPath = (newLocale: string) => {
    const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/'
    return `/${newLocale}${pathWithoutLocale}`
  }

  return (
    <div className={`flex gap-2 ${className}`}>
      {languages.map((language) => {
        const isActive = locale === language.code
        const href = getLocalizedPath(language.code)
        
        return (
          <Link
            key={language.code}
            href={href}
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              isActive
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            aria-current={isActive ? 'page' : undefined}
          >
            {language.nativeName}
          </Link>
        )
      })}
    </div>
  )
}

// RTL-aware language switcher
export function RTLanguageSwitcher({ className }: LanguageSwitcherProps) {
  const locale = useLocale()
  const pathname = usePathname()

  const languages = [
    { code: 'en', name: 'English', nativeName: 'English', dir: 'ltr' },
    { code: 'ar', name: 'Arabic', nativeName: 'العربية', dir: 'rtl' }
  ]

  const currentLanguage = languages.find(lang => lang.code === locale)
  const isRTL = currentLanguage?.dir === 'rtl'

  return (
    <div className={`${className} ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <LanguageSwitcher />
    </div>
  )
}
