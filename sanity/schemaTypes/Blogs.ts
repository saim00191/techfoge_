export default {
  name: "post",
  title: "Blog Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        slugify: (input : string) =>
          input
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^a-z0-9-]/g, "") // remove special characters
            .slice(0, 96),
      },

    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "mainImageTop",
      title: "Main Image (Top)",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
        },
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: "mainImageBottom",
      title: "Main Image (Bottom)",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Draft", value: "draft" },
          { title: "Published", value: "published" },
        ],
      },
      initialValue: "draft",
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "description",
      media: "mainImageTop",
    },
  },
}
