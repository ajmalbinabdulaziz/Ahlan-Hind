import React from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { LocalizedText, LocalizedBlockContent } from '../../../components/LocalizedContent'
import { LanguageSwitcher } from '../../../components/LanguageSwitcher'

// Sample localized content for demonstration
const sampleContent = {
  title: {
    en: 'Welcome to Ahlan-Hind',
    ar: 'مرحباً بك في أهلان هند'
  },
  description: {
    en: 'This is a demonstration of our localization setup with English and Arabic support.',
    ar: 'هذه هي تجربة لإعداد الترجمة مع دعم اللغة الإنجليزية والعربية.'
  },
  body: {
    en: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'This is a sample block content in English. You can add rich text formatting here.'
          }
        ]
      }
    ],
    ar: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'هذا محتوى نصي تجريبي باللغة العربية. يمكنك إضافة تنسيق نصي غني هنا.'
          }
        ]
      }
    ]
  }
}

export default function LocalizationDemoPage() {
  const t = useTranslations('Navigation')
  const locale = useLocale()
  
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Localization Demo
          </h1>
          <LanguageSwitcher />
        </header>

        {/* Demo Content */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Sample Localized Content
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-2">Title:</h3>
                <LocalizedText 
                  content={sampleContent.title}
                  className="text-xl text-blue-600"
                />
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-2">Description:</h3>
                <LocalizedText 
                  content={sampleContent.description}
                  className="text-gray-600"
                />
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-2">Body Content:</h3>
                <LocalizedBlockContent 
                  content={sampleContent.body}
                  className="prose max-w-none"
                />
              </div>
            </div>
          </div>

          {/* Current Locale Info */}
          <div className="bg-gray-100 rounded-lg p-4">
            <h3 className="text-lg font-medium text-gray-700 mb-2">Current Locale:</h3>
            <p className="text-gray-600">
              Current locale: <span className="font-mono bg-gray-200 px-2 py-1 rounded">{locale}</span>
            </p>
            <p className="text-gray-600">
              Text direction: <span className="font-mono bg-gray-200 px-2 py-1 rounded">
                {locale === 'ar' ? 'RTL (Right-to-Left)' : 'LTR (Left-to-Right)'}
              </span>
            </p>
          </div>

          {/* Instructions */}
          <div className="mt-8 bg-blue-50 rounded-lg p-6">
            <h3 className="text-lg font-medium text-blue-800 mb-3">How to Use:</h3>
            <ul className="text-blue-700 space-y-2">
              <li>• Use the language switcher in the top-right to change languages</li>
              <li>• The content above will automatically update based on the selected language</li>
              <li>• In Sanity Studio, create content with both English and Arabic versions</li>
              <li>• Use the provided hooks and components to render localized content</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
