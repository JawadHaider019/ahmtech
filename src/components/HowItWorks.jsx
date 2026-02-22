"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import SectionHeader from "./SectionHeader";

export default function HowItWorks() {
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and when window resizes
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const steps = [
    {
      id: 1,
      number: "01",
      title: "Discovery Call",
      description: "We dive deep into your project to understand your goals, your users, and what success looks like for you."
    },
    {
      id: 2,
      number: "02",
      title: "UI/UX Design",
      description: "We map your entire user journey and create rough UI wireframes in Figma. You'll see everything before we even start developing."
    },
    {
      id: 3,
      number: "03",
      title: "Development",
      description: "We build your app over 3 weeks with constant updates throughout, so you never have to ask about the progress on that feature you love."
    },
    {
      id: 4,
      number: "04",
      title: "Quality Assurance",
      description: "The next week is dedicated to QA testing. We catch the bugs before your users do, so they get something that actually works."
    },
    {
      id: 5,
      number: "05",
      title: "Launch and support",
      description: "Once everything is done, we launch your apps, and stick with you for 30 days in case you need any support from us."
    }
  ];

  // Variants for animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.6
      }
    }
  };

  const numberVariants = {
    hidden: { 
      opacity: 0,
      scale: 0,
    },
    visible: { 
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.2
      }
    }
  };

  // Mobile-friendly variants
  const cardVariants = {
    hidden: { 
      opacity: 0,
      x: -20
    },
    visible: { 
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-16 md:py-20 bg-white relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <SectionHeader
            heading="How It Works"
            description="Your Rapid Launch Partner, Built for Founders"
            gradientHeading={true}
            gradientFrom="from-black"
            gradientVia="via-red-600"
            gradientTo="to-gray-900"
          />
        </motion.div>

        {/* Steps Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px", amount: 0.1 }}
          className="relative mt-8 md:mt-16"
        >
          {/* Vertical Line - Desktop only */}
          {!isMobile && (
            <motion.div 
              className="absolute left-1/2 -translate-x-1/2 w-[2px] h-full hidden md:block"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              style={{ transformOrigin: "top" }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-red-600 via-red-400 to-red-600" />
              <div className="absolute inset-0 blur-[2px] bg-red-600/30" />
            </motion.div>
          )}

          {/* Mobile vertical line */}
          {isMobile && (
            <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-red-600/20 via-red-600 to-red-600/20 md:hidden" />
          )}

          {steps.map((step, index) => {
            // For mobile: simple left-aligned layout
            // For desktop: alternating left/right
            const isLeft = !isMobile && index % 2 === 0;
            
            return (
              <motion.div
                key={step.id}
                variants={itemVariants}
                className={`relative flex flex-col ${
                  isMobile ? 'ml-12 mb-8' : `md:flex-row items-start gap-8 mb-8 last:mb-0 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`
                }`}
              >
                {/* Number Circle */}
                <motion.div 
                  className={`${
                    isMobile 
                      ? 'absolute -left-12 top-0' 
                      : 'absolute left-0 md:left-1/2 md:-translate-x-1/2 -top-2 md:top-1/2 md:-translate-y-1/2 z-10'
                  }`}
                  variants={numberVariants}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative w-12 h-12 rounded-full flex items-center justify-center shadow-lg cursor-default"
                  >
                    {/* Gradient Border */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-600 via-red-400 to-red-600 p-[2px]">
                      <div className="w-full h-full bg-white rounded-full" />
                    </div>
                    
                    {/* Number */}
                    <span className="relative z-10 font-['Marcellus'] text-transparent bg-clip-text bg-gradient-to-br from-red-600 via-red-400 to-red-600 font-bold text-lg">
                      {step.number}
                    </span>
                  </motion.div>
                </motion.div>

                {/* Content Card */}
                <div className={`w-full ${
                  isMobile 
                    ? '' 
                    : `md:w-[calc(50%-40px)] ${
                        isLeft ? 'md:pr-8' : 'md:pl-8 md:text-right'
                      }`
                }`}>
                  <motion.div
                    variants={isMobile ? cardVariants : (isLeft ? leftCardVariants : rightCardVariants)}
                    whileHover={!isMobile ? { 
                      y: -5,
                      boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
                    } : {}}
                    className="relative bg-gradient-to-br from-gray-100 to-white p-5 md:p-6 rounded-xl border border-gray-100 shadow-sm transition-all duration-300"
                  >
                    {/* Title */}
                    <h3 className="font-['Marcellus'] text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="font-['Manrope'] text-gray-600 text-sm md:text-base leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                </div>

                {/* Empty space for desktop alignment */}
                {!isMobile && <div className="hidden md:block md:w-[calc(50%-40px)]" />}
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-8 md:mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary px-6 py-3 md:px-8 md:py-4 text-sm md:text-base"
          >
            Get Your Custom Roadmap
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

// Keep these variants outside the component
const leftCardVariants = {
  hidden: { 
    opacity: 0,
    x: -50,
    rotateY: -15
  },
  visible: { 
    opacity: 1,
    x: 0,
    rotateY: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 12,
      duration: 0.8
    }
  }
};

const rightCardVariants = {
  hidden: { 
    opacity: 0,
    x: 50,
    rotateY: 15
  },
  visible: { 
    opacity: 1,
    x: 0,
    rotateY: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 12,
      duration: 0.8
    }
  }
};