import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              About{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                Ahmed Farag
              </span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Ahmed Farag is the Founder & Owner of BookedByCold - an AI Sales Automation Agency built specifically for marketing agencies and service-based founders.
              </p>
              
              <p>
                Before BookedByCold, Ahmed founded and worked inside multiple marketing agencies. He's seen firsthand what it's like to struggle with outbound: low reply rates and closing rates, bad leads, and wasted hours sending emails that never land.
              </p>
              
              <p>
                Over the past few years, he sent thousands of cold emails, tested, failed, tweaked, and learned until he figured out what actually works.
              </p>
              
              <p>
                That process became the foundation of BookedByCold: a plug-and-play system that delivers results without the stress.
              </p>
              
              <blockquote className="border-l-4 border-blue-500 pl-6 py-4 bg-blue-50 rounded-r-lg">
                <p className="italic text-gray-800 text-xl leading-relaxed">
                  "My mission with BookedByCold is to hand over a sales system I wish I had when I started - a done-for-you outbound system that removes the guesswork, so founders never have to wonder how to send cold emails that actually get replies."
                </p>
              </blockquote>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="/AHMED2.jpg"
                alt="Ahmed Farag, Founder of BookedByCold"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
            </div>
            
            {/* Background decorative elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full opacity-20 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}