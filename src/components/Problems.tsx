import React from 'react';
import { X, AlertTriangle, Zap, Clock, Mail } from 'lucide-react';

export default function Problems() {
  const problems = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Emails Landing in Spam",
      description: "Poor setup and unoptimized content kills your outreach before it even starts"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Fragmented Tech Stack",
      description: "Managing Apollo, Instantly, Clay, and 5 other tools creates chaos and inefficiency"
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Surface-Level Personalization",
      description: "Generic AI messages that prospects see right through, killing your response rates"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Time Wasted on Management",
      description: "Hours spent tweaking campaigns and troubleshooting instead of closing deals"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Are You Struggling to Book Sales Calls from{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
              Cold Outreach
            </span>{' '}
            No Matter What Tools You Use?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            You're not alone. Most agencies and founders face the same frustrating obstacles that kill their outreach results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-red-50 rounded-xl flex items-center justify-center text-red-500 group-hover:bg-red-100 transition-colors duration-300">
                    {problem.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-3">
                    <X className="w-5 h-5 text-red-500 mr-2" />
                    <h3 className="text-xl font-bold text-gray-900">{problem.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{problem.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-block bg-orange-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              What if there was a better way?
            </h3>
            <p className="text-gray-700 text-lg">
              Imagine having qualified prospects booking calls on your calendar while you focus entirely on what you do best—closing deals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}