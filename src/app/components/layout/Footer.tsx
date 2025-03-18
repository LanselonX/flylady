// * Component-ui
import Button from "../ui/Button";
import Input from "../ui/Input";

// * Img
import Image from "next/image";

export default function Footer() {
  return (
    <div>
      <div className="relative z-20 max-w-screen-lg mx-auto px-4 sm:px-0 -mb-28">
        <div className="bg-gradient-to-t from-[#890C48] to-[#D8247B] w-full h-auto lg:min-h-[196px] flex items-center rounded-2xl py-8 lg:px-6">
          <div className="text-[#FEBFF8] px-6 flex flex-col lg:flex-row items-center justify-center w-full gap-6">
            <div className="lg:w-1/2">
              <p className="text-sm">Ready for a clutter-free life?</p>
              <h1 className="text-3xl lg:text-4xl mt-2">
                Sign up for our newsletter and start your transformation!
              </h1>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-4 gap-4 lg:gap-0 w-full max-w-sm lg:max-w-none">
                <Input placeholder="Email" />
                <Button textColor="#281030" bgColor="#FEBFF8">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative bg-gradient-to-t from-[#7E05A6] to-[#281030] h-auto flex flex-col">
        <div className="text-[#DEA5FF] text-center flex flex-grow flex-col justify-center mt-62">
          <p className="text-3xl">flylady premium</p>
          <p className="text-6xl">Download the Official App today!</p>
          <div className="flex justify-center gap-8 mt-8 mb-20">
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
        <div className="flex flex-col lg:flex-row justify-between items-center w-full px-12 mt-auto mb-10 gap-8">
          <div>
            <Image src="/pinkFly.svg" alt="Fly" width={188} height={48} />
          </div>
          <div className="text-base text-[#FEBFF8] flex gap-4">
            <Button className="bg-[#28103040]/25 flex items-center gap-2">
              <Image
                src="/twitter.svg"
                alt="twtter logo"
                width={24}
                height={24}
              />
              <p>Twitter</p>
            </Button>
            <Button className="bg-[#28103040]/25 flex items-center gap-2">
              <Image
                src="/facebook.svg"
                alt="facebook logo"
                width={24}
                height={24}
              />
              <p>Facebook</p>
            </Button>
            <Button className="bg-[#28103040]/25 flex items-center gap-2">
              <Image
                src="/youtube.svg"
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
      </div>
    </div>
  );
}
