import { Mail, Github, Linkedin, ExternalLink, Send, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import PrismaticBurst from './ui/PrismaticBurst';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { email, message });
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-black">
      {/* Background base and PrismaticBurst */}
      <div className="absolute inset-0 pointer-events-none">
        <PrismaticBurst
          animationType="rotate3d"
          intensity={2}
          speed={0.5}
          distort={1.0}
          paused={false}
          offset={{ x: 0, y: 0 }}
          hoverDampness={0.25}
          rayCount={24}
          mixBlendMode="none"
          colors={[]}
        />
      </div>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Contact info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-md glass-text"
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(12px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(12px) saturate(180%)',
                  border: '1px solid rgba(255, 255, 255, 0.18)',
                  boxShadow: '0 4px 16px 0 rgba(0, 0, 0, 0.15), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)'
                }}
              >
                <MessageSquare size={16} />
                Get In Touch
              </div>

              <h2 className="text-5xl md:text-6xl font-bold glass-text">
                Let's Create
                <span className="block glass-text">
                  Something Amazing
                </span>
              </h2>

              <p className="text-xl glass-text-muted leading-relaxed">
                I'm always interested in new opportunities and collaborations.
                Whether you have a project in mind or just want to connect, feel free to reach out.
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-6 pt-8">
              <a
                href="mailto:hello@example.com"
                className="unified-card group flex items-center gap-4 p-4 rounded-xl"
              >
                <div className="card-icon-container w-12 h-12 rounded-lg flex items-center justify-center">
                  <Mail size={24} className="text-white" />
                </div>
                <div>
                  <div className="text-sm glass-text-muted">Email</div>
                  <div className="font-semibold glass-text">hello@example.com</div>
                </div>
              </a>
  
                {/* Social links */}
                <div className="flex gap-4">
                  {[
                    { icon: Github, href: 'https://github.com', label: 'GitHub' },
                    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                    { icon: ExternalLink, href: 'https://example.com', label: 'Portfolio' }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="unified-card w-12 h-12 rounded-lg flex items-center justify-center"
                      aria-label={social.label}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
            </div>
          </div>

          {/* Right side - Contact form */}
          <div 
            className="rounded-3xl p-8"
            style={{
              background: 'rgba(255, 255, 255, 0.06)',
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              border: '1px solid rgba(255, 255, 255, 0.18)',
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2), inset 0 1px 0 0 rgba(255, 255, 255, 0.15), inset 0 -1px 0 0 rgba(255, 255, 255, 0.05)'
            }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold glass-text-muted mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="w-full px-4 py-3 rounded-xl glass-text placeholder:text-slate-400/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 255, 255, 0.15)'
                  }}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold glass-text-muted mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your project..."
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl glass-text placeholder:text-slate-400/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent resize-none"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 255, 255, 0.15)'
                  }}
                />
              </div>

              <button
                type="submit"
                className="unified-card w-full px-6 py-3 rounded-xl font-semibold glass-text flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-white/10 text-center">
          <p className="text-slate-400">
            © {new Date().getFullYear()} All rights reserved. Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
}
