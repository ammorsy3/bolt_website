import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

export default function Footer() {
  const links = {
    company: [
      { name: 'About Us', href: '#' },
      { name: 'How It Works', href: '#how-it-works' },
      { name: 'Case Studies', href: '#' },
      { name: 'Contact', href: '#' }
    ],
    services: [
      { name: 'Lead Generation', href: '#' },
      { name: 'Email Outreach', href: '#' },
      { name: 'AI Personalization', href: '#' },
      { name: 'Deliverability Setup', href: '#' }
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">BookedByCold</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              The done-for-you outbound sales system that fills your calendar with qualified prospects while you focus on closing deals.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-5 h-5" />
                <span>ahmed@bookedbycold.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Linkedin className="w-5 h-5" />
                <a href="https://www.linkedin.com/in/ads-with-ahmed/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {links.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {links.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 BookedByCold. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}