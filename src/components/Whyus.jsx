"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

export default function Whyus() {
  // Icons as components to match your style
  const RocketIcon = () => (
    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );

  const TargetIcon = () => (
    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  const ScaleIcon = () => (
    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
    </svg>
  );

  const SpeedIcon = () => (
    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  const features = [
    {
      id: 1,
      title: "Launch 8x Faster",
      description: "From strategy call to App Store in 3 weeks. No 6-month timelines. No endless meetings. Just your app, live, with real users testing it.",
      icon: RocketIcon,
      highlight: "Rapid Launch"
    },
    {
      id: 2,
      title: "Right Tech Stack",
      description: "We match your app to the perfect stack - FlutterFlow, Bubble, Glide, or custom code. Honest recommendations, not what's easiest for us.",
      icon: TargetIcon,
      highlight: "Perfect Match"
    },
    {
      id: 3,
      title: "Built to Scale",
      description: "Production-ready from day one. Full code ownership. Scale to millions of users. Iterate based on real data, not assumptions.",
      icon: ScaleIcon,
      highlight: "Enterprise Ready"
    },
    {
      id: 4,
      title: "Cost-Effective",
      description: "Save up to 60% compared to traditional development while getting enterprise-grade quality and performance.",
      icon: SpeedIcon,
      highlight: "Smart Investment"
    }
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with fade-in animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <SectionHeader
            heading="Why Ahmtech"
            description="Your Rapid Launch Partner, Built for Founders"
            gradientHeading={true}
            gradientFrom="from-black"
            gradientVia="via-red-600"
            gradientTo="to-gray-900"
          />
        </motion.div>
        
        {/* Features Grid - 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Glow effect on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Card */}
                <div className="relative bg-gradient-to-br from-gray-100 to-white p-6 rounded-xl border shadow-sm border-white/10 group-hover:border-red-600/30 transition-all duration-300 h-full flex flex-col">
                  
                  {/* Icon with background */}
                  <div className="w-12 h-12 bg-red-600/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent />
                  </div>

                  {/* Highlight/Subtitle - Manrope font */}
                  <p className="font-['Manrope'] text-red-600 text-xs font-semibold uppercase tracking-wider mb-2">
                    {feature.highlight}
                  </p>

                  {/* Title - Marcellus font */}
                  <h3 className="font-['Marcellus'] text-lg font-bold text-black mb-3 leading-tight">
                    {feature.title}
                  </h3>

                  {/* Description - Manrope font */}
                  <p className="font-['Manrope'] text-gray-400 text-sm leading-relaxed flex-grow z-10">
                    {feature.description}
                  </p>

                  {/* Animated Number Background - Marcellus font */}
                  <div className="font-['Marcellus'] absolute bottom-3 right-4 text-6xl font-black text-gray-200 select-none z-0">
                    {(index + 1).toString().padStart(2, '0')}
                  </div>

                  {/* Bottom accent line on hover */}
                  <motion.div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-red-600 to-purple-500 group-hover:w-1/2 transition-all duration-300"
                    initial={{ width: 0 }}
                    whileHover={{ width: "50%" }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Button - Manrope font */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="font-['Manrope'] btn-primary">
            Talk to an Expert
          </button>
        </motion.div>
      </div>
    </section>
  );
}