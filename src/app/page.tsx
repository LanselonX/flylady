// * Component-layout
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

// * Component-shared
import Carousel from "./components/shared/Carousel";

// * Component-main-page
import HeroSection from "./components/sections/HeroSection";
import FeatureSection from "./components/sections/FeatureSection";
import BetweenSection from "./components/sections/BetweenSection";
import DiscussionsSection from "./components/sections/DiscussionsSection";
import NewsletterSection from "./components/sections/NewsletterSection";
import InspirationalSection from "./components/sections/InspirationalSection";
import AboutSection from "./components/sections/AboutSection";
import TextSection from "./components/sections/TextSection";
import FeaturedInSection from "./components/sections/FeaturedInSection";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <FeatureSection />
      <BetweenSection />
      <DiscussionsSection />
      <NewsletterSection />
      <InspirationalSection />
      <AboutSection />
      <TextSection />
      <Carousel />
      <FeaturedInSection />
      <Footer />
    </div>
  );
}
