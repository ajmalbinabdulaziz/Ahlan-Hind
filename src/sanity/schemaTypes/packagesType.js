import { PackageIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const packagesType = defineType({
  name: 'packages',
  title: 'Packages',
  type: 'document',
  icon: PackageIcon,
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
        },
      ],
    }),
    defineField({
      name: 'category',
      type: 'array',
      of: [defineArrayMember({ type: 'reference', to: { type: 'category' } })],
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
    }),
    defineField({
      name: 'price',
      type: 'object',
      title: 'Price',
      fields: [
        { name: 'en', type: 'string', title: 'English' },
        { name: 'ar', type: 'string', title: 'Arabic' },
      ],
    }),
    defineField({
      name: 'body',
      type: 'object',
      title: 'Body',
      fields: [
        { name: 'en', type: 'blockContent', title: 'English' },
        { name: 'ar', type: 'blockContent', title: 'Arabic' },
      ],
    }),
  ],
  // preview: {
  //   select: {
  //     title: 'title.en',
  //     category: 'category',
  //     media: 'mainImage',
  //   },
  // },
})
