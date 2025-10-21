import { ArrowDown, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-slate-950 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(14, 165, 233, 0.15), transparent 40%)`
          }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-sky-500/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-float-delayed"></div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <div className="space-y-8 animate-fadeInUp">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-medium backdrop-blur-sm">
            <Sparkles size={16} className="animate-pulse" />
            Available for new opportunities
          </div>

          {/* Main headline with gradient text */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white tracking-tight">
            <span className="block">Frontend</span>
            <span className="block bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-500 text-transparent bg-clip-text animate-gradient">
              Developer
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed">
            Crafting elegant digital experiences through clean code,
            <br className="hidden md:block" />
            thoughtful design, and modern technology
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <a
              href="#contact"
              className="group relative px-8 py-4 bg-sky-500 text-white rounded-full font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-sky-500/50"
            >
              <span className="relative z-10">Let's Connect</span>
              <div className="absolute inset-0 bg-gradient-to-r from-sky-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
            <a
              href="#experience"
              className="px-8 py-4 bg-white/5 text-white rounded-full font-semibold backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              View My Work
            </a>
          </div>
        </div>

        <button
          onClick={scrollToAbout}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-slate-400 hover:text-white transition-colors duration-300 animate-bounce cursor-pointer"
          aria-label="Scroll to about section"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
}
