import Image from "next/image";

export default function Header() {
  return (
    <header>
      <div className="bg-gradient-to-l from-[#7E05A6] to-[#D8247B]">
        <div className="flex justify-center p-3 text-[#FFF6F8] text-center text-base">
          <p>We'll guide you to a decluttered home and an organized life</p>
          <p className="mx-4"> | </p>
          <p>Get the Flylady App</p>
          <Image src="/arrowr.svg" alt="arrow right" width={24} height={24} />
        </div>
      </div>
    </header>
  );
}
