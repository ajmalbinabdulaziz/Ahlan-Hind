# Content Localization Guide for Ahlan-Hind

This guide explains how to use the content localization setup in your Sanity CMS with English and Arabic support.

## Overview

The localization setup includes:
- Sanity document internationalization plugin
- Next.js internationalization with next-intl
- React hooks and components for managing localized content
- Structured content organization by locale

## Setup Components

### 1. Sanity Configuration
- **Document Internationalization Plugin**: Configured in `sanity.config.js`
- **Supported Languages**: English (en) and Arabic (ar)
- **Schema Types**: post, category, packages, gallery, newsletter

### 2. Schema Structure
All content types now support internationalization with the following pattern:
```javascript
{
  title: {
    en: "English Title",
    ar: "العنوان العربي"
  },
  body: {
    en: [...], // English block content
    ar: [...]  // Arabic block content
  }
}
```

### 3. React Hooks and Components
- `useLocalizedContent`: Hook for getting localized text content
- `useLocalizedBlockContent`: Hook for getting localized block content
- `LocalizedText`: Component for rendering localized text
- `LocalizedBlockContent`: Component for rendering localized block content

## Usage Examples

### 1. Fetching Localized Content

```typescript
import { client } from '../lib/sanity'
import { postQueries } from '../lib/queries'

// Fetch posts in English
const englishPosts = await client.fetch(postQueries.getAll('en'))

// Fetch posts in Arabic
const arabicPosts = await client.fetch(postQueries.getAll('ar'))

// Fetch a specific post by slug
const post = await client.fetch(postQueries.getBySlug('my-post-slug', 'en'))
```

### 2. Using React Hooks

```tsx
import { useLocalizedContent } from '../hooks/useLocalizedContent'

function PostTitle({ post }) {
  const title = useLocalizedContent(post.title)
  return <h1>{title}</h1>
}
```

### 3. Using Components

```tsx
import { LocalizedText, LocalizedBlockContent } from '../components/LocalizedContent'

function Post({ post }) {
  return (
    <article>
      <LocalizedText content={post.title} className="text-2xl font-bold" />
      <LocalizedBlockContent content={post.body} className="prose" />
    </article>
  )
}
```

### 4. Language Switching

```tsx
import { LanguageSwitcher } from '../components/LanguageSwitcher'

function Header() {
  return (
    <header>
      <LanguageSwitcher className="ml-auto" />
    </header>
  )
}
```

## Content Management

### 1. Creating Content in Sanity Studio
1. Go to `/studio` in your browser
2. Navigate to "English Content" or "Arabic Content" sections
3. Create new documents with localized fields
4. Fill in both English and Arabic versions of your content

### 2. Content Structure
- **Title**: Object with `en` and `ar` properties
- **Body**: Object with `en` and `ar` properties (block content)
- **Description**: Object with `en` and `ar` properties
- **Image Alt Text**: Object with `en` and `ar` properties

### 3. Slug Generation
Slugs are automatically generated from the English title by default. You can customize this in the schema configuration.

## Best Practices

### 1. Content Creation
- Always provide both English and Arabic versions
- Use consistent terminology across languages
- Consider cultural differences in content

### 2. Fallback Strategy
- The system falls back to English if Arabic content is missing
- You can customize fallback behavior in the hooks

### 3. Performance
- Use the localized queries to fetch only the content you need
- Consider caching strategies for better performance

### 4. SEO
- Ensure URLs include locale information
- Use proper meta tags for each language
- Consider hreflang attributes for search engines

## RTL Support

The setup includes RTL (Right-to-Left) support for Arabic content:
- Use the `RTLanguageSwitcher` component for RTL-aware language switching
- CSS classes are available for RTL styling
- Consider RTL layout when designing components

## Troubleshooting

### Common Issues
1. **Missing translations**: Check if both `en` and `ar` properties are filled
2. **Fallback not working**: Verify the fallback logic in hooks
3. **RTL layout issues**: Check CSS direction properties

### Debug Tips
- Use the Sanity Vision plugin to test queries
- Check browser developer tools for missing translations
- Verify locale routing in Next.js

## File Structure

```
src/
├── components/
│   ├── LocalizedContent.tsx      # Localized content components
│   ├── LanguageSwitcher.tsx      # Language switching components
│   └── LocalizedPostCard.tsx     # Example localized component
├── hooks/
│   └── useLocalizedContent.ts    # Localization hooks
├── lib/
│   ├── sanity.ts                 # Sanity client configuration
│   └── queries.ts                # Localized GROQ queries
├── sanity/
│   ├── schemaTypes/              # Updated schema types
│   └── structure.js              # Updated studio structure
└── i18n/                         # Next.js internationalization config
```

## Next Steps

1. Create sample content in both languages
2. Test the language switching functionality
3. Customize the UI components for your design
4. Set up proper SEO meta tags
5. Consider adding more languages if needed

For more information, refer to:
- [Sanity Document Internationalization](https://www.sanity.io/docs/document-internationalization)
- [Next.js Internationalization](https://nextjs.org/docs/advanced-features/i18n)
- [next-intl Documentation](https://next-intl-docs.vercel.app/)
