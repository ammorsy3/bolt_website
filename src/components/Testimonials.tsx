import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Founder, Digital Growth Agency",
      content: "BookedByCold completely transformed our sales process. We went from 2-3 qualified calls per month to 25+ without lifting a finger. The team handles everything perfectly.",
      rating: 5,
      results: "25+ calls/month"
    },
    {
      name: "Marcus Rodriguez", 
      role: "CEO, SaaS Startup",
      content: "I was skeptical at first, but the results speak for themselves. In 60 days, we booked $180K in pipeline value. The personalization is incredible—prospects think we know them personally.",
      rating: 5,
      results: "$180K pipeline"
    },
    {
      name: "Emily Watson",
      role: "Marketing Director, B2B Services",
      content: "Finally, a solution that actually works. No more juggling 5 different tools or training VAs. BookedByCold runs on autopilot while our team focuses on closing deals.",
      rating: 5,
      results: "20+ calls/month"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            What Our Clients{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              Are Saying
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join hundreds of agencies and founders who've transformed their outbound sales with BookedByCold.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 relative"
            >
              <Quote className="w-12 h-12 text-orange-400 mb-6 opacity-50" />
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                </div>
                <div className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-sm font-medium">
                  {testimonial.results}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Join Them?
            </h3>
            <p className="text-orange-100 mb-6 max-w-2xl">
              Stop struggling with outreach tools and start booking qualified calls on autopilot.
            </p>
            <a href="https://calendly.com/ahmorsy07/ai-booking-demo" target="_blank" rel="noopener noreferrer" className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg">
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}