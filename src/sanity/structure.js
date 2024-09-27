// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S) =>
  S.list()
    .title('Ahlan-Hind')
    .items([
      S.documentTypeListItem('packages').title('Packages'),
      S.documentTypeListItem('category').title('Categories'),
      // S.documentTypeListItem('author').title('Authors'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['packages', 'category'].includes(item.getId()),
      ),
    ])
