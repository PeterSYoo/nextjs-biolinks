export default {
  name: 'links',
  title: 'Links',
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
    {
      name: 'coupon',
      title: 'Coupon Code',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'couponAmt',
      title: 'Coupon Amount',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'createdAt',
      title: 'Created Date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    },
  ],
};
