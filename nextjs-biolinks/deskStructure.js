import S from '@sanity/desk-tool/structure-builder';

export default () =>
  S.list()
    .title('Base')
    .items([
      S.listItem()
        .title('User')
        .child(S.document().schemaType('editUser').documentId('editUser')),
      ...S.documentTypeListItems().filter(
        (item) => !['editUser'].includes(item.getId())
      ),
    ]);
