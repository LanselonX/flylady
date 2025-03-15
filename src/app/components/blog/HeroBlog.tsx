// * Component-ui
import Button from "../ui/Button";

// * Img
import Image from "next/image";

export default function HeroBlog() {
  return (
    <div className="bg-gradient-to-b from-[#FFE9EE] to-[#FFF6F8]/0 h-[610px]">
      <header>
        <nav className="container mx-auto flex items-center justify-between px-4 py-4">
          <Image src="lockupFly.svg" alt="flylady" width={212} height={53} />
          <div className="text-base font-bold space-x-8 text-[#522E5E]">
            <a>Features</a>
            <a>Lessons</a>
            <a>The FlyLady</a>
          </div>
          <Button className="bg-gradient-to-r from-[#D8247B] to-[#7E05A6]">
            Download App
          </Button>
        </nav>
      </header>
      <div className="container mx-auto flex flex-col items-center px-4 pt-18 text-[#7E05A6]">
        <p className="text-sm">BLOG</p>
        <h1 className="text-8xl">
          We'll guide you to a decluttered home and an organized life
        </h1>
      </div>
    </div>
  );
}
