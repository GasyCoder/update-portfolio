'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (replace with actual API call later)
    await new Promise((resolve) => setTimeout(resolve, 2000));

    alert('Message sent! (This is a demo)');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const socialLinks = [
    { name: 'GitHub', icon: '💻', url: 'https://github.com/gasycoder', color: 'from-gray-700 to-gray-900' },
    { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/in/gasycoder', color: 'from-blue-600 to-blue-800' },
    { name: 'Twitter', icon: '🐦', url: 'https://twitter.com/gasycoder', color: 'from-blue-400 to-blue-600' },
    { name: 'Email', icon: '📧', url: 'mailto:contact@gasycoder.dev', color: 'from-red-500 to-red-700' },
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          {t.contact.title}
        </h2>

        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          {t.contact.description}
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg neon-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t.contact.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t.contact.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t.contact.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none text-gray-900 dark:text-white"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? t.contact.sending : t.contact.send}
              </button>
            </form>
          </div>

          {/* Social Links & Info */}
          <div className="space-y-8">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg neon-border">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Connect with me
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex flex-col items-center justify-center p-6 bg-gradient-to-br ${social.color} text-white rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 group`}
                  >
                    <span className="text-4xl mb-2 transform group-hover:scale-110 transition-transform">
                      {social.icon}
                    </span>
                    <span className="font-semibold">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg neon-border">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Quick Info
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📍</span>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Location</div>
                    <div className="text-gray-600 dark:text-gray-400">Madagascar</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-2xl">💼</span>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Status</div>
                    <div className="text-gray-600 dark:text-gray-400">Available for projects</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-2xl">⏰</span>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Response Time</div>
                    <div className="text-gray-600 dark:text-gray-400">Within 24 hours</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
