"use client";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import React from "react";

type MDXContentProps = {
  mdxSource: MDXRemoteSerializeResult;
};

export default function MDXContent({ mdxSource }: MDXContentProps) {
  return <MDXRemote {...mdxSource} />;
}
