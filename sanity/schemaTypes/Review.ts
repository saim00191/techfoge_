export default {
  name: "review",
  title: "Client Review",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "workCompleted",
      title: "Work Completed",
      type: "string",
    },
    {
      name: "feedback",
      title: "Feedback",
      type: "text",
    },
    {
      name: "rating",
      title: "Rating",
      type: "number",
    },
    {
      name: "date",
      title: "Date",
      type: "datetime",
    },
  ],
}