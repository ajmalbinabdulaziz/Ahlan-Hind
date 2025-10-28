import { useLocale } from 'next-intl';

/**
 * Utility function to get RTL-aware classes
 * Returns classes that work correctly in both LTR and RTL layouts
 */
export function useRTLClasses() {
  const locale = useLocale();
  const isRTL = locale === 'ar';

  return {
    isRTL,
    // Text alignment
    textStart: isRTL ? 'text-right' : 'text-left',
    textEnd: isRTL ? 'text-left' : 'text-right',
    
    // Flex justify
    justifyStart: isRTL ? 'justify-end' : 'justify-start',
    justifyEnd: isRTL ? 'justify-start' : 'justify-end',
    
    // Padding logical properties (using start/end)
    ps: (size: string) => isRTL ? `pr-${size}` : `pl-${size}`,
    pe: (size: string) => isRTL ? `pl-${size}` : `pr-${size}`,
    
    // Margin logical properties
    ms: (size: string) => isRTL ? `mr-${size}` : `ml-${size}`,
    me: (size: string) => isRTL ? `ml-${size}` : `mr-${size}`,
    
    // Position (inset) logical properties
    insetStart: (size: string) => isRTL ? `right-${size}` : `left-${size}`,
    insetEnd: (size: string) => isRTL ? `left-${size}` : `right-${size}`,
    
    // Space utilities
    spaceX: (size: string) => isRTL ? `space-x-reverse` : '',
  };
}

/**
 * Server-side utility for getting RTL-aware classes
 */
export function getRTLClasses(locale: string) {
  const isRTL = locale === 'ar';

  return {
    isRTL,
    textStart: isRTL ? 'text-right' : 'text-left',
    textEnd: isRTL ? 'text-left' : 'text-right',
    justifyStart: isRTL ? 'justify-end' : 'justify-start',
    justifyEnd: isRTL ? 'justify-start' : 'justify-end',
  };
}

