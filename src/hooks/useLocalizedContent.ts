import { useMemo } from 'react'
import { useLocale } from 'next-intl'

export interface LocalizedContent {
  en?: string | any
  ar?: string | any
}

export function useLocalizedContent<T extends LocalizedContent>(
  content: T | null | undefined,
  fallbackToEnglish: boolean = true
): string | any {
  const locale = useLocale()

  return useMemo(() => {
    if (!content) return ''

    // Try to get content in current locale
    const localizedContent = content[locale as keyof T]
    
    if (localizedContent) {
      return localizedContent
    }

    // Fallback to English if enabled and current locale is not English
    if (fallbackToEnglish && locale !== 'en') {
      const englishContent = content.en
      if (englishContent) {
        return englishContent
      }
    }

    // Fallback to Arabic if enabled and current locale is not Arabic
    if (fallbackToEnglish && locale !== 'ar') {
      const arabicContent = content.ar
      if (arabicContent) {
        return arabicContent
      }
    }

    // Return first available content
    const availableContent = content.en || content.ar || ''
    return availableContent
  }, [content, locale, fallbackToEnglish])
}

// Hook for getting localized image alt text
export function useLocalizedImageAlt(
  image: { alt?: LocalizedContent } | null | undefined
): string {
  const locale = useLocale()

  if (!image?.alt) return ''

  const localizedAlt = image.alt[locale as keyof LocalizedContent]
  if (localizedAlt) return localizedAlt

  // Fallback to English
  if (locale !== 'en' && image.alt.en) {
    return image.alt.en
  }

  // Fallback to Arabic
  if (locale !== 'ar' && image.alt.ar) {
    return image.alt.ar
  }

  return image.alt.en || image.alt.ar || ''
}

// Hook for getting localized block content
export function useLocalizedBlockContent(
  content: LocalizedContent | null | undefined
): any[] {
  const locale = useLocale()

  if (!content) return []

  const localizedContent = content[locale as keyof LocalizedContent]
  if (localizedContent) return localizedContent

  // Fallback to English
  if (locale !== 'en' && content.en) {
    return content.en
  }

  // Fallback to Arabic
  if (locale !== 'ar' && content.ar) {
    return content.ar
  }

  return content.en || content.ar || []
}
