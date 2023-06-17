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
    recommend: {
      type: "list",
      of: {
        type: "string",
        options: [
          "an-interview-with-ryan-keating-financial-advice-for-startups",
          "balancing-innovation-and-risk-navigating-regulatory-frameworks-in-the-world-of-generative-ai",
          "best-practices-from-the-cfo-suite",
          "breaking-down-the-fpa-function-of-the-cfo-suite",
          "budget-vs-actual-variance-analysis",
          "easier-accounting-how-truewind-helps-you-focus-on-the-things-that-matter",
          "gpt-4-impacts-on-startups-and-the-labor-market",
          "saas-quick-ratio-measuring-growth-efficiency",
          "the-ai-startups-rising-higher-as-tiktoks-regulatory-challenges-mount",
          "y-combinator-w23-generative-ai-landscape",
        ],
      },
      required: true,
    },
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
