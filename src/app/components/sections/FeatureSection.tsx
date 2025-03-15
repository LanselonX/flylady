// * Img
import Image from "next/image";

export default function FeatureSection() {
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="bg-gradient-to-b from-[#BDDAFF] to-[#E0ECFC] w-[1264px] h-[590px] flex items-center justify-between px-16">
          <div className="w-full md:w-1/2 space-y-3">
            <h2 className="text-3xl text-[#005DD3]">Zone by Zone:</h2>
            <h1 className="text-6xl text-[#005DD3]">
              Conquer Home Cleaning Without Overwhelm
            </h1>
            <p className="text-xl text-[#0A3976] max-w-lg">
              By breaking the home down into zones, we get the home clean one
              area at a time without getting overwhelmed
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
      </div>

      <div className="flex items-center justify-center">
        <div className="bg-gradient-to-b from-[#FFECBD] to-[#FFF8E7] w-[1264px] h-[590px] flex items-center px-16 gap-24">
          <div className="w-full md:w-1/2">
            <Image
              className="flex-shrink-0"
              src="yellowzone.svg"
              alt="yellow zone"
              width={487}
              height={461}
            />
          </div>
          <div className="md:w1/2 space-y-3">
            <h2 className="text-3xl text-[#82600C]">Tailored Living:</h2>
            <h1 className="text-6xl text-[#82600C]">
              Customize Each Room to Fit Your Unique Style
            </h1>
            <p className="text-xl text-[#A1843D]">
              Effortlessly customize each room, section, and feature to match
              your unique preferences and household settings.
            </p>
            <div className="flex justify-start gap-8 mt-8">
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
      </div>
      <div className="flex items-center justify-center">
        <div className="bg-gradient-to-b from-[#FEBFF8] to-[#FFEDFD] w-[1264px] h-[590px] flex items-center justify-between px-16">
          <div className="w-full md:w-1/2 space-y-3">
            <h2 className="text-3xl text-[#890C48]">Task Triumph:</h2>
            <h1 className="text-6xl text-[#890C48]">
              Track Your Efficiency, Gain Feedback, and Unlock Achievements
            </h1>
            <p className="text-xl text-[##890C48] max-w-lg">
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
    </div>
  );
}
