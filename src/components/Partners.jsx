"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

export default function Partners() {
  const [isHovered, setIsHovered] = useState(false);
  const sliderRef = useRef(null);

  // Partner logos array (using the same logo for demonstration)
  const partners = [
    { id: 1, src: "/logo.png", alt: "Partner 1", width: 120, height: 40 },
    { id: 2, src: "/logo.png", alt: "Partner 2", width: 120, height: 40 },
    { id: 3, src: "/logo.png", alt: "Partner 3", width: 120, height: 40 },
    { id: 4, src: "/logo.png", alt: "Partner 4", width: 120, height: 40 },
    { id: 5, src: "/logo.png", alt: "Partner 5", width: 120, height: 40 },
    { id: 6, src: "/logo.png", alt: "Partner 6", width: 120, height: 40 },
    { id: 7, src: "/logo.png", alt: "Partner 7", width: 120, height: 40 },
    { id: 8, src: "/logo.png", alt: "Partner 8", width: 120, height: 40 },
    { id: 9, src: "/logo.png", alt: "Partner 9", width: 120, height: 40 },
    { id: 10, src: "/logo.png", alt: "Partner 10", width: 120, height: 40 },
    { id: 11, src: "/logo.png", alt: "Partner 11", width: 120, height: 40 },
    { id: 12, src: "/logo.png", alt: "Partner 12", width: 120, height: 40 },
  ];

  // Duplicate partners for infinite scroll effect
  const duplicatedPartners = [...partners, ...partners, ...partners];

  // Animation variants for the slider
  const sliderVariants = {
    animate: {
      x: [0, -1920], // Adjust this value based on your total width
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      },
    },
  };

  return (
    <section className="bg-white py-15 border-t border-white/10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-5xl  uppercase font-bold bg-clip-text text-transparent bg-gradient-to-r from-black via-red-600 to-gray-900">
            Trusted  Partners
          </h2>
        {/* Slider Container */}
        <div 
          className="relative mt-12"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
        
          {/* Slider */}
          <motion.div
            ref={sliderRef}
            variants={sliderVariants}
            animate={isHovered ? "initial" : "animate"}
            className="flex gap-10 items-center"
            style={{ width: "fit-content" }}
          >
            {duplicatedPartners.map((partner, index) => (
              <motion.div
                key={`${partner.id}-${index}`}
                className="flex-shrink-0 group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative overflow-hidden rounded-lg">
                  {/* Grayscale filter with transition */}
                  <div className="transition-all duration-300 grayscale hover:grayscale-0">
                    <Image
                      src={partner.src}
                      alt={partner.alt}
                      width={partner.width}
                      height={partner.height}
                      className="object-contain"
                    />
                  </div>
                  
                  {/* Optional: Subtle overlay effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}