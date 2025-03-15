// * Component-layout
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

// * Component-blog-page
import HeroBlog from "../components/blog/HeroBlog";
import FeatureBlog from "../components/blog/FeatureBlog";

export default function BlogPage() {
  return (
    <div>
      <Header />
      <HeroBlog />
      <FeatureBlog />
      <Footer />
    </div>
  );
}
