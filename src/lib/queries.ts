import { groq } from 'next-sanity'

// Base queries for different content types
export const postQueries = {
  // Get all posts with localized content
  getAll: (locale: 'en' | 'ar') => groq`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      author->{
        name
      },
      mainImage,
      categories[]->{
        title,
        slug
      },
      publishedAt,
      body
    }
  `,
  
  // Get a single post by slug with localized content
  getBySlug: (slug: string, locale: 'en' | 'ar') => groq`
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      author->{
        name
      },
      mainImage,
      categories[]->{
        title,
        slug
      },
      publishedAt,
      body
    }
  `,
  
  // Get posts by category with localized content
  getByCategory: (categorySlug: string, locale: 'en' | 'ar') => groq`
    *[_type == "post" && references(*[_type == "category" && slug.current == $categorySlug]._id)] | order(publishedAt desc) {
      _id,
      title,
      slug,
      author->{
        name
      },
      mainImage,
      categories[]->{
        title,
        slug
      },
      publishedAt,
      body
    }
  `
}

export const categoryQueries = {
  // Get all categories with localized content
  getAll: (locale: 'en' | 'ar') => groq`
    *[_type == "category"] | order(title.${locale} asc) {
      _id,
      title,
      slug,
      description
    }
  `,
  
  // Get category by slug with localized content
  getBySlug: (slug: string, locale: 'en' | 'ar') => groq`
    *[_type == "category" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      description
    }
  `
}

export const packageQueries = {
  // Get all packages with localized content
  getAll: (locale: 'en' | 'ar') => groq`
    *[_type == "packages"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      mainImage,
      category,
      publishedAt,
      price,
      body
    }
  `,
  
  // Get package by slug with localized content
  getBySlug: (slug: string, locale: 'en' | 'ar') => groq`
    *[_type == "packages" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      mainImage,
      category,
      publishedAt,
      price,
      body
    }
  `
}

export const galleryQueries = {
  // Get all gallery items with localized content
  getAll: (locale: 'en' | 'ar') => groq`
    *[_type == "gallery"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      mainImage,
      publishedAt
    }
  `,
  
  // Get gallery item by slug with localized content
  getBySlug: (slug: string, locale: 'en' | 'ar') => groq`
    *[_type == "gallery" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      mainImage,
      publishedAt
    }
  `
}

// Helper function to create localized version of any query
export function localizeQuery(query: string, locale: 'en' | 'ar'): string {
  return query.replace(
    /(title|body|description|price|alt)(?!\s*\{)/g,
    `$1.${locale}`
  )
}

// Helper function to get all locales for a document (useful for language switching)
export function getAllLocalesQuery(query: string): string {
  return query.replace(
    /(title|body|description|price|alt)(?!\s*\{)/g,
    '$1'
  )
}
