export default {
  name: 'editUser',
  title: 'User',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'socialsTitle',
      title: 'Socials Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'linksTitle',
      title: 'Links Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'productsTitle',
      title: 'Products Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'showProductsSection',
      title: 'Products Section',
      type: 'boolean',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'showLinksSection',
      title: 'Links Section',
      type: 'boolean',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'showSocialsSection',
      title: 'Social Section',
      type: 'boolean',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      name: 'image',
      media: 'image',
      title: 'name',
    },
  },
};
