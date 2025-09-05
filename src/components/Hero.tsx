import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';

export default function Hero() {
  const benefits = [
    "No team to hire",
    "No tools to stitch together", 
    "No guesswork"
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-800 -z-10">
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* -- Edge polish (sexy edges like purple version) -------------------------------- */}
      <div className="absolute inset-0 pointer-events-none -z-0">
        {/* Clean grid with edge fade */}
        <div
          className="
            absolute inset-0
            bg-[linear-gradient(to_right,rgba(59,130,246,0.11)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.11)_1px,transparent_1px)]
            bg-[size:26px_26px]
            [mask-image:radial-gradient(120%_100%_at_50%_50%,#000_55%,transparent)]
            [-webkit-mask-image:radial-gradient(120%_100%_at_50%_50%,#000_55%,transparent)]
          "
        />

        {/* Subtle center glow */}
        <div className="absolute inset-0 bg-[radial-gradient(800px_500px_at_50%_45%,rgba(59,130,246,0.18),transparent_70%)]" />

        {/* Corner glows */}
        <div className="absolute -top-24 -left-24 w-[32rem] h-[32rem] rounded-full bg-blue-500/30 blur-3xl" />

        <div className="absolute -bottom-24 -right-24 w-[32rem] h-[32rem] rounded-full bg-teal-500/25 blur-3xl" />


        {/* Inner vignette */}
        <div className="absolute inset-0 shadow-[inset_0_0_140px_rgba(0,0,0,0.5)]" />

        {/* Top/bottom edge light */}
        <div className="absolute inset-0 bg-[radial-gradient(1000px_240px_at_50%_-120px,rgba(255,255,255,0.08),transparent),radial-gradient(1000px_240px_at_50%_calc(100%+120px),rgba(255,255,255,0.07),transparent)]" />
      </div>
      {/* ------------------------------------------------------------------------ */}

      {/* Floating particles (bolder + faster) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-400/40 shadow-[0_0_6px_rgba(59,130,246,0.6)]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 2}px`,  // randomized size 2–5px
              height: `${Math.random() * 3 + 2}px`,
            }}
            animate={{
              y: [-30, -140],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2, // faster: 2–5s
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-8 animate-fadeIn mt-8">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            Fully Managed Outbound Sales System
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight animate-slideUp">
            Book More Sales Calls{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              Without Building
            </span>{' '}
            Outreach from Scratch
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed animate-slideUp delay-200">
            Done-for-you system that runs quietly in the background, feeding your calendar with warm, qualified leads.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 animate-slideUp delay-400">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center text-white/90">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span className="font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slideUp delay-600">
            <a
              href="https://calendly.com/ahmorsy07/ai-booking-demo"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 hover:shadow-xl flex items-center justify-center"
            >
              Get Your First Calls Booked
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <a
              href="https://drive.google.com/file/d/180_FWUK_2bJqwHhPqqQRoSMvOjEXhRgj/view"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 border border-white/20 flex items-center justify-center"
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Demo (2 min)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
