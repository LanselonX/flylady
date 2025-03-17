// * Component-ui
import CardWithIcon from "../shared/CardWithIcon";

import { getAllPostsMeta } from "@/app/lib/getPosts";
import FeatureBlog from "../blog/FeatureBlog";

export default function DiscussionsSection() {
  const posts = getAllPostsMeta();
  const featuredPost = posts[0];
  const otherPosts = posts.slice(1, 4);

  return (
    <div>
      <FeatureBlog slug={featuredPost.slug} post={featuredPost} />

      <div className="container w-full mx-auto py-12 sm:px-32 px-6">
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
