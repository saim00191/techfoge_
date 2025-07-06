export default {
  name: 'jobPost',
  title: 'Job Post',
  type: 'document',
  fields: [
    { 
      name: 'title', 
      title: 'Title', 
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    { 
      name: 'department', 
      title: 'Department', 
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    { 
      name: 'location', 
      title: 'Location', 
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    { 
      name: 'type', 
      title: 'Type', 
      type: 'string',
      options: {
        list: [
          { title: 'Full-time', value: 'Full-time' },
          { title: 'Part-time', value: 'Part-time' },
          { title: 'Contract', value: 'Contract' },
          { title: 'Internship', value: 'Internship' },
        ],
      },
      validation: (Rule: any) => Rule.required()
    },
    { 
      name: 'salary', 
      title: 'Salary', 
      type: 'string' 
    },
    { 
      name: 'description', 
      title: 'Description', 
      type: 'text',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'requirements',
      title: 'Requirements',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Active', value: 'active' },
          { title: 'Paused', value: 'paused' },
          { title: 'Closed', value: 'closed' },
        ],
      },
      initialValue: 'active'
    },
    {
      name: 'postedDate',
      title: 'Posted Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
    {
      name: 'applications',
      title: 'Applications',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'application',
          title: 'Application',
          fields: [
            { 
              name: 'applicantName', 
              title: 'Applicant Name', 
              type: 'string',
              validation: (Rule: any) => Rule.required()
            },
            { 
              name: 'email', 
              title: 'Email', 
              type: 'string',
              validation: (Rule: any) => Rule.required().email()
            },
            { 
              name: 'phone', 
              title: 'Phone', 
              type: 'string' 
            },
            { 
              name: 'experience', 
              title: 'Experience', 
              type: 'string' 
            },
            { 
              name: 'currentRole', 
              title: 'Current Role', 
              type: 'string' 
            },
            {
              name: 'status',
              title: 'Application Status',
              type: 'string',
              options: {
                list: [
                  { title: 'Pending', value: 'pending' },
                  { title: 'Reviewed', value: 'reviewed' },
                  { title: 'Interviewed', value: 'interviewed' },
                  { title: 'Hired', value: 'hired' },
                  { title: 'Rejected', value: 'rejected' },
                ],
              },
              initialValue: 'pending'
            },
            { 
              name: 'appliedDate', 
              title: 'Applied Date', 
              type: 'datetime',
              initialValue: () => new Date().toISOString(),
            },
            { 
              name: 'portfolio', 
              title: 'Portfolio URL', 
              type: 'string' 
            },
            {
              name: "cv",
              title: "CV/Resume File",
              type: "file",
              options: {
                accept: ".pdf,.doc,.docx,.jpg,.jpeg,.png",
              },
            },
            { 
              name: 'coverLetter', 
              title: 'Cover Letter', 
              type: 'text' 
            },
          ],
          preview: {
            select: {
              title: 'applicantName',
              subtitle: 'email',
              description: 'status'
            }
          }
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'department',
      description: 'status'
    }
  }
}
