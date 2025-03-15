"use client";

// * Module
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

// * Mock
import { testimonials } from "@/app/mock/testimonials";

const Carousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    if (scrollRef.current) {
      const totalWidth = scrollRef.current.scrollWidth;
      const visibleWidth = scrollRef.current.offsetWidth;
      setScrollWidth(totalWidth - visibleWidth);
    }
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        ref={scrollRef}
        className="flex gap-4"
        animate={{ x: -scrollWidth }}
        transition={{
          duration: 10,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="w-[calc(100vw/3)] h-[172px] min-w-[406px] bg-[#FFF6F8] p-4 rounded-lg shadow-md"
          >
            <p className="text-lg text-[#522E5E]">{testimonial.text}</p>
            <div className="flex items-center mt-4">
              <div className="w-8 h-8 bg-[#D9D9D9] rounded-full mr-2"></div>
              <p className="text-xl text-[#522E5E]">{testimonial.name}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Carousel;
