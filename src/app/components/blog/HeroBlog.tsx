// * Component-ui
import Hero from "../layout/Hero";

export default function HeroBlog() {
  return (
    <div className="bg-gradient-to-b from-[#FFE9EE] to-[#FFF6F8]/0 h-[610px]">
      <Hero />
      <div className="container mx-auto flex flex-col items-center px-4 pt-18 text-[#7E05A6]">
        <p className="text-sm">BLOG</p>
        <h1 className="text-8xl">
          We'll guide you to a decluttered home and an organized life
        </h1>
      </div>
    </div>
  );
}
