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
  versions: {
    drafts: true,
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
          name: "date",
          label: "Date",
          type: "date",
          required: true,
          admin: {
            date: {
              pickerAppearance: "dayOnly",
              displayFormat: "dd MM yyyy",
            },
          },
        },
        {
          type: "row",
          fields: [
            {
              name: "timeStart",
              label: "Start Time",
              type: "date",
              required: true,
              admin: {
                date: {
                  pickerAppearance: "timeOnly",
                  displayFormat: "hh:mm",
                },
              },
            },
            {
              name: "timeEnd",
              label: "End Time",
              type: "date",
              admin: {
                date: {
                  pickerAppearance: "timeOnly",
                  displayFormat: "hh:mm",
                },
              },
            },
          ],
        },
        {
          name: "location",
          label: "Location",
          type: "text",
          required: true,
        },
        {
          name: "department",
          label: "Department",
          type: "text",
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
