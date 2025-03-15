// * Component-ui
import Button from "../ui/Button";
import Input from "../ui/Input";

// * Img
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-t from-[#7E05A6] to-[#281030] h-[636px] flex flex-col mt-30">
      <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 bg-gradient-to-t from-[#890C48] to-[#D8247B] w-[1268px] h-[196px] flex justify-between items-center rounded-2xl">
        <div className="text-[#FEBFF8] w1/2 pl-12">
          <p className="text-sm">Ready for a clutter-free life?</p>
          <h1 className="text-4xl">
            Sign up for our newsletter and start your transformation!
          </h1>
        </div>
        <div className="w1/2 pr-12">
          <div className="flex space-x-4">
            <Input placeholder="Email" className="!w-[315px]" />
            <Button textColor="#281030" bgColor="#FEBFF8">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
      <div className="text-[#DEA5FF] text-center flex flex-grow flex-col justify-center">
        <p className="text-3xl">flylady premium</p>
        <p className="text-6xl">Download the Official App today!</p>
        <div className="flex justify-center gap-8 mt-8">
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
      <div className="flex justify-between items-center w-full px-12 mt-auto mb-10">
        {/* RECOLOR SVG */}
        <div>
          <Image src="lockupFly.svg" alt="Fly" width={64} height={48} />
        </div>
        <div className="text-base text-[#FEBFF8] flex gap-4">
          <Button className="bg-[#28103040]/25 flex items-center gap-2">
            <Image src="twitter.svg" alt="twtter logo" width={24} height={24} />
            <p>Twitter</p>
          </Button>
          <Button className="bg-[#28103040]/25 flex items-center gap-2">
            <Image
              src="facebook.svg"
              alt="facebook logo"
              width={24}
              height={24}
            />
            <p>Facebook</p>
          </Button>
          <Button className="bg-[#28103040]/25 flex items-center gap-2">
            <Image
              src="youtube.svg"
              alt="youtube logo"
              width={24}
              height={24}
            />
            <p>Youtube</p>
          </Button>
        </div>
        <div className="text-[#FEBFF8] text-xs">
          © 2025 FlyLady and Company, Inc.
        </div>
      </div>
    </footer>
  );
}
