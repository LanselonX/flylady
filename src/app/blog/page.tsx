import { getAllPostsMeta } from "../lib/getPosts";
import Header from "../components/layout/Header";
import HeroBlog from "../components/blog/HeroBlog";
import FeatureBlog from "../components/blog/FeatureBlog";
import CardWithIcon from "../components/ui/CardWithIcon";
import Footer from "../components/layout/Footer";

export default function BlogPage() {
  const allPosts = getAllPostsMeta();
  const featuredPost = allPosts[0];
  const otherPosts = allPosts.slice(1);

  return (
    <div>
      <Header />
      <HeroBlog />

      <FeatureBlog slug={featuredPost.slug} post={featuredPost} />

      <div className="container w-[1264px] mx-auto pt-12 pb-12">
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

      <Footer />
    </div>
  );
}
