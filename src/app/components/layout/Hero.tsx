import Image from "next/image";
import Button from "../ui/Button";
import Link from "next/link";
import ModalMenu from "../shared/ModalMenu";

export default function Hero() {
  return (
    <div className="container mx-auto flex items-center justify-between px-4 py-4">
      <Link href="/#">
        <Image
          src="/lockupFly.svg"
          alt="flylady"
          width={212}
          height={53}
          className="lockup-container"
        />
      </Link>
      <div className="text-base font-bold space-x-8 text-[#522E5E] hide-on-small">
        <Link href="/#Features">Features</Link>
        <Link href="/#Lessons">Lessons</Link>
        <Link href="/#Flylady">The FlyLady</Link>
      </div>
      <Button className="bg-gradient-to-r from-[#D8247B] to-[#7E05A6] hide-on-small">
        Download App
      </Button>
      <ModalMenu />
    </div>
  );
}
