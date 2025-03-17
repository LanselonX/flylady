// components/blog/FeatureBlog.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PostTypes } from "@/app/types/PostTypes";

interface FeatureBlogProps {
  slug: string;
  post: PostTypes;
}

const FeatureBlog: React.FC<FeatureBlogProps> = ({ slug, post }) => {
  return (
    <Link href={`/blog/${slug}`}>
      <div className="flex items-center justify-center">
        <div className="w-auto h-auto bg-[#FFF9FA] flex items-center gap-28 p-12 sm:px-32">
          <div className="w-auto min-h-[324px] bg-[#FFEBF0] md:w-full rounded-2xl"></div>
          <div>
            <div
              className="flex items-center gap-2 w-auto max-w-[132px] h-auto"
              style={{ backgroundColor: post.iconBgColor }}
            >
              <Image
                src={post.iconSrc}
                alt={post.iconAlt}
                width={24}
                height={24}
              />
              <p className="text-xs" style={{ color: post.textColor }}>
                {post.iconLabel}
              </p>
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
