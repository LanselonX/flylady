// * Component-ui
import Hero from "../layout/Hero";

// * Img
import Image from "next/image";
import { CarouselMobile } from "../shared/CarouselMobile";

export default function HeroSection() {
  return (
    <div className="bg-gradient-to-b from-[#FFE9EE] to-[#FFF6F8]/0 h-auto">
      <Hero />
      <div className="container mx-auto flex flex-col md:flex-row items-center my-16">
        <div className="w-full md:w-1/1 max-[640px]:text-center max-[640px]:flex max-[640px]:flex-col max-[640px]:justify-center max-[640px]:items-center max-[640px]:mb-14">
          <h1 className="text-[#7E05A6] text-6xl sm:text-8xl mb-8">
            Welcome to Your <br />
            <span className="whitespace-nowrap">Stress-Free Home!</span>
          </h1>
          <p className="text-[#522E5E] text-base">
            Join hundreds of thousands using the FlyLady app to turn chaos into
            calm—one routine at a time!
          </p>
          <div className="mt-8 flex gap-6">
            <Image
              src="/googleplay.svg"
              alt="Googleplay logo"
              width={138}
              height={40}
            />
            <Image
              src="/appstore.svg"
              alt="Appstore logo"
              width={138}
              height={40}
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/fairy.svg"
            alt="Fairy Logo"
            width={466}
            height={508}
            layout="responsive"
          />
        </div>
      </div>
      <div className="container mx-auto flex flex-col items-center px-4 hide-on-small mb-16">
        <h2 className="text-[#7E05A6] text-xl mt-8">
          Based on the proven and loved FlyLady cleaning system
        </h2>
        <div className="flex justify-center items-center text-center gap-40 text-[#522E5E] text-base mt-8">
          <div className="flex flex-col items-center gap-4">
            {"“The FlyLady cleaning method is the"}
            <br />
            {"ultimate solution for a tidy home”"}
            <Image
              src="/betterhomes.svg"
              alt="BetterHomes Logo"
              width={128}
              height={42}
            />
          </div>
          <div className="flex flex-col items-center gap-4">
            {"“The FlyLady Has the Cure for Your"} <br />
            {"Messy House Syndrome”"}
            <Image
              src="/additude.svg"
              alt="Additude Logo"
              width={170}
              height={44}
            />
          </div>
          <div className="flex flex-col items-center gap-4">
            {"“The FlyLady’s 27 Fling Boogie is a"}
            <br /> {"game-changer for clutter control”"}
            <Image src="yahoo!.svg" alt="Yahoo Logo" width={170} height={44} />
          </div>
        </div>
      </div>
      <div className="mb-16 sm:hidden">
        <CarouselMobile />
      </div>
    </div>
  );
}
