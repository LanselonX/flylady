// * Component-ui
import CardWithIcon from "../ui/CardWithIcon";

import { getAllPostsMeta } from "@/app/lib/getPosts";
import FeatureBlog from "../blog/FeatureBlog";

export default function DiscussionsSection() {
  const posts = getAllPostsMeta();
  const featuredPost = posts[0];
  const otherPosts = posts.slice(1, 4);

  return (
    <div>
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
    </div>
  );
}
