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
  { title: 'Software Development', value: 'software-development' },
  { title: 'Web Development', value: 'web-development' },
  { title: 'Mobile App Development', value: 'mobile-app-development' },
  { title: 'WordPress Development', value: 'wordpress-development' },
  { title: 'E-Commerce Solutions', value: 'ecommerce-solutions' },
  { title: 'SEO Optimization', value: 'seo-optimization' },
  { title: 'Graphic Designing', value: 'graphic-designing' },
  { title: 'Video Editing', value: 'video-editing' },
  { title: 'AI & Machine Learning', value: 'ai-ml' },
  { title: 'Technical Support', value: 'technical-support' },
  { title: 'UI/UX Design', value: 'ui-ux-design' },
  { title: 'Tech Consulting', value: 'consulting' },
  { title: 'Other', value: 'other' },
],
      },
    },
    {
      name: 'budget',
      title: 'Budget Range',
      type: 'string',
      options: {
        list:  [
  { title: '$300 - $500', value: '300-500' },
  { title: '$500 - $1,000', value: '500-1000' },
  { title: '$1,000 - $2,000', value: '1000-2000' },
  { title: '$2,000 - $5,000', value: '2000-5000' },
  { title: '$5,000 - $10,000', value: '5000-10000' },
  { title: '$10,000 - $20,000', value: '10000-20000' },
  { title: '$20,000 - $30,000', value: '20000-30000' },
  { title: '$30,000 - $50,000', value: '30000-50000' },
  { title: '$50,000+', value: '50000+' }
]
,
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
