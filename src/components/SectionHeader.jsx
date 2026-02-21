"use client";

import { motion } from "framer-motion";

export default function SectionHeader({
  smallHeading = "",
  heading = "",
  description = "",
  gradientHeading = true, // Always true since you're using gradient
  gradientFrom = "from-black",
  gradientVia = "via-red-600",
  gradientTo = "to-gray-900",
  // Individual color props for small heading and description only
  smallHeadingColor = "text-red-600",
  descriptionColor = "text-gray-600",
  // Optional custom classes
  className = "",
  smallHeadingClassName = "",
  headingClassName = "",
  descriptionClassName = "",
}) {
  // Gradient styles for main heading
  const headingStyles = `bg-clip-text text-transparent bg-gradient-to-r ${gradientFrom} ${gradientVia} ${gradientTo}`;

  return (
    <div className={`text-center mb-12 ${className}`}>
      {/* Small Heading - Manrope font */}
      {smallHeading && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3
            className={`font-['Manrope'] text-sm md:text-base font-semibold uppercase tracking-wider ${smallHeadingColor} mb-3 ${smallHeadingClassName}`}
            style={{ fontFamily: 'var(--font-manrope)' }}
          >
            {smallHeading}
          </h3>
        </motion.div>
      )}

      {/* Main Heading - Marcellus font with gradient */}
      {heading && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2
            className={`font-['Marcellus'] text-4xl md:text-5xl font-bold ${headingStyles} ${headingClassName}`}
            style={{ fontFamily: 'var(--font-marcellus)' }}
          >
            {heading}
          </h2>
        </motion.div>
      )}

      {/* Description - Manrope font */}
      {description && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p
            className={`font-['Manrope'] text-base md:text-lg max-w-3xl mx-auto mt-4 ${descriptionColor} ${descriptionClassName}`}
            style={{ fontFamily: 'var(--font-manrope)' }}
          >
            {description}
          </p>
        </motion.div>
      )}
    </div>
  );
}