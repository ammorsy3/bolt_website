import React from 'react';
import { CheckCircle, ArrowRight, Target, Users, Zap } from 'lucide-react';

export default function Solution() {
  const benefits = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "You Focus on Selling",
      description: "Spend your time closing deals, not managing campaigns"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "We Handle Everything Else",
      description: "Lead sourcing, personalization, deliverability, follow-ups"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Results on Autopilot",
      description: "Qualified calls book themselves while you sleep"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="mb-8">
              <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-2 rounded-full mb-4">
                The Solution
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                  You Sell.
                </span>{' '}
                We Handle the Rest.
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                BookedByCold is your done-for-you outbound sales system. We manage everything from lead sourcing to inbox setup, so qualified prospects book calls on your calendar automatically.
              </p>
            </div>

            <div className="space-y-6 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 group-hover:bg-blue-200 transition-colors duration-300">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://calendly.com/ahmorsy07/ai-booking-demo" target="_blank" rel="noopener noreferrer" className="group bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg flex items-center justify-center">
                Start Booking Calls Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105">
                Learn More
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">What You Get:</h3>
              <div className="space-y-4">
                {[
                  "Qualified leads sourced and verified",
                  "AI-powered personalized outreach",
                  "Complete inbox setup and deliverability",
                  "High-converting email sequences", 
                  "Automated follow-up campaigns",
                  "Performance monitoring and optimization"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">15-30</div>
                  <div className="text-white/90">Qualified calls per month</div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold opacity-90">
              100%
              <br />
              Done
            </div>
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-40 h-16 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold opacity-90">
              No Setup Required
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}