import React from 'react';
import { Users, Settings, Rocket, Calendar } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: <Users className="w-8 h-8" />,
      title: "Define Your Ideal Customer",
      description: "We work with you to identify your perfect prospects and target market for maximum conversion rates."
    },
    {
      number: "02", 
      icon: <Settings className="w-8 h-8" />,
      title: "We Set Everything Up",
      description: "Our team handles lead sourcing, inbox configuration, AI personalization, and campaign creation—no work for you."
    },
    {
      number: "03",
      icon: <Rocket className="w-8 h-8" />,
      title: "Campaigns Launch Automatically",
      description: "Your outreach sequences go live with continuous optimization and monitoring running in the background."
    },
    {
      number: "04",
      icon: <Calendar className="w-8 h-8" />,
      title: "Qualified Calls Book Themselves",
      description: "Warm prospects book directly onto your calendar while you focus on closing deals and growing your business."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How BookedByCold{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
              Works for You
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven 4-step process gets you from zero to qualified sales calls in under 30 days, completely hands-off.
          </p>
        </div>

        <div className="relative">
          {/* Connection line for desktop */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-teal-200 to-orange-200"></div>
          
          <div className="grid lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center">
                {/* Step number and icon */}
                <div className="relative mx-auto mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center text-white mb-4 mx-auto relative z-10 shadow-lg">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-md">
                    {step.number}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>

                {/* Mobile connection line */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden w-0.5 h-12 bg-gradient-to-b from-blue-200 to-teal-200 mx-auto mt-8"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="inline-block bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl">
              Schedule a free strategy call to see how we can fill your calendar with qualified prospects in the next 30 days.
            </p>
            <a href="https://calendly.com/ahmorsy07/ai-booking-demo" target="_blank" rel="noopener noreferrer" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg">
              Book Your Free Strategy Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}