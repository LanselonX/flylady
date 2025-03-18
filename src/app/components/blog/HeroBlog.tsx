// * Component-ui
import Hero from "../layout/Hero";

export default function HeroBlog() {
  return (
    <div className="bg-gradient-to-b from-[#FFE9EE] to-[#FFF6F8]/0 mb-32">
      <Hero />
      <div className="mx-auto flex flex-col text-center px-20 pt-18 text-[#7E05A6]">
        <p className="text-sm font-bold">BLOG</p>
        <h1 className="text-6xl lg:text-8xl lg:px-34">
          We&apos;ll guide you to a decluttered home and an organized life
        </h1>
      </div>
    </div>
  );
}
