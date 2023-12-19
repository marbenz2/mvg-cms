import { CollectionConfig } from "payload/types";
import { isAdminOrEditorOrPublished } from "../access/isAdminOrEditorOrPublished";
import { isAdminOrEditor } from "../access/isAdminOrEditor";

export const Dates: CollectionConfig = {
  slug: "dates",
  admin: {
    useAsTitle: "title",
  },
  access: {
    create: isAdminOrEditor,
    update: isAdminOrEditor,
    read: isAdminOrEditorOrPublished,
    delete: isAdminOrEditor,
  },
  fields: [
    {
      name: "dates",
      type: "group",
      fields: [
        {
          name: "title",
          label: "Title",
          type: "text",
          required: true,
        },
        {
          name: "autor",
          label: "Autor",
          type: "relationship",
          relationTo: "users",
          required: true,
        },
        {
          name: "datum",
          label: "Datum",
          type: "date",
          required: true,
        },
        {
          name: "content",
          label: "Content",
          type: "text",
          required: true,
        },
      ],
    },
  ],
};
