// * Img
import Image from "next/image";

export default function AboutSection() {
  return (
    <div className="bg-[#FFF6F8] h-[636px] flex items-center">
      <div className="w-full md:w-1/2">
        <Image
          className="flex-shrink-0"
          src="fl51.svg"
          alt="fl51"
          width={464}
          height={444}
        />
      </div>
      <div className="md:w1/2 space-y-3">
        <h2 className="text-3xl text-[#7E05A6]">About FlyLady</h2>
        <h1 className="text-6xl text-[#7E05A6]">
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
