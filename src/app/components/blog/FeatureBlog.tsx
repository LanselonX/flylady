// components/blog/FeatureBlog.tsx
import React from "react";
import Image from "next/image";
import { PostMeta } from "@/app/lib/getPosts";
import Link from "next/link";

interface FeatureBlogProps {
  slug: string;
  post: PostMeta;
}

const FeatureBlog: React.FC<FeatureBlogProps> = ({ slug, post }) => {
  return (
    <Link href={`/blog/${slug}`}>
      <div className="flex items-center justify-center">
        <div className="w-[1264px] h-[436px] bg-[#FFF9FA] flex items-center gap-24 px-12">
          <div className="w-auto h-[324px] bg-[#FFEBF0] md:w-full rounded-2xl"></div>
          <div>
            <div
              className="flex items-center gap-2 w-[140px] h-[24px]"
              style={{ backgroundColor: post.iconBgColor }}
            >
              <Image
                src={post.iconSrc}
                alt={post.iconAlt}
                width={24}
                height={24}
              />
              <p className="text-xs text-[#DEA516]">{post.iconLabel}</p>
            </div>
            <h1 className="text-5xl text-[#522E5E] md:w-1/2">{post.title}</h1>
            <p className="text-sm text-[#522E5E] mt-6">{post.description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FeatureBlog;
