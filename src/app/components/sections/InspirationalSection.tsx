import Image from "next/image";

export default function InspirationalSection() {
  return (
    <div className="bg-gradient-to-r from-[#D8247B] to-[#7E05A6]">
      <div className="flex gap-12 items-center justify-center p-10">
        <p className="text-3xl sm:text-6xl text-[#FFF6F8]">
          Don’t sweat the small stuff{" "}
        </p>
        <Image src="starvector.svg" alt="star vector" width={34} height={32} />
        <p className="text-3xl sm:text-6xl text-[#FFF6F8]">
          Love like there’s no tomorrow
        </p>
      </div>
    </div>
  );
}
