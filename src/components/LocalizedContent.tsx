import React from 'react'
import { useLocalizedContent, useLocalizedBlockContent } from '../hooks/useLocalizedContent'
import { PortableText } from '@portabletext/react'

interface LocalizedContentProps {
  content: {
    en?: string | any
    ar?: string | any
  } | null | undefined
  fallbackToEnglish?: boolean
  className?: string
}

interface LocalizedBlockContentProps {
  content: {
    en?: any[]
    ar?: any[]
  } | null | undefined
  className?: string
  components?: any
}

export function LocalizedText({ 
  content, 
  fallbackToEnglish = true, 
  className 
}: LocalizedContentProps) {
  const localizedContent = useLocalizedContent(content, fallbackToEnglish)

  if (!localizedContent) return null

  return (
    <span className={className}>
      {localizedContent}
    </span>
  )
}

export function LocalizedBlockContent({ 
  content, 
  className, 
  components 
}: LocalizedBlockContentProps) {
  const localizedContent = useLocalizedBlockContent(content)

  if (!localizedContent || localizedContent.length === 0) return null

  return (
    <div className={className}>
      <PortableText 
        value={localizedContent} 
        components={components}
      />
    </div>
  )
}

export function LocalizedImageAlt({ 
  image, 
  fallbackToEnglish = true 
}: { 
  image: { alt?: { en?: string; ar?: string } } | null | undefined
  fallbackToEnglish?: boolean 
}) {
  const { useLocalizedImageAlt } = require('../hooks/useLocalizedContent')
  const altText = useLocalizedImageAlt(image)
  
  return altText
}

// Higher-order component for wrapping any component with localized content
export function withLocalization<P extends object>(
  Component: React.ComponentType<P>,
  contentProp: string
) {
  return function LocalizedComponent(props: P) {
    const localizedProps = {
      ...props,
      [contentProp]: useLocalizedContent(props[contentProp as keyof P])
    }

    return <Component {...localizedProps} />
  }
}
