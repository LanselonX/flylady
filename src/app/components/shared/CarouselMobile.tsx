"use client";

import { motion, useMotionValue, useAnimation } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { CarouselMobileTypes } from "@/app/types/CarouselMobileTypes";
import cn from "classnames";
import Image from "next/image";

export function CarouselMobile() {
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      setConstraints({
        right: 0,
        left: -(CarouselMobileTypes.length - 1) * containerWidth,
      });
    }
  }, [CarouselMobileTypes.length]);

  const handleDragEnd = () => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const newIndex = Math.min(
        CarouselMobileTypes.length - 1,
        Math.max(0, Math.round(-x.get() / containerWidth))
      );
      setCurrentIndex(newIndex);

      controls.start({ x: -newIndex * containerWidth });
    }
  };

  return (
    <div className="mx-auto mt-8 w-full max-w-md px-4">
      <h2 className="text-center text-xl text-[#7E05A6]">
        Based on the proven and loved FlyLady cleaning system
      </h2>

      <div className="relative mt-6 w-full overflow-hidden" ref={containerRef}>
        <motion.div
          className="flex"
          style={{ x }}
          drag="x"
          dragConstraints={constraints}
          dragElastic={0.3}
          onDragEnd={handleDragEnd}
          animate={controls}
        >
          {CarouselMobileTypes.map((slide, i) => (
            <div key={i} className="w-full flex-shrink-0">
              <div className="flex flex-col items-center gap-4 px-4 text-center text-base text-[#522E5E]">
                <p>{slide.text}</p>
                <Image
                  src={slide.image.src}
                  alt={slide.image.alt}
                  width={slide.image.width}
                  height={slide.image.height}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="mt-4 flex justify-center gap-5">
        {CarouselMobileTypes.map((_, i) => (
          <div
            key={i}
            className={cn("h-4 w-4 rounded-full transition-colors", {
              "bg-[#7E05A6]": i === currentIndex,
              "bg-[#7E05A6]/15": i !== currentIndex,
            })}
          />
        ))}
      </div>
    </div>
  );
}
