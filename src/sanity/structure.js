// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S) =>
  S.list()
    .title('Ahlan-Hind')
    .items([
      // Content organized by locale
      S.listItem()
        .title('English Content')
        .child(
          S.list()
            .title('English Content')
            .items([
              S.documentTypeListItem('post').title('Posts'),
              S.documentTypeListItem('category').title('Categories'),
              S.documentTypeListItem('packages').title('Packages'),
              S.documentTypeListItem('gallery').title('Gallery'),
            ])
        ),
      S.listItem()
        .title('Arabic Content')
        .child(
          S.list()
            .title('Arabic Content')
            .items([
              S.documentTypeListItem('post').title('المنشورات'),
              S.documentTypeListItem('category').title('الفئات'),
              S.documentTypeListItem('packages').title('الباقات'),
              S.documentTypeListItem('gallery').title('المعرض'),
            ])
        ),
      S.divider(),
      // Other content types
      S.documentTypeListItem('newsletter').title('Newsletter Subscribers'),
      S.documentTypeListItem('user').title('Users'),
      S.documentTypeListItem('enquiry').title('Enquiries'),
      S.documentTypeListItem('locale').title('Locales'),
    ])
