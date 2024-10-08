import { UserIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'


export const userType = defineType({
    name: "user",
    title: "Users",
    type: "document",
    icon: UserIcon,
    fields: [
      defineField({
        name: "firstName",
        title: "First Name",
        type: "string",
      }),
      defineField({
        name: "lastName",
        title: "Last Name",
        type: "string",
      }),
      defineField({
        name: "email",
        title: "Email",
        type: "string",
      })
    ],
    preview: {
      select: {
        title: 'lastName',
        email: 'email',
      },
    },
  });