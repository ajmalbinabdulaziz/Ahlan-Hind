import {TagIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const categoryType = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'object',
      title: 'Title',
      fields: [
        { name: 'en', type: 'string', title: 'English' },
        { name: 'ar', type: 'string', title: 'Arabic' },
      ],
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: (doc) => doc.title?.en, // generate slug from English title by default
      },
    }),
    defineField({
      name: 'description',
      type: 'object',
      title: 'Description',
      fields: [
        { name: 'en', type: 'text', title: 'English' },
        { name: 'ar', type: 'text', title: 'Arabic' },
      ],
    }),
  ],
})
