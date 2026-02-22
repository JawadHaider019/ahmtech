"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";


export default function FinalCTA() {
  return (
    <section className="relative -translate-y-10 py-16 overflow-hidden mx-auto px-4">
      {/* Gradient Background Container */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-red-600 to-black max-w-6xl rounded-4xl h-[350px]" style={{ left: '50%', transform: 'translateX(-50%)', width: 'calc(100% - 2rem)' }} />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeader
            smallHeading="LIMITED AVAILABILITY"
            heading="Ready to Launch Your Dream Project?"
            description="Join 100+ founders who launched their MVPs in 4 weeks. Let's build something extraordinary together."
            gradientHeading={true}
            gradientFrom="from-white"
            gradientVia="via-gray-100"
            gradientTo="to-gray-300"
            smallHeadingColor="text-white"
            descriptionColor="text-gray-200"
          />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
        >
          {/* Primary CTA */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary"
          >
        
              Get Your Free Consultation
          
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "200%" }}
              transition={{ duration: 0.8 }}
            />
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}