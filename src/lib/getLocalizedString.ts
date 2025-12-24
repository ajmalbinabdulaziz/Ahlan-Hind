export function getLocalizedString(value: unknown, locale: 'en' | 'ar') {
  if (typeof value === 'string') return value
  if (value == null) return ''
  if (typeof value === 'object') {
    const obj = value as Record<string, any>
    return (obj[locale] ?? obj.en ?? obj.ar ?? String(obj)) as string
  }
  return String(value)
}