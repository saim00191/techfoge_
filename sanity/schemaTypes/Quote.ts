export default {
  name: 'quoteRequest',
  title: 'Quote Request',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Full Name',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email Address',
      type: 'string',
     
    },
    {
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    },
    {
      name: 'company',
      title: 'Company',
      type: 'string',
    },
    {
      name: 'projectType',
      title: 'Project Type',
      type: 'string',
      options: {
        list: [
          { title: 'Web Development', value: 'web-development' },
          { title: 'Mobile App', value: 'mobile-app' },
          { title: 'UI/UX Design', value: 'ui-ux-design' },
          { title: 'Tech Consulting', value: 'consulting' },
          { title: 'Other', value: 'other' }
        ],
      },
    },
    {
      name: 'budget',
      title: 'Budget Range',
      type: 'string',
      options: {
        list: [
          { title: '$5,000 - $10,000', value: '5k-10k' },
          { title: '$10,000 - $25,000', value: '10k-25k' },
          { title: '$25,000 - $50,000', value: '25k-50k' },
          { title: '$50,000+', value: '50k+' }
        ],
      },
    },
    {
      name: 'message',
      title: 'Project Details & Requirements',
      type: 'text',
      rows: 5,
    },
    {
      name: 'submittedAt',
      title: 'Submitted At',
      type: 'datetime',
      readOnly: true,
      initialValue: () => new Date().toISOString()
    }
  ]
}
