'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { Github, Linkedin, Twitter, Mail, MapPin, Clock } from 'lucide-react';

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
    { name: 'GitHub', icon: Github, url: 'https://github.com/gasycoder' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/gasycoder' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/gasycoder' },
    { name: 'Email', icon: Mail, url: 'mailto:contact@gasycoder.dev' },
  ];

  return (
    <section id="contact" className="py-32 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-light text-white mb-20">
          {t.contact.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-500 mb-2">
                  {t.contact.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-transparent border border-white/10 text-white placeholder:text-gray-600 focus:border-white/20 outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-gray-500 mb-2">
                  {t.contact.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-transparent border border-white/10 text-white placeholder:text-gray-600 focus:border-white/20 outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-gray-500 mb-2">
                  {t.contact.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-transparent border border-white/10 text-white placeholder:text-gray-600 focus:border-white/20 outline-none transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-white text-black text-sm font-medium hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? t.contact.sending : t.contact.send}
              </button>
            </form>
          </div>

          {/* Social Links & Info */}
          <div className="space-y-12">
            <div>
              <h3 className="text-sm text-gray-500 mb-6">
                Connect
              </h3>

              <div className="space-y-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      <Icon size={16} strokeWidth={1.5} />
                      <span>{social.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Info */}
            <div>
              <h3 className="text-sm text-gray-500 mb-6">
                Info
              </h3>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <MapPin size={16} strokeWidth={1.5} />
                  <span>Madagascar</span>
                </div>

                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <Clock size={16} strokeWidth={1.5} />
                  <span>Available for projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
