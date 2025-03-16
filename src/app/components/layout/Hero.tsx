import Image from "next/image";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <div>
      <header>
        <nav className="container mx-auto flex items-center justify-between px-4 py-4">
          <Image src="/lockupFly.svg" alt="flylady" width={212} height={53} />
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
    </div>
  );
}
