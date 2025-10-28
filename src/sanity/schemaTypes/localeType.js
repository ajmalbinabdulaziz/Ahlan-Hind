import {defineField, defineType} from 'sanity'
import {TranslateIcon} from '@sanity/icons'

export const localeType = defineType({
  name: 'locale',
  title: 'Locale',
  type: 'document',
  icon: TranslateIcon,
  fields: [
    defineField({
      name: 'id',
      title: 'Language Code',
      type: 'string',
      description: 'ISO 639-1 language code (e.g., en, ar)',
      validation: (Rule) => Rule.required().length(2)
    }),
    defineField({
      name: 'title',
      title: 'Language Name',
      type: 'string',
      description: 'Display name of the language',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'isDefault',
      title: 'Default Language',
      type: 'boolean',
      description: 'Whether this is the default language',
      initialValue: false
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'id',
      isDefault: 'isDefault'
    },
    prepare(selection) {
      const {title, subtitle, isDefault} = selection
      return {
        title: title,
        subtitle: `${subtitle}${isDefault ? ' (Default)' : ''}`
      }
    }
  }
})
