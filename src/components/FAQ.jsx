"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import SectionHeader from "./SectionHeader";

export default function FAQ() {
  const [openItems, setOpenItems] = useState([1]); // First item open by default

  const faqItems = [
    {
      id: 1,
      question: "How does your rapid launch process work?",
      answer: "Our rapid launch process is designed to get your app to market in weeks, not months. We start with a deep discovery call to understand your vision, then move to rapid prototyping where you'll see your app take shape in Figma. Development happens in 1-week sprints with daily updates, so you're never left wondering about progress. By week 4, you'll have a production-ready app in your hands."
    },
    {
      id: 2,
      question: "How fast can you really build an MVP?",
      answer: "From strategy call to App Store in just 4 weeks. This timeline includes: Week 1 - Discovery & UX design, Week 2 - UI design & prototyping, Week 3 - Core development, Week 4 - QA testing & deployment. Of course, complex projects may take longer, but we pride ourselves on being the fastest route to market without sacrificing quality."
    },
    {
      id: 3,
      question: "How much does it cost to build an app with you?",
      answer: "Our pricing is transparent and tailored to your specific needs. Most MVPs start from $15k-$25k, depending on complexity. We offer flexible payment structures: 50% upfront to begin, 25% at prototype approval, and 25% upon launch. We also offer equity-based partnerships for promising startups with limited runway."
    },
    {
      id: 4,
      question: "Do I need to have a technical background?",
      answer: "Not at all! We speak founder language, not just developer jargon. Throughout the process, we guide you through technical decisions in plain English, explaining trade-offs and recommendations so you can make informed choices. Your job is to focus on your vision and users—we handle the tech."
    },
    {
      id: 5,
      question: "What happens after you launch my app?",
      answer: "We don't disappear after launch. You get 30 days of free support to handle any bugs or tweaks. After that, we offer flexible maintenance packages or can train your in-house team. Many clients continue working with us for ongoing feature development as they scale."
    },
    {
      id: 6,
      question: "Can you work with my existing team?",
      answer: "Absolutely. We seamlessly integrate with your existing team—whether you have in-house developers, designers, or product managers. We can augment your team's capabilities, handle specific features, or take on the entire development process while your team focuses on core business."
    },
    {
      id: 7,
      question: "Do you offer refunds if I'm not satisfied?",
      answer: "We're confident in our process, but we also understand that sometimes things don't work out. We offer a satisfaction guarantee: if after the first week (discovery & design) you're not completely happy with our direction, we'll refund your deposit minus the work completed. Your satisfaction is our priority."
    },
    {
      id: 8,
      question: "What technologies do you specialize in?",
      answer: "We're technology-agnostic—we choose the right tool for your specific needs. Our stack includes React/Next.js for web apps, React Native/Flutter for mobile, Node.js/Python for backend, and various no-code tools like FlutterFlow and Bubble for rapid MVPs. We're honest about what will serve you best long-term."
    }
  ];

  // Toggle FAQ item
  const toggleItem = (id) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(itemId => itemId !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Luxury Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-l from-red-600/5 via-amber-200/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-gradient-to-r from-red-600/5 via-amber-200/5 to-transparent rounded-full blur-3xl" />
        
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-[0.02]" 
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #000 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeader
            smallHeading="Got Questions?"
            heading="Frequently Asked Questions"
            description="Everything you need to know about working with us"
            gradientHeading={true}
            gradientFrom="from-black"
            gradientVia="via-red-600"
            gradientTo="to-gray-900"
            smallHeadingColor="text-red-600"
            descriptionColor="text-gray-600"
          />
        </motion.div>

        {/* FAQ Items */}
        <motion.div 
          className="mt-12 space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {faqItems.map((item, index) => {
            const isOpen = openItems.includes(item.id);
            
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                {/* Glow effect on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600/10 via-amber-400/10 to-red-600/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* FAQ Card */}
                <div className="relative bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                  
                  {/* Question Button */}
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full text-left p-6 pr-12 focus:outline-none"
                  >
                    <div className="flex items-center justify-between">
                      {/* Question with number */}
                      <div className="flex items-center gap-4">
                        <span className="font-['Marcellus'] text-sm text-red-600/50 font-bold">
                          {(index + 1).toString().padStart(2, '0')}
                        </span>
                        <h3 className="font-['Marcellus'] text-lg text-gray-900">
                          {item.question}
                        </h3>
                      </div>

                      {/* Plus/Minus Icon */}
                      <motion.div
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-8 h-8 rounded-full bg-red-600/10 flex items-center justify-center flex-shrink-0"
                      >
                        <svg 
                          className="w-5 h-5 text-red-600" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      </motion.div>
                    </div>
                  </button>

                  {/* Answer */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 pt-0 border-t border-gray-100">
                          <div className="flex gap-4">
                            {/* Decorative line */}
                            <motion.div 
                              initial={{ scaleY: 0 }}
                              animate={{ scaleY: 1 }}
                              transition={{ delay: 0.2 }}
                              className="w-1 bg-gradient-to-b from-red-600 to-red-400 rounded-full origin-top"
                            />
                            
                            {/* Answer text */}
                            <p className="font-['Manrope'] text-gray-600 leading-relaxed">
                              {item.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}