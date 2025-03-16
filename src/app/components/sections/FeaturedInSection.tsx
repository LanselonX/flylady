// * Img
import Image from "next/image";

export default function FeaturedInSection() {
  return (
    <div className="flex items-center justify-center py-6 mb-20">
      <div className="w-[568px] h-[32px] flex flex-row items-center justify-center gap-6">
        <p className="text-xl text-[#522E5E] mr-8">As seen in</p>
        <Image
          src="betterhomes.svg"
          alt="betterhomes"
          width={124}
          height={32}
        />
        <Image src="additude.svg" alt="additude" width={124} height={32} />
        <Image src="yahoo!.svg" alt="yahoo!" width={124} height={32} />
      </div>
    </div>
  );
}
