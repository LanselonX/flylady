// * Img
import Image from "next/image";

type CardProps = {
  iconSrc: string;
  iconAlt: string;
  iconBgColor: string;
  iconLabel: string;
  textColor: string;
  title: string;
  description: string;
};

const CardWithIcon = ({
  iconSrc,
  iconAlt,
  iconBgColor,
  iconLabel,
  textColor,
  title,
  description,
}: CardProps) => {
  return (
    <div className="md:w-1/3">
      <div
        style={{ backgroundColor: "#FFF6F8" }}
        className="w-[388px] h-[201px] rounded-2xl mb-4"
      />
      <div
        style={{ backgroundColor: iconBgColor }}
        className="flex items-center w-[108px] h-[24px]"
      >
        <Image src={iconSrc} alt={iconAlt} width={24} height={24} />
        <p className="text-xs" style={{ color: textColor }}>
          {iconLabel}
        </p>
      </div>
      <h1 className="text-3xl">{title}</h1>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default CardWithIcon;
