// * Img
import Image from "next/image";

export default function FeaturedInSection() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center py-6 my-12 mb-20">
      <p className="text-xl text-[#522E5E] lg:mr-8">As seen in</p>
      <div className="flex flex-wrap justify-center gap-6">
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
