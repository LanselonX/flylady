import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  iconSrc: string;
  iconAlt: string;
  iconBgColor: string;
  iconLabel: string;
  bgImg: string;
  textColor: string;
}

const postsDirectory = path.join(process.cwd(), "content", "posts");

export function getAllPostsMeta(): PostMeta[] {
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData: PostMeta[] = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug: data.slug || slug,
        title: data.title,
        description: data.description,
        iconSrc: data.iconSrc,
        iconAlt: data.iconAlt,
        iconBgColor: data.iconBgColor,
        iconLabel: data.iconLabel,
        bgImg: data.bgImg,
        textColor: data.textColor,
      };
    });

  return allPostsData;
}
