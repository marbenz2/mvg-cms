import { CollectionConfig } from "payload/types";
import { isAdminOrEditorOrPublished } from "../access/isAdminOrEditorOrPublished";
import { isAdminOrEditor } from "../access/isAdminOrEditor";

export const Impressum: CollectionConfig = {
  slug: "impressum",
  admin: {
    useAsTitle: "title",
  },
  access: {
    create: isAdminOrEditor,
    update: isAdminOrEditor,
    read: isAdminOrEditorOrPublished,
    delete: isAdminOrEditor,
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: "impressum",
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
          label: "Inhalt",
          type: "richText",
          required: true,
        },
      ],
    },
  ],
};
