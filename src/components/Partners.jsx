"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import SectionHeader from "./SectionHeader";

export default function Partners() {
  const topSliderRef = useRef(null);
  const bottomSliderRef = useRef(null);
  const statsRef = useRef(null);
  const topControls = useAnimation();
  const bottomControls = useAnimation();
  const isInView = useInView(statsRef, { once: true, margin: "-100px" });
  
  // State for animated numbers
  const [counts, setCounts] = useState({
    partners: 0,
    projects: 0,
    satisfaction: 0
  });

  // Stats data with numeric values
  const stats = [
    { id: 1, value: 500, suffix: "+", label: "Global Partners", key: "partners" },
    { id: 2, value: 500, suffix: "+", label: "Projects Completed", key: "projects" },
    { id: 3, value: 99, suffix: "%", label: "Client Satisfaction", key: "satisfaction" },
  ];

  // Partner logos array
  const partners = [
    { id: 1, src: "/logo.png", alt: "Partner 1", width: 210, height: 70 },
    { id: 2, src: "/logo.png", alt: "Partner 2", width: 210, height: 70 },
    { id: 3, src: "/logo.png", alt: "Partner 3", width: 210, height: 70 },
    { id: 4, src: "/logo.png", alt: "Partner 4", width: 210, height: 70 },
    { id: 5, src: "/logo.png", alt: "Partner 5", width: 210, height: 70 },
    { id: 6, src: "/logo.png", alt: "Partner 6", width: 210, height: 70 },
    { id: 7, src: "/logo.png", alt: "Partner 7", width: 210, height: 70 },
    { id: 8, src: "/logo.png", alt: "Partner 8", width: 210, height: 70 },
    { id: 9, src: "/logo.png", alt: "Partner 9", width: 210, height: 70 },
    { id: 10, src: "/logo.png", alt: "Partner 10", width: 210, height: 70 },
  ];

  // Calculate total width for smooth infinite scroll
  const partnerWidth = 210; // width
  const gap = 40; // gap-10 = 2.5rem = 40px
  const totalWidth = (partnerWidth + gap) * partners.length;

  // Duplicate partners for infinite scroll effect
  const duplicatedPartners = [...partners, ...partners, ...partners, ...partners];

  // Start slider animations automatically
  useEffect(() => {
    topControls.start({
      x: [0, -totalWidth],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 40,
          ease: "linear",
          repeatDelay: 0,
        },
      },
    });

    bottomControls.start({
      x: [-totalWidth, 0],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 40,
          ease: "linear",
          repeatDelay: 0,
        },
      },
    });
  }, [topControls, bottomControls, totalWidth]);

  // Animate numbers when stats come into view
  useEffect(() => {
    if (isInView) {
      const duration = 2000; // 2 seconds
      const steps = 60; // 60fps
      const interval = duration / steps;
      let step = 0;

      const timer = setInterval(() => {
        step++;
        const progress = Math.min(step / steps, 1);
        
        // Easing function for smooth animation
        const eased = 1 - Math.pow(1 - progress, 3); // Cubic ease-out
        
        setCounts({
          partners: Math.min(Math.floor(500 * eased), 500),
          projects: Math.min(Math.floor(500 * eased), 500),
          satisfaction: Math.min(Math.floor(99 * eased), 99)
        });

        if (progress >= 1) {
          clearInterval(timer);
        }
      }, interval);

      return () => clearInterval(timer);
    }
  }, [isInView]);

  return (
    <section className="bg-white py-20 border-t border-white/10 overflow-hidden">
      <div className=" mx-auto px-0">
        {/* Header with fade-in animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <SectionHeader
            smallHeading="Our Network"
            heading="Trusted Partners"
            description="We collaborate with industry-leading companies to deliver exceptional results"
            gradientHeading={true}
            gradientFrom="from-black"
            gradientVia="via-red-600"
            gradientTo="to-gray-900"
          />
        </motion.div>

        {/* First Slider - Left to Right */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative mt-8 mb-12"
        >
          {/* Gradient fade edges for smooth appearance/disappearance */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          <motion.div
            ref={topSliderRef}
            animate={topControls}
            className="flex gap-10 items-center"
            style={{ width: "fit-content", willChange: "transform" }}
          >
            {duplicatedPartners.map((partner, index) => (
              <motion.div
                key={`top-${partner.id}-${index}`}
                className="flex-shrink-0 group cursor-pointer"
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <div className="relative overflow-hidden rounded-lg">
                  {/* Grayscale filter with smooth transition */}
                  <motion.div
                    whileHover={{ filter: "grayscale(0%)" }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="grayscale"
                  >
                    <Image
                      src={partner.src}
                      alt={partner.alt}
                      width={partner.width}
                      height={partner.height}
                      className="object-contain"
                      priority={index < 10}
                    />
                  </motion.div>
                  
                  {/* Smooth shine effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "200%" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Second Slider - Right to Left */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="relative mt-8"
        >
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          <motion.div
            ref={bottomSliderRef}
            animate={bottomControls}
            className="flex gap-10 items-center"
            style={{ width: "fit-content", willChange: "transform" }}
          >
            {duplicatedPartners.map((partner, index) => (
              <motion.div
                key={`bottom-${partner.id}-${index}`}
                className="flex-shrink-0 group cursor-pointer"
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <div className="relative overflow-hidden rounded-lg">
                  {/* Grayscale filter with smooth transition */}
                  <motion.div
                    whileHover={{ filter: "grayscale(0%)" }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="grayscale"
                  >
                    <Image
                      src={partner.src}
                      alt={partner.alt}
                      width={partner.width}
                      height={partner.height}
                      className="object-contain"
                      priority={index < 10}
                    />
                  </motion.div>
                  
                  {/* Smooth shine effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "200%" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Stats Section with counting numbers */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex items-center justify-center flex-wrap sm:gap-4 gap-8 mt-20 px-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.6, 
              delay: 0,
              type: "spring",
              stiffness: 80,
              damping: 12
            }}
            className="text-center flex items-center gap-5 justify-center"
          >
            <motion.div
              className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-black via-red-600 to-gray-900"
              style={{ fontFamily: 'var(--font-marcellus)' }}
            >
              {counts.partners}+
            </motion.div>
            <motion.div 
              className="text-gray-600 text-sm md:text-base uppercase tracking-wider"
              style={{ fontFamily: 'var(--font-manrope)' }}
            >
              Global Partners
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.6, 
              delay: 0.1,
              type: "spring",
              stiffness: 80,
              damping: 12
            }}
            className="text-center flex items-center gap-5 justify-center"
          >
            <motion.div
              className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-black via-red-600 to-gray-900"
              style={{ fontFamily: 'var(--font-marcellus)' }}
            >
              {counts.projects}+
            </motion.div>
            <motion.div 
              className="text-gray-600 text-sm md:text-base uppercase tracking-wider"
              style={{ fontFamily: 'var(--font-manrope)' }}
            >
              Projects Completed
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.6, 
              delay: 0.2,
              type: "spring",
              stiffness: 80,
              damping: 12
            }}
            className="text-center flex items-center gap-5 justify-center"
          >
            <motion.div
              className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-black via-red-600 to-gray-900"
              style={{ fontFamily: 'var(--font-marcellus)' }}
            >
              {counts.satisfaction}%
            </motion.div>
            <motion.div 
              className="text-gray-600 text-sm md:text-base uppercase tracking-wider"
              style={{ fontFamily: 'var(--font-manrope)' }}
            >
              Client Satisfaction
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}