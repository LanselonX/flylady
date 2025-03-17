import Image from "next/image";

export default function Header() {
  return (
    <div className="bg-gradient-to-l from-[#7E05A6] to-[#D8247B] w-full">
      <div className="flex justify-center p-3 text-[#FFF6F8] text-center text-base">
        <p className="hide-on-small">
          We'll guide you to a decluttered home and an organized life
        </p>
        <p className="mx-4 hide-on-small"> | </p>
        <p className="mx-1">Get the Flylady App</p>
        <Image src="/arrowr.svg" alt="arrow right" width={24} height={24} />
      </div>
    </div>
  );
}
