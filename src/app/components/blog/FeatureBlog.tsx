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
      <div className="flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="w-full max-w-[1280px] h-auto bg-[#FFF9FA] flex flex-col md:flex-row items-center gap-6 md:gap-14 lg:gap-20 p-6 sm:p-12 lg:p-16 rounded-2xl">
          <div className="w-full max-w-[624px] h-auto aspect-[624/324] bg-[#FFEBF0] rounded-2xl"></div>

          <div className="w-full max-w-[600px] flex flex-col items-start md:text-left">
            <div
              className="flex items-center gap-2 p-2 rounded-lg w-auto max-w-full"
              style={{ backgroundColor: post.iconBgColor }}
            >
              <Image
                src={post.iconSrc}
                alt={post.iconAlt}
                width={24}
                height={24}
              />
              <p
                className="text-xs font-medium"
                style={{ color: post.textColor }}
              >
                {post.iconLabel}
              </p>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl text-[#522E5E] font-bold mt-4">
              {post.title}
            </h1>
            <p className="text-sm sm:text-base text-[#522E5E] mt-4 sm:mt-6">
              {post.description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FeatureBlog;
