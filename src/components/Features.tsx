import React from 'react';
import { Database, Brain, Shield, PenTool, Repeat, BarChart3 } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Database className="w-8 h-8" />,
      title: "Lead Sourcing & Data Cleanup",
      description: "We pull and clean your ideal prospects, verify all contact information for maximum deliverability.",
      color: "bg-blue-500"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Personalization",
      description: "Advanced AI crafts tailored, benefit-driven messages that resonate with each individual prospect.",
      color: "bg-purple-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Inbox Setup & Deliverability",
      description: "Complete domain setup, DNS configuration, and inbox warm-up to ensure your emails land in the primary tab.",
      color: "bg-green-500"
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "High-Converting Email Copy",
      description: "Professionally crafted email sequences that engage prospects and drive responses, not delete buttons.",
      color: "bg-orange-500"
    },
    {
      icon: <Repeat className="w-8 h-8" />,
      title: "Automated Outreach Sequences",
      description: "Multi-touch campaigns with optimized timing and follow-up logic that nurtures prospects to booking.",
      color: "bg-teal-500"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Performance Monitoring",
      description: "Continuous campaign monitoring with data-driven optimizations to maximize your booking rates.",
      color: "bg-red-500"
    }
  ];

  return (
    <section id="features" className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
              Book More Sales Calls
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive system handles every aspect of outbound sales so you can focus on what matters most—closing deals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className={`w-16 h-16 ${feature.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 text-white max-w-4xl">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              The Result? More Qualified Calls, Less Work for You
            </h3>
            <p className="text-lg text-blue-100 mb-6">
              Our clients typically see 15-30 qualified sales calls per month within 60 days, with zero time spent managing campaigns or tools.
            </p>
            <a href="https://calendly.com/ahmorsy07/ai-booking-demo" target="_blank" rel="noopener noreferrer" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg">
              Get Your Custom Strategy Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}