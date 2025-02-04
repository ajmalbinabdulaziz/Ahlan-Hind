import { EnvelopeIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'


export const newsletterType = defineType({
    name: "newsletter",
    title: "Newsletter",
    type: "document",
    icon: EnvelopeIcon,
    fields: [
      defineField({
        name: "fullname",
        title: "Full Name",
        type: "string",
      }),
      defineField({
        name: "email",
        title: "Email",
        type: "string",
      }),
    ],
    preview: {
      select: {
        title: 'fullname',
        email: 'email',
      },
    },
  });