import { getAllPostsMeta } from "@/app/lib/getPosts";
import { getPostBySlug } from "@/app/lib/getPostBySlug";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import CardWithIcon from "@/app/components/shared/CardWithIcon";
import Hero from "@/app/components/layout/Hero";
import Image from "next/image";
import Button from "@/app/components/ui/Button";

const MDXContent = dynamic(() => import("./MDXContent"));

export async function generateStaticParams() {
  const posts = getAllPostsMeta();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await Promise.resolve(params);
  const { frontMatter, mdxSource } = await getPostBySlug(slug);

  if (!frontMatter) {
    notFound();
  }

  const allPosts = getAllPostsMeta();
  const otherPosts = allPosts.filter((post) => post.slug !== slug).slice(0, 3);

  return (
    <div>
      <Header />
      <Hero />
      <div className="container w-[1264px] mx-auto flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center mt-16">
          <div
            className="flex gap-2"
            style={{ backgroundColor: frontMatter.iconBgColor }}
          >
            <Image
              src={frontMatter.iconSrc}
              alt={frontMatter.iconAlt}
              width={24}
              height={24}
            />
            <p style={{ color: frontMatter.textColor }}>
              {frontMatter.iconLabel}
            </p>
          </div>
          <h1 className="text-8xl text-center text-[#7E05A6]">
            {frontMatter.title}
          </h1>
          <div
            className="w-[1138px] h-[590px] my-30"
            style={{ backgroundColor: frontMatter.bgImg }}
          ></div>
        </div>
        <div className="max-w-[864px] mx-auto">
          <MDXContent mdxSource={mdxSource} />
        </div>
        <div className="flex justify-between w-full my-24">
          <h1 className="text-5xl text-[#522E5E]">More articles</h1>
          <Button bgColor="white" textColor="#281030" className="border">
            View All Highlights
          </Button>
        </div>
        <div className="mx-auto pb-12">
          <div className="grid gap-6 md:grid-cols-3">
            {otherPosts.map((post) => (
              <CardWithIcon
                key={post.slug}
                slug={post.slug}
                iconSrc={post.iconSrc}
                iconAlt={post.iconAlt}
                iconBgColor={post.iconBgColor}
                iconLabel={post.iconLabel}
                textColor={post.textColor}
                title={post.title}
                bgImg={post.bgImg}
                description={post.description}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
