// * Img
import Image from "next/image";

export default function AboutSection() {
  return (
    <div
      id="Flylady"
      className="bg-[#FFF6F8] h-auto flex flex-col md:flex-row items-center p-12 md:p-24 gap-12 md:gap-32"
    >
      <div className="w-full md:w-1/2">
        <Image
          className="flex-shrink-0"
          src="fl51.svg"
          alt="fl51"
          width={464}
          height={444}
        />
      </div>
      <div className="md:w1/1 space-y-3 max-[640px]:text-center">
        <h2 className="text-2xl sm:text-3xl text-[#7E05A6]">About FlyLady</h2>
        <h1 className="text-4xl sm:text-6xl text-[#7E05A6]">
          Your guide to a simpler, happier home and life.
        </h1>
        <p className="text-xl text-[#522E5E]">
          Founded by Marla Cilley, this system is built on three simple rules:
          don’t sweat the small stuff, laugh every day, and love like there’s no
          tomorrow. Begin your journey to finally loving yourself.
        </p>
      </div>
    </div>
  );
}
