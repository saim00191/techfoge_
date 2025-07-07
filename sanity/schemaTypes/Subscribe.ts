export default {
  name: "newsletter",
  title: "Newsletter Submissions",
  type: "document",
  fields: [
    {
      name: "email",
      title: "Email",
      type: "email",
    },
    {
      name: "submittedAt",
      title: "Submitted At",
      type: "datetime",
      readOnly: true,
      initialValue: () => new Date().toISOString(),
    },
   
  ],
}
