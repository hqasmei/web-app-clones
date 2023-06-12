import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";

const rootDirectory = path.join(process.cwd(), "src/content");
const featuredDirectory = path.join(rootDirectory, "featured");
const nonFeaturedDirectory = path.join(rootDirectory, "non-featured");

type PostMeta = {
  title?: string;
  author?: string;
  publishedAt?: string;
  description?: string;
  image?: string;
  minuteRead?: string;
  slug?: string;
};

type Post = {
  meta: PostMeta;
  content: any;
};

export async function getFeaturedPostBySlug(slug: string): Promise<Post> {
  const realSlug = slug.replace(/\.mdx$/, "");
  const filePath = path.join(featuredDirectory, `${realSlug}.mdx`);

  const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });

  const { frontmatter, content } = await compileMDX({
    source: fileContent,
    options: { parseFrontmatter: true },
  });

  return { meta: { ...frontmatter, slug: realSlug }, content };
}

export const getAllFeaturedPostsMeta = async (): Promise<PostMeta[]> => {
  const files = await fs.promises.readdir(featuredDirectory);

  let posts: PostMeta[] = [];

  for (const file of files) {
    const { meta } = await getFeaturedPostBySlug(file);
    posts.push(meta);
  }

  return posts;
};

export async function getNonFeaturedPostBySlug(slug: string): Promise<Post> {
  const realSlug = slug.replace(/\.mdx$/, "");
  const filePath = path.join(nonFeaturedDirectory, `${realSlug}.mdx`);

  const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });

  const { frontmatter, content } = await compileMDX({
    source: fileContent,
    options: { parseFrontmatter: true },
  });

  return { meta: { ...frontmatter, slug: realSlug }, content };
}

export const getAllNonFeaturedPostsMeta = async (): Promise<PostMeta[]> => {
  const files = await fs.promises.readdir(nonFeaturedDirectory);

  let posts: PostMeta[] = [];

  for (const file of files) {
    const { meta } = await getNonFeaturedPostBySlug(file);
    posts.push(meta);
  }

  return posts;
};


 
