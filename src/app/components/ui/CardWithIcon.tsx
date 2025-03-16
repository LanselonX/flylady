// * Img
import Image from "next/image";
import Link from "next/link";

type CardProps = {
  slug: string;
  iconSrc: string;
  iconAlt: string;
  iconBgColor: string;
  iconLabel: string;
  textColor: string;
  title: string;
  bgImg: string;
  description: string;
};

const CardWithIcon = ({
  slug,
  iconSrc,
  iconAlt,
  iconBgColor,
  iconLabel,
  textColor,
  title,
  bgImg,
  description,
}: CardProps) => {
  return (
    <Link href={`/blog/${slug}`}>
      <div className="md:w-full px-2">
        <div
          style={{ backgroundColor: bgImg }}
          className="w-full h-[201px] rounded-2xl mb-4"
        />
        <div
          style={{ backgroundColor: iconBgColor }}
          className="flex items-center max-w-[142px] h-[24px]"
        >
          <div className="flex justify-center items-center">
            <Image src={iconSrc} alt={iconAlt} width={24} height={24} />
            <p
              className="text-xs whitespace-nowrap ml-1"
              style={{ color: textColor }}
            >
              {iconLabel}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 text-[#522E5E] py-2">
          <h1 className="text-3xl">{title}</h1>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default CardWithIcon;
