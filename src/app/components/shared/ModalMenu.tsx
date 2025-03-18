import Image from "next/image";
import Header from "../layout/Header";
import Link from "next/link";
import Button from "../ui/Button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet";

export default function ModalMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/fi-rr-menu-burger.svg"
          alt="burger"
          width={24}
          height={24}
          className="block sm:hidden cursor-pointer"
        />
      </SheetTrigger>

      <SheetContent
        side="right"
        className={`
          fixed inset-0 
          !w-screen !h-screen 
          !max-w-none !rounded-none 
          !p-0 !m-0 !border-0 !shadow-none 
          overflow-y-auto 
          bg-gradient-to-b from-[#281030] to-[#7E05A6]
        `}
      >
        <Header />

        <div className="flex items-center justify-between px-8">
          <Image src="/pinkFly.svg" alt="pink" width={188} height={48} />
          <SheetClose asChild>
            <Image src="/cross.svg" alt="cross" width={24} height={24} />
          </SheetClose>
        </div>

        <SheetHeader>
          <SheetTitle className="sr-only">Menu</SheetTitle>
          <SheetDescription className="sr-only">blank</SheetDescription>
        </SheetHeader>

        <nav className="my-4 flex gap-10 px-10 flex-col space-y-4 text-2xl text-[#DEA5FF]">
          <div>
            <SheetClose asChild>
              <Link href="/#Features">Features</Link>
            </SheetClose>
            <hr className="border-[#FFEFFD]/[0.22] mt-8" />
          </div>
          <div>
            <SheetClose asChild>
              <Link href="/#Lessons">Lessons</Link>
            </SheetClose>
            <hr className="border-[#FFEFFD]/[0.22] mt-8" />
          </div>
          <div>
            <SheetClose asChild>
              <Link href="/#Flylady">The FlyLady</Link>
            </SheetClose>
            <hr className="border-[#FFEFFD]/[0.22] mt-8" />
          </div>
        </nav>

        <div className="flex flex-col justify-center items-center h-full mt-6">
          <p className="text-sm text-[#DEA5FF]">
            DOWNLOAD THE OFFICIAL APP TODAY!
          </p>
          <div className="flex justify-center gap-8 my-8">
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
          <div className="mb-6">
            <p className="text-sm text-[#DEA5FF]">FOLLOW US ON</p>
          </div>
          <div className="text-base text-[#FEBFF8] flex gap-4 mb-8">
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
      </SheetContent>
    </Sheet>
  );
}
