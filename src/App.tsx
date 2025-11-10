import { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import CustomCursor from './components/ui/CustomCursor';
import { smoothScroll } from './utils/smoothScroll';

function App() {
  useEffect(() => {
    // Initialize smooth scrolling when component mounts
    
    let middleMousePressed = false;
    let scrollPosition = { x: 0, y: 0 };
    let rafId: number | null = null;
    
    // Aggressively prevent scroll by continuously resetting scroll position
    // Run on every frame when middle mouse is pressed
    const preventScrollLoop = () => {
      if (middleMousePressed) {
        // Always reset scroll position - don't check if it changed, just reset it
        window.scrollTo(scrollPosition.x, scrollPosition.y);
        rafId = requestAnimationFrame(preventScrollLoop);
      } else {
        rafId = null;
      }
    };
    
    // Disable middle mouse button drag scrolling
    // MUST prevent default to stop browser scroll mode activation
    const handleMouseDown = (e: MouseEvent) => {
      if (e.button === 1) {
        middleMousePressed = true;
        scrollPosition = { x: window.scrollX, y: window.scrollY };
        // CRITICAL: Prevent default to stop browser from entering scroll mode
        e.preventDefault();
        // Start aggressive scroll prevention loop immediately
        rafId = requestAnimationFrame(preventScrollLoop);
        return false;
      }
    };

    const handleMouseUp = (e: MouseEvent) => {
      if (e.button === 1) {
        middleMousePressed = false;
        if (rafId) {
          cancelAnimationFrame(rafId);
          rafId = null;
        }
      }
    };

    // Also prevent scroll via scroll event listener (double protection)
    const handleScroll = () => {
      if (middleMousePressed) {
        window.scrollTo(scrollPosition.x, scrollPosition.y);
      }
    };

    // Handle mousemove when middle button is pressed - prevent scroll but allow cursor movement
    const handleMouseMove = (e: MouseEvent) => {
      // buttons === 4 means middle mouse button is currently pressed
      if (e.buttons === 4 && middleMousePressed) {
        // Update scroll position lock to current position to prevent any scroll
        scrollPosition = { x: window.scrollX, y: window.scrollY };
        // Don't prevent default - allow cursor to move, scroll prevention happens via RAF
      }
    };

    // Prevent middle mouse button click events
    const handleAuxClick = (e: MouseEvent) => {
      if (e.button === 1) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };

    // Add event listeners
    // Use capture phase for mousedown to intercept EARLY and prevent scroll mode
    // But use normal phase for mousemove so cursor tracking works
    document.addEventListener('mousedown', handleMouseDown, { passive: false, capture: true });
    document.addEventListener('mouseup', handleMouseUp);
    // Mousemove must be passive: true so it doesn't block cursor, but we update scroll lock
    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    // Scroll listener as backup - use capture and passive: false to intercept
    window.addEventListener('scroll', handleScroll, { passive: false, capture: true });
    document.addEventListener('auxclick', handleAuxClick, { passive: false });

    return () => {
      // Cleanup when component unmounts
      smoothScroll.disable();
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      document.removeEventListener('mousedown', handleMouseDown, { capture: true });
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll, { capture: true });
      document.removeEventListener('auxclick', handleAuxClick);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <CustomCursor />
      <Hero />
      <About />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
