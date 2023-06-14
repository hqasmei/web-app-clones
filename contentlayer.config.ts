import { defineDocumentType, makeSource } from "@contentlayer/source-files";

export const Musings = defineDocumentType(() => ({
  name: "Musings",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    publishedAt: { type: "string", required: true },
    author: { type: "string", required: true },
    featured: { type: "boolean", required: true },
    image: { type: "string", required: true },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => `${doc._raw.flattenedPath}`,
    },
    slugAsParams: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
    },
  },
}));

export default makeSource({
  contentDirPath: "src/content",
  documentTypes: [Musings],
});
