"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function InspirationalSection() {
  const slideContent = (
    <>
      <p className="text-4xl sm:text-6xl text-[#FFF6F8]">
        Don’t sweat the small stuff
      </p>
      <Image src="starvector.svg" alt="star vector" width={34} height={32} />
      <p className="text-4xl sm:text-6xl text-[#FFF6F8]">
        Love like there’s no tomorrow
      </p>
    </>
  );

  return (
    <div className="overflow-hidden bg-gradient-to-r from-[#D8247B] to-[#7E05A6] sm:py-10 py-4">
      <motion.div
        className="flex items-center gap-12 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 10,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        <div className="flex gap-12 items-center">{slideContent}</div>
        <div className="flex gap-12 items-center">{slideContent}</div>
        <div className="flex gap-12 items-center">{slideContent}</div>
      </motion.div>
    </div>
  );
}
