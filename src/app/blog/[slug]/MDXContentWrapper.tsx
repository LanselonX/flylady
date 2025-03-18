"use client";

import { MDXRemoteSerializeResult } from "next-mdx-remote";
import dynamic from "next/dynamic";

const MDXContent = dynamic(() => import("./MDXContent"), { ssr: false });

type MDXContentWrapperProps = {
  mdxSource: MDXRemoteSerializeResult;
};

export default function MDXContentWrapper({
  mdxSource,
}: MDXContentWrapperProps) {
  return <MDXContent mdxSource={mdxSource} />;
}
