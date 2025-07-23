import React from 'react';
import { ArrowRight, CheckCircle, Clock } from 'lucide-react';

export default function CTA() {
  const guarantees = [
    "15-30 qualified calls within 60 days",
    "Complete campaign setup in 7 days", 
    "No long-term contracts required"
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-600 via-blue-700 to-teal-700 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-8">
            Stop Building.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              Start Booking.
            </span>
          </h2>
          
          <p className="text-xl sm:text-2xl text-blue-100 mb-12 leading-relaxed">
            Let us handle the outreach while you handle the deals. Your calendar will thank you.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="flex items-center justify-center space-x-2 text-white/90">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="font-medium">{guarantee}</span>
              </div>
            ))}
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/20">
            <div className="flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-orange-400 mr-2" />
              <span className="text-orange-300 font-semibold">Limited Time Offer</span>
            </div>
            <div className="text-3xl font-bold mb-2">Free Setup Worth $2,500</div>
            <div className="text-blue-200">When you start your campaign this month</div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://calendly.com/ahmorsy07/ai-booking-demo" target="_blank" rel="noopener noreferrer" className="group bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-lg font-bold text-xl transition-all duration-200 hover:scale-105 hover:shadow-xl flex items-center justify-center">
              Book Your Free Strategy Call
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div>

          <div className="mt-12 text-blue-200">
            <p className="mb-2">🔒 No risk, no long-term commitment</p>
            <p>Join agencies & founders who are already taking advantage of this system</p>
          </div>
        </div>
      </div>
    </section>
  );
}