import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { PostTypes } from "../types/PostTypes";

const postsDirectory = path.join(process.cwd(), "content", "posts");

export function getAllPostsMeta(): PostTypes[] {
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData: PostTypes[] = fileNames
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
