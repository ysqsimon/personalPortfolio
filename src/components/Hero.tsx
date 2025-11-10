import { ArrowDown, Sparkles } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import ColorBends from './ui/ColorBends';

export default function Hero() {
  const [typedLength, setTypedLength] = useState(0);
  const timeoutRef = useRef<number>();
  const hoverText = 'more than ';

  // No-op: removed mouse-follow overlay; keep minimal effects only for typing cleanup

  const clearCurrentTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = undefined;
    }
  };

  const handleMouseEnter = () => {
    clearCurrentTimeout();
    
    if (typedLength === 0) {
      let currentIndex = 0;
      
      const typeNextChar = () => {
        if (currentIndex < hoverText.length) {
          setTypedLength(currentIndex + 1);
          // Skip delay for spaces - type them instantly
          const delay = hoverText[currentIndex] === ' ' ? 0 : 100;
          currentIndex++;
          timeoutRef.current = setTimeout(typeNextChar, delay);
        }
      };
      
      typeNextChar();
    }
  };

  const handleMouseLeave = () => {
    clearCurrentTimeout();
    
    if (typedLength > 0) {
      let deleteIndex = typedLength - 1;
      
      const deleteNextChar = () => {
        if (deleteIndex >= 0) {
          // Skip delay for spaces - delete them instantly
          const delay = hoverText[deleteIndex] === ' ' ? 0 : 100;
          setTypedLength(deleteIndex);
          deleteIndex--;
          timeoutRef.current = setTimeout(deleteNextChar, delay);
        } else {
          setTypedLength(0);
        }
      };
      
      deleteNextChar();
    }
  };

  useEffect(() => {
    return () => {
      clearCurrentTimeout();
    };
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* ColorBends background */}
      <div className="absolute inset-0">
        <ColorBends
          colors={[]}
          rotation={90}
          speed={0.2}
          scale={1}
          frequency={1}
          warpStrength={1}
          mouseInfluence={1}
          parallax={0.6}
          noise={0.1}
          transparent
        />
      </div>

      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative z-10 flex flex-col gap-4 items-center justify-center px-4 mx-auto text-center"
      >
        {/* Badge */}
        <div 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium glass-text"
          style={{
            background: 'rgba(255, 255, 255, 0.06)',
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            border: '1px solid rgba(255, 255, 255, 0.18)'
          }}
        >
          <Sparkles size={16} />
          Available for new opportunities
        </div>

        {/* Main headline with hover typing effect */}
        <div 
          className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight cursor-pointer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex flex-col items-center">
            <span style={{ color: '#ffffff' }}>
              I'm {hoverText.substring(0, typedLength)} a
            </span>
            <span style={{ color: '#ffffff' }}>frontend developer</span>
          </div>
        </div>

        <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed" style={{ color: '#d1d5db' }}>
          Crafting elegant digital experiences through clean code,
          <br className="hidden md:block" />
          thoughtful design, and modern technology
        </p>
      </motion.div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 transition-colors duration-300 animate-bounce cursor-pointer z-10 hover:opacity-80"
        style={{ color: '#d1d5db' }}
        aria-label="Scroll to about section"
      >
        <ArrowDown size={32} />
      </button>
    </div>
  );
}
