export default {
  name: 'socials',
  title: 'Socials',
  type: 'document',
  fields: [
    {
      name: 'link',
      title: 'Link',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'linkText',
      title: 'Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
};
