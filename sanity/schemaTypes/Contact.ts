
export default {
  name: "contact",
  title: "Contact Form Submission",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Full Name",
      type: "string",

    },
    {
      name: "email",
      title: "Email Address",
      type: "string",

    },
    {
      name: "phoneNumber",
      title: "Phone Number",
      type: "string",
   
    },
    {
      name: "subject",
      title: "Subject",
      type: "string",

    },
    {
      name: "message",
      title: "Message",
      type: "text",
      rows: 5,

    },
    {
      name: "date",
      title: "Submission Date",
      type: "datetime",
      readOnly: true,
      initialValue: () => new Date().toISOString(),
    },
  ],
}
