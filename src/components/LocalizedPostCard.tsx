import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { LocalizedText, LocalizedImageAlt } from './LocalizedContent'
import { useLocalizedContent, useLocalizedImageAlt } from '../hooks/useLocalizedContent'

interface Post {
  _id: string
  title: {
    en?: string
    ar?: string
  }
  slug: {
    current: string
  }
  mainImage?: {
    alt?: {    
      en?: string
      ar?: string
    }
    asset: {
      url: string
    }
  }
  author?: {
    name: string
  }
  publishedAt: string
  categories?: Array<{
    title: {
      en?: string
      ar?: string
    }
    slug: {
      current: string
    }
  }>
}

interface LocalizedPostCardProps {
  post: Post
  locale: 'en' | 'ar'
}

export function LocalizedPostCard({ post, locale }: LocalizedPostCardProps) {
  const title = useLocalizedContent(post.title)
  const altText = useLocalizedImageAlt(post.mainImage)
  
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(locale === 'ar' ? 'ar-SA' : 'en-US')
  }

  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {post.mainImage && (
        <div className="relative h-48 w-full">
          <Image
            src={post.mainImage.asset.url}
            alt={altText}
            fill
            className="object-cover"
          />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
          {post.categories && post.categories.length > 0 && (
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
              {useLocalizedContent(post.categories[0].title)}
            </span>
          )}
          <span>{formatDate(post.publishedAt)}</span>
        </div>
        
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          <Link 
            href={`/${locale}/posts/${post.slug.current}`}
            className="hover:text-blue-600 transition-colors"
          >
            {title}
          </Link>
        </h2>
        
        {post.author && (
          <p className="text-sm text-gray-600">
            By {post.author.name}
          </p>
        )}
      </div>
    </article>
  )
}

// Example usage in a page component
export function PostsList({ posts, locale }: { posts: Post[], locale: 'en' | 'ar' }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <LocalizedPostCard key={post._id} post={post} locale={locale} />
      ))}
    </div>
  )
}
