import path from "path";

import { payloadCloud } from "@payloadcms/plugin-cloud";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { buildConfig } from "payload/config";

import { Users } from "./collections/Users";
import { Posts } from "./collections/Posts";
import { Datenschutz } from "./collections/Datenschutz";
import { Impressum } from "./collections/Impressum";
import { Dates } from "./collections/Dates";
import { Media } from "./collections/Media";

export default buildConfig({
  cors: ["https://mvg-frontend-marbenz2.vercel.app"],
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  editor: lexicalEditor({}),
  collections: [Users, Posts, Datenschutz, Impressum, Dates, Media],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
  plugins: [payloadCloud()],
  // database-adapter-config-start
  db: mongooseAdapter({
    url: process.env.MONGODB_URI,
  }),
  // database-adapter-config-end
});
