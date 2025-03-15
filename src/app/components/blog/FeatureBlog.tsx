// * Component-ui
import CardWithIcon from "../ui/CardWithIcon";

// * Img
import Image from "next/image";

// * Mock
import { cardsData } from "@/app/mock/cardsData";

export default function FeatureBlog() {
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
      <div className="container w-[1264px] mx-auto pt-12 pb-12">
        <div className="grid gap-6 md:grid-cols-3">
          {cardsData.map((card, index) => (
            <CardWithIcon
              key={index}
              iconSrc={card.iconSrc}
              iconAlt={card.iconAlt}
              iconBgColor={card.iconBgColor}
              iconLabel={card.iconLabel}
              textColor={card.textColor}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
