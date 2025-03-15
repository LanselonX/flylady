// * Component-ui
import Button from "../ui/Button";

// * Img
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="bg-gradient-to-b from-[#FFE9EE] to-[#FFF6F8]/0 h-[1023px]">
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
      <main>
        <section>
          <div className="container mx-auto flex flex-col md:flex-row items-center px-4">
            <div className="w-full md:w-1/2">
              <h1 className="text-[#7E05A6] text-8xl">
                Welcome to Your Stress-Free Home!
              </h1>
              <p className="text-[#522E5E] text-base">
                Join hundreds of thousands using the FlyLady app to turn chaos
                into calm—one routine at a time!
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
              />
            </div>
          </div>
        </section>
        <section>
          <div className="container mx-auto flex flex-col items-center px-4">
            <h2 className="text-[#7E05A6] text-xl mt-8">
              Based on the proven and loved FlyLady cleaning system
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-8 text-[#522E5E] text-base mt-8">
              <div className="flex flex-col items-center gap-4">
                “The FlyLady cleaning method is the ultimate solution for a tidy
                home”
                <Image
                  src="/betterhomes.svg"
                  alt="BetterHomes Logo"
                  width={128}
                  height={42}
                />
              </div>
              <div className="flex flex-col items-center gap-4">
                “The FlyLady Has the Cure for Your Messy House Syndrome”
                <Image
                  src="/additude.svg"
                  alt="Additude Logo"
                  width={170}
                  height={44}
                />
              </div>
              <div className="flex flex-col items-center gap-4">
                “The FlyLady’s 27 Fling Boogie is a game-changer for clutter
                control”
                <Image
                  src="yahoo!.svg"
                  alt="Yahoo Logo"
                  width={170}
                  height={44}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
