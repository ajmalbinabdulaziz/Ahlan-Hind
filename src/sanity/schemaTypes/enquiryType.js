import { EnvelopeIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'


export const enquiryType = defineType({
    name: "enquiry",
    title: "Enquiry",
    type: "document",
    icon: EnvelopeIcon,
    fields: [
      defineField({
        name: "fullname",
        title: "Full Name",
        type: "string",
      }),
      defineField({
        name: "phone",
        title: "Phone",
        type: "string",
      }),
      defineField({
        name: "email",
        title: "Email",
        type: "string",
      }),
      defineField({
        name: "message",
        title: "Message",
        type: "string",
      })
    ],
    preview: {
      select: {
        title: 'fullname',
        phone: 'phone',
      },
    },
  });