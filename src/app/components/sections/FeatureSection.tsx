// * Img
import Image from "next/image";

export default function FeatureSection() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 md:px-34 px-8">
      <div className="bg-gradient-to-b from-[#BDDAFF] to-[#E0ECFC] w-full h-full flex flex-col md:flex-row items-center justify-between sm:px-16 px-2 rounded-xl py-12">
        <div className="w-full md:w-1/1 space-y-3 max-[640px]:text-center">
          <div className="text-[#005DD3]">
            <h2 className="text-2xl sm:text-3xl">Zone by Zone:</h2>
            <h1 className="text-4xl sm:text-6xl">
              Conquer Home Cleaning Without Overwhelm
            </h1>
          </div>
          <p className="text-xl text-[#0A3976] max-w-lg">
            By breaking the home down into zones, we get the home clean one area
            at a time without getting overwhelmed
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-end">
          <Image
            src="zonebyzone.svg"
            alt="zone by zone svg"
            width={487}
            height={461}
          />
        </div>
      </div>

      <div className="bg-gradient-to-b from-[#FFECBD] to-[#FFF8E7] w-full h-full px-10 flex flex-col md:flex-row items-center rounded-xl py-12">
        <div className="w-full md:w-1/1">
          <Image
            className="flex-shrink-0"
            src="yellowzone.svg"
            alt="yellow zone"
            width={487}
            height={461}
          />
        </div>
        <div className="md:w-full space-y-3 max-[640px]:text-center">
          <div className="text-[#82600C] sm:text-start">
            <h2 className="text-2xl sm:text-3xl">Tailored Living:</h2>
            <h1 className="text-4xl sm:text-6xl">
              Customize Each Room to Fit Your Unique Style
            </h1>
          </div>
          <p className="text-xl text-[#A1843D]">
            Effortlessly customize each room, section, and feature to match your
            unique preferences and household settings.
          </p>
          <div className="flex max-[640px]:items-center flex-col md:flex-row sm:justify-start gap-8 mt-8">
            <Image
              src="/googleplay.svg"
              alt="Googleplay logo"
              width={180}
              height={52}
            />
            <Image
              src="/appstore.svg"
              alt="Appstore logo"
              width={180}
              height={52}
            />
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-[#FEBFF8] to-[#FFEDFD] w-full h-full flex flex-col md:flex-row items-center justify-between px-16 rounded-xl py-12">
        <div className="w-full md:w-1/2 space-y-4 max-[640px]:text-center">
          <div className="text-[#890C48]">
            <h2 className="text-2xl sm:text-3xl">Task Triumph:</h2>
            <h1 className="text-4xl sm:text-6xl">
              Track Your Efficiency, Gain Feedback, and Unlock Achievements
            </h1>
          </div>
          <p className="text-xl text-[#890C48] max-w-lg">
            Measure your efficiency, get feedback, stay motivated and unlock
            achievements as you conquer each task.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-end">
          <Image
            src="tailoredliving.svg"
            alt="tailoredliving svg"
            width={487}
            height={461}
          />
        </div>
      </div>
    </div>
  );
}
