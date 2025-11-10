import React, { useState, useEffect, useRef, ReactNode, HTMLAttributes } from 'react';

interface MagnetCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  padding?: number;
  magnetStrength?: number;
  className?: string;
}

const MagnetCard: React.FC<MagnetCardProps> = ({
    children,
    padding = 30,
    magnetStrength = 8,
    className = '',
    ...props
  }) => {
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return;

      const { left, top, width, height } = cardRef.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const distX = Math.abs(centerX - e.clientX);
      const distY = Math.abs(centerY - e.clientY);

      // Check if mouse is within the magnet influence area
      if (distX < width / 2 + padding && distY < height / 2 + padding) {
        setIsActive(true);
        // Calculate offset based on mouse position relative to center
        // Using higher magnetStrength (divisor) makes the effect more subtle
        const offsetX = (e.clientX - centerX) / magnetStrength;
        const offsetY = (e.clientY - centerY) / magnetStrength;
        setPosition({ x: offsetX, y: offsetY });
      } else {
        setIsActive(false);
        setPosition({ x: 0, y: 0 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [padding, magnetStrength]);

  // Use different transition timing based on active state
  const transition = isActive 
    ? 'transform 0.3s ease-out'
    : 'transform 0.6s ease-in-out';

  return (
    <div
      ref={cardRef}
      className={`magnet-card ${className}`}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition,
        willChange: 'transform'
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default MagnetCard;