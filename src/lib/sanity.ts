import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../sanity/env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to true if you want to use CDN
})

// Helper function to get localized content
export async function getLocalizedContent<T>(
  query: string,
  locale: 'en' | 'ar',
  params?: Record<string, any>
): Promise<T> {
  return await client.fetch(query, { ...params, locale })
}

// Helper function to get all translations for a document
export async function getAllTranslations<T>(
  query: string,
  params?: Record<string, any>
): Promise<T> {
  return await client.fetch(query, params)
}

// Helper function to create a localized GROQ query
export function createLocalizedQuery(baseQuery: string, locale: 'en' | 'ar'): string {
  return `${baseQuery} {
    ...,
    "title": title.${locale},
    "body": body.${locale},
    "description": description.${locale},
    "price": price.${locale},
    "alt": mainImage.alt.${locale}
  }`
}

// Helper function to get all locales for a document
export function getAllLocalesQuery(baseQuery: string): string {
  return `${baseQuery} {
    ...,
    "title": title,
    "body": body,
    "description": description,
    "price": price,
    "alt": mainImage.alt
  }`
}
