import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [cursorState, setCursorState] = useState<'default' | 'inside'>('default');
  const [hoverCard, setHoverCard] = useState<HTMLElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  // Cursor size (3 times bigger than before)
  const cursorSize = 24; // Original was 8px, now 3x bigger

  // Track mouse position and move the custom cursor with immediate response
  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      
      setMousePos({ x, y });
      
      if (cursorRef.current) {
        const cursor = cursorRef.current;
        cursor.style.transform = `translate(calc(${x}px - 50%), calc(${y}px - 50%))`;
      }
    };

    // Initialize cursor position when component mounts
    if (cursorRef.current) {
      const cursor = cursorRef.current;
      cursor.style.transform = 'translate(calc(50vw - 50%), calc(50vh - 50%))';
    }

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  // Detect hover states for cards
  useEffect(() => {
    const detectHover = () => {
      // Get all cards that should trigger hover effects
      const cards = document.querySelectorAll('.card-hover, .group, .unified-card, .magnet-card');
      let isInsideCard = false;
      let newHoverCard: HTMLElement | null = null;
      
      // Buffer zone to improve edge detection
      const bufferZone = 5;
      
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const isInside = (
          mousePos.x >= rect.left + bufferZone &&
          mousePos.x <= rect.right - bufferZone &&
          mousePos.y >= rect.top + bufferZone &&
          mousePos.y <= rect.bottom - bufferZone
        );
        
        if (isInside) {
          isInsideCard = true;
          newHoverCard = card as HTMLElement;
        }
      });
      
      // Update cursor state and card classes
      if (cursorState !== (isInsideCard ? 'inside' : 'default')) {
        setCursorState(isInsideCard ? 'inside' : 'default');
        
        // Remove classes from previous hover card
        if (hoverCard) {
          hoverCard.classList.remove('cursor-inside');
        }
        
        // Add class to current hover card
        if (newHoverCard) {
          newHoverCard.classList.add('cursor-inside');
        }
        
        setHoverCard(newHoverCard);
      }
    };
    
    // Run detection on mouse move
    window.addEventListener('mousemove', detectHover);
    
    // Also run detection on scroll and resize
    window.addEventListener('scroll', detectHover);
    window.addEventListener('resize', detectHover);
    
    return () => {
      window.removeEventListener('mousemove', detectHover);
      window.removeEventListener('scroll', detectHover);
      window.removeEventListener('resize', detectHover);
      
      // Clean up classes when component unmounts
      if (hoverCard) {
        hoverCard.classList.remove('cursor-inside');
      }
    };
  }, [cursorState, hoverCard, mousePos]);



  return (
    <div
      ref={cursorRef}
      className={`fixed pointer-events-none z-50 transition-all duration-300 ease-out`}
      style={{
        // Base styles - 3 times bigger
        width: `${cursorSize}px`,
        height: `${cursorSize}px`,
        borderRadius: '50%',
        opacity: cursorState === 'inside' ? 0 : 0.8,
        background: 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(5px)',
        WebkitBackdropFilter: 'blur(5px)',
        // Add edge glow for normal state and enhance for near state
        boxShadow: '0 0 15px rgba(255, 255, 255, 0.4)',
        transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
        willChange: 'transform, opacity, box-shadow',
        pointerEvents: 'none',
        position: 'fixed',
        zIndex: 50,
        // Remove any conflicting styles
        left: '0',
        top: '0',
        margin: '0',
        padding: '0',
        border: 'none',
        outline: 'none',
      }}
    />
  );
}