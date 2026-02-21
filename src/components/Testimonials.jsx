"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "./SectionHeader";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote: "Ahmtech didn't just build our app—they became true partners in our vision. The speed and quality allowed us to launch in weeks instead of months.",
      author: "Alexander Chen",
      role: "Founder & CEO",
      company: "FinTech Labs",
      image: "/Ahmad.png",
      rating: 5,
      location: "Singapore"
    },
    {
      id: 2,
      quote: "The team's ability to translate complex requirements into an elegant, scalable solution was remarkable. Enterprise-grade quality at startup speed.",
      author: "Victoria Laurent",
      role: "Co-Founder",
      company: "Luxe Retail",
     image: "/Ahmad.png",
      rating: 5,
      location: "Paris"
    },
    {
      id: 3,
      quote: "Working with Ahmtech felt like having an extension of our own team. Their expertise combined with genuine care for our success made all the difference.",
      author: "Marcus Webb",
      role: "CTO",
      company: "HealthTech Solutions",
 image: "/Ahmad.png",
      rating: 5,
      location: "London"
    },
    {
      id: 4,
      quote: "From concept to launch in under 4 weeks—absolutely incredible. The platform handles thousands of users flawlessly.",
      author: "Sophia Rahman",
      role: "Founder",
      company: "EduPlatform",
      image: "/Ahmad.png",
      rating: 5,
      location: "Dubai"
    },
    {
      id: 5,
      quote: "Their attention to detail and commitment to excellence set them apart. Every interaction felt premium and purposeful.",
      author: "James Mitchell",
      role: "Product Director",
      company: "Innovate Labs",
    image: "/Ahmad.png",
      rating: 5,
      location: "New York"
    },
    {
      id: 6,
      quote: "A rare find—a team that combines technical excellence with genuine business understanding. They speak founder language.",
      author: "Elena Rodriguez",
      role: "Founder",
      company: "BeautyTech",
    image: "/Ahmad.png",
      rating: 5,
      location: "Milan"
    }
  ];

  // Duplicate testimonials for infinite scroll effect
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  // Animation variants for continuous scrolling
  const scrollVariants = {
    animate: {
      x: [0, -1920],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 50,
          ease: "linear",
        },
      },
    },
  };

  // Card animation variants - only entry animations, no hover
  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.6
      }
    }
  };

  // Quote Icon SVG Component
  const QuoteIcon = () => (
    <svg 
      className="w-12 h-12 text-red-600/20" 
      fill="currentColor" 
      viewBox="0 0 24 24"
    >
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  );

  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Luxury Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-[0.02]" 
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #000 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeader
            smallHeading="Client Stories"
            heading="Trusted by Innovators"
            description="What our partners say about their journey with us"
            gradientHeading={true}
            gradientFrom="from-black"
            gradientVia="via-red-600"
            gradientTo="to-gray-900"
            smallHeadingColor="text-red-600"
            descriptionColor="text-gray-600"
          />
        </motion.div>

        {/* Running Carousel Container */}
        <div className="mt-16 relative">
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          {/* Running carousel */}
          <div className="overflow-hidden">
            <motion.div
              variants={scrollVariants}
              animate="animate"
              className="flex gap-6"
              style={{ width: "fit-content" }}
            >
              {duplicatedTestimonials.map((testimonial, index) => (
                <motion.div
                  key={`${testimonial.id}-${index}`}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="min-w-[350px] md:min-w-[400px] lg:min-w-[450px]"
                >
                  {/* Testimonial Card */}
                  <div className="relative h-[320px] my-5">
                    {/* Card - No hover effects */}
                    <div className="relative h-full bg-white/90 backdrop-blur-sm p-8 rounded-2xl border border-gray-100 shadow-lg">
                      
                      {/* Quote Icon with entry animation */}
                      <motion.div 
                        className="absolute top-6 right-6"
                        initial={{ scale: 0, rotate: -45 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{ 
                          type: "spring",
                          stiffness: 200,
                          damping: 15,
                          delay: 0.2 
                        }}
                        viewport={{ once: true }}
                      >
                        <QuoteIcon />
                      </motion.div>

                      {/* Rating stars with staggered entry animation */}
                      <motion.div 
                        className="flex gap-1 mb-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      >
                        {[...Array(5)].map((_, i) => (
                          <motion.svg
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ 
                              delay: 0.1 + i * 0.05,
                              type: "spring",
                              stiffness: 300
                            }}
                            viewport={{ once: true }}
                            className={`w-5 h-5 ${
                              i < testimonial.rating
                                ? 'text-yellow-400'
                                : 'text-gray-200'
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </motion.svg>
                        ))}
                      </motion.div>

                      {/* Quote with fade-in animation */}
                      <motion.blockquote 
                        className="font-['Manrope'] text-gray-700 text-sm leading-relaxed mb-4 line-clamp-3"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        "{testimonial.quote}"
                      </motion.blockquote>

                      {/* Author info with slide-up animation */}
                      <motion.div 
                        className="flex items-center gap-4 pt-4 border-t border-gray-100"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        {/* Author image - no hover effects */}
                        <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-red-600/20 flex-shrink-0">
                          {testimonial.image ? (
                            <Image
                              src={testimonial.image}
                              alt={testimonial.author}
                              fill
                              className="object-cover"
                            />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                              <span className="text-xl text-gray-400">
                                {testimonial.author.charAt(0)}
                              </span>
                            </div>
                          )}
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <h4 className="font-['Marcellus'] text-lg font-bold text-gray-900 truncate">
                            {testimonial.author}
                          </h4>
                          <p className="font-['Manrope'] text-sm text-gray-600 truncate">
                            {testimonial.role}
                          </p>
                          <p className="font-['Manrope'] text-xs text-gray-400 mt-1">
                            {testimonial.company} · {testimonial.location}
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}