// * Component-ui
import CardWithIcon from "../ui/CardWithIcon";

// * Img
import Image from "next/image";

export default function DiscussionsSection() {
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="w-[1264px] h-[436px] bg-[#FFF9FA] flex items-center gap-24 px-12">
          <div className="w-[624px] h-[324px] bg-[#FFEBF0] md:w-1/2 rounded-2xl"></div>
          <div>
            <div className="flex items-center w-[144px] h-[24px] bg-[#FFF8E7]">
              <Image src="star.svg" alt="star" width={24} height={24} />
              <p className="text-xs text-[#DEA516]">MORNING MUSING</p>
            </div>
            <h1 className="text-5xl text-[#522E5E] w-full md:w-1/2">
              The Stomach Bug Has Invaded
            </h1>
            <p className="text-sm text-[#522E5E] mt-6">
              Our home has been hit with a nasty stomach bug. I can't find your
              essay about this. Can you help me? ...
            </p>
          </div>
        </div>
      </div>
      {/* SECOND PART PINK */}
      <div className="container mx-auto px-32">
        <div className="flex justify-center gap-15 text-[#522E5E] py-8">
          <CardWithIcon
            iconBgColor="#E4F0FF"
            iconSrc="comment.svg"
            iconAlt="comment"
            iconLabel="DAILY MISSION"
            textColor="#427CC6"
            title="The Stomach Bug Has Invaded"
            description="Our home has been hit with a nasty stomach bug. I can't find your essay about this. Can you help me? ..."
          />
          <CardWithIcon
            iconBgColor="#FFF8E7"
            iconSrc="butterfly.svg"
            iconAlt="butterfly"
            iconLabel="ASK FLYLADY"
            textColor="#DEA516"
            title="Reading the Bible in a Month"
            description="This month we are going to read the whole Bible in 30 days!"
          />
          <CardWithIcon
            iconBgColor="#FFEDFD"
            iconSrc="rStar.svg"
            iconAlt="red star"
            iconLabel="TESTIMONIALS"
            textColor="#D8247B"
            title="February Habit #24 I Actually Stood There"
            description="I just started flying again after trying to years ago. But I was such a perfectionist I could not give myself any slack and quit the program."
          />
        </div>
      </div>
    </div>
  );
}
