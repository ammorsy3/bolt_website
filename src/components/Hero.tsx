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

      {/* Enhanced Animated background elements with aura effects */}
      <div className="absolute inset-0">
        {/* Main radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_200px,rgba(59,130,246,0.2),transparent)]" />
        {/* Secondary radial gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_80%_300px,rgba(20,184,166,0.15),transparent)]" />
        {/* Grid pattern overlay */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
        
        {/* Large aura lights */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-teal-500/15 rounded-full blur-3xl animate-pulse delay-1500"></div>
        
        {/* Medium aura lights */}
        <div className="absolute top-1/2 left-1/6 w-64 h-64 bg-blue-400/10 rounded-full blur-2xl animate-pulse delay-700"></div>
        <div className="absolute bottom-1/2 right-1/6 w-64 h-64 bg-teal-400/10 rounded-full blur-2xl animate-pulse delay-1200"></div>
        
        {/* Small accent lights */}
        <div className="absolute top-1/5 right-1/5 w-48 h-48 bg-orange-500/8 rounded-full blur-2xl animate-pulse delay-300"></div>
        <div className="absolute bottom-1/5 left-1/5 w-48 h-48 bg-orange-400/8 rounded-full blur-2xl animate-pulse delay-1800"></div>
        
        {/* Gradient overlays for depth */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/8 via-transparent to-teal-500/8"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-teal-500/6 via-transparent to-blue-500/6"></div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

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
            <a href="https://calendly.com/ahmorsy07/ai-booking-demo" target="_blank" rel="noopener noreferrer" className="group bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 hover:shadow-xl flex items-center justify-center">
              Get Your First Calls Booked
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <a href="https://drive.google.com/file/d/180_FWUK_2bJqwHhPqqQRoSMvOjEXhRgj/view" target="_blank" rel="noopener noreferrer" className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 border border-white/20 flex items-center justify-center">
              <Play className="mr-2 w-5 h-5" />
              Watch Demo (2 min)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
