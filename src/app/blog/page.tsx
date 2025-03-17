import { getAllPostsMeta } from "../lib/getPosts";
import Header from "../components/layout/Header";
import HeroBlog from "../components/blog/HeroBlog";
import Footer from "../components/layout/Footer";
import Pagination from "../components/shared/PagintaionPost";

const POSTS_PER_PAGE = 3;

export default function BlogPage() {
  const allPosts = getAllPostsMeta();

  return (
    <div>
      <Header />
      <HeroBlog />
      <Pagination allPosts={allPosts} postsPerPage={POSTS_PER_PAGE} />
      <Footer />
    </div>
  );
}
