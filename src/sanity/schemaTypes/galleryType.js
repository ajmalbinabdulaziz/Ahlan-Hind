import {ImagesIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const galleryType = defineType({
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  icon: ImagesIcon,
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
      name: 'mainImage',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'object',
          title: 'Alternative text',
          fields: [
            { name: 'en', type: 'string', title: 'English' },
            { name: 'ar', type: 'string', title: 'Arabic' },
          ],
        }
      ]
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
    }),
  ],
//   preview: {
//     select: {
//       title: 'title',
//       date: 'publishedAt',
//       media: 'mainImage',
//     },
//   },
})
