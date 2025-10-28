'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\studio\[[...tool]]\page.jsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {documentInternationalization} from '@sanity/document-internationalization'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './src/sanity/env'
import {schema} from './src/sanity/schemaTypes'
import {structure} from './src/sanity/structure'

// const projectId = 'c4p78oz0'
// const dataset = 'production'

export default defineConfig({
  basePath: '/studio',
  projectId: 'c4p78oz0',
  dataset: 'production',
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: [
    structureTool({structure}),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
    // Document internationalization plugin
    documentInternationalization({
      supportedLanguages: [
        {id: 'en', title: 'English'},
        {id: 'ar', title: 'العربية'}
      ],
      schemaTypes: ['post', 'category', 'packages', 'gallery', 'newsletter']
    })
  ],
})
