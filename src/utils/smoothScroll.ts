import { gsap } from 'gsap';

// Ultra-smooth scroll with GSAP and inertia
class SmoothScroll {
  private scrollTimeout: number | null = null;
  private currentScrollY = 0;
  private targetScrollY = 0;
  private velocity = 0;
  // private isScrolling = false; // Removed unused property
  private lastWheelTime = 0;
  private wheelSpeed = 0;
  private momentum = 0;
  private animation: gsap.core.Tween | null = null;
  private scrollTween: gsap.core.Tween | null = null;

  // Configuration
  private readonly config = {
    baseSensitivity: 0.04,
    maxVelocity: 200,
    friction: 0.92,
    momentumDecay: 0.95,
    wheelSpeedThreshold: 50,
    animationDuration: 0.4,
    ease: "power2.out" as const
  };

  constructor() {
    this.init();
  }

  private init() {
    // Set initial scroll position
    this.currentScrollY = window.scrollY;
    this.targetScrollY = this.currentScrollY;

    // Listen for wheel events
    window.addEventListener('wheel', this.handleWheel.bind(this), { passive: false });
    
    // Start the animation loop
    this.animate();
  }

  private handleWheel(event: WheelEvent) {
    event.preventDefault();
    
    const currentTime = performance.now();
    const delta = event.deltaY;
    
    // Calculate wheel speed
    const timeDiff = currentTime - this.lastWheelTime;
    this.wheelSpeed = timeDiff < this.config.wheelSpeedThreshold ? 
      Math.min(this.wheelSpeed + 1, 6) : 1;
    
    // Calculate sensitivity with momentum
    const momentumMultiplier = 1 + (this.momentum * 0.15);
    const speedMultiplier = 1 + (this.wheelSpeed * 0.25);
    const sensitivity = this.config.baseSensitivity * momentumMultiplier * speedMultiplier;
    
    // Add to velocity
    this.velocity += delta * sensitivity;
    
    // Build momentum
    this.momentum = Math.min(this.momentum + 0.1, 2.5);
    
    // Limit velocity
    this.velocity = Math.max(-this.config.maxVelocity, Math.min(this.config.maxVelocity, this.velocity));
    
    // Update target position
    this.targetScrollY += this.velocity;
    this.targetScrollY = Math.max(0, Math.min(this.targetScrollY, 
      document.documentElement.scrollHeight - window.innerHeight));
    
    this.lastWheelTime = currentTime;
    
    // Clear existing animation
    if (this.animation) {
      this.animation.kill();
    }
    
    // Reset timeout
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }
    
    this.scrollTimeout = window.setTimeout(() => {
      this.momentum = Math.max(this.momentum * this.config.momentumDecay, 0);
      if (this.momentum <= 0.05) {
        this.velocity = 0;
        this.wheelSpeed = 0;
        this.momentum = 0;
      }
    }, 100);
  }

  private animate() {
    // Apply friction to velocity
    this.velocity *= this.config.friction;
    
    // Apply velocity to target position
    this.targetScrollY += this.velocity;
    
    // Clamp to valid range
    this.targetScrollY = Math.max(0, Math.min(this.targetScrollY, 
      document.documentElement.scrollHeight - window.innerHeight));
    
    // Calculate difference
    const diff = this.targetScrollY - this.currentScrollY;
    
    // Only animate if there's significant movement
    if (Math.abs(diff) > 0.1 || Math.abs(this.velocity) > 0.1 || this.momentum > 0.1) {
      // Kill existing scroll animation
      if (this.scrollTween) {
        this.scrollTween.kill();
      }
      
      // Create smooth scroll animation with GSAP
      this.scrollTween = gsap.to(this, {
        currentScrollY: this.targetScrollY,
        duration: this.config.animationDuration,
        ease: this.config.ease,
        onUpdate: () => {
          window.scrollTo(0, this.currentScrollY);
        },
        onComplete: () => {
          this.scrollTween = null;
        }
      });
    }
    
    // Continue animation loop
    requestAnimationFrame(() => this.animate());
  }

  // Method to disable smooth scrolling
  public disable() {
    window.removeEventListener('wheel', this.handleWheel.bind(this));
    if (this.animation) {
      this.animation.kill();
    }
    if (this.scrollTween) {
      this.scrollTween.kill();
    }
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }
  }

  // Method to enable smooth scrolling
  public enable() {
    window.addEventListener('wheel', this.handleWheel.bind(this), { passive: false });
  }

  // Method to scroll to a specific position
  public scrollTo(targetY: number, duration: number = 1) {
    this.targetScrollY = Math.max(0, Math.min(targetY, 
      document.documentElement.scrollHeight - window.innerHeight));
    
    if (this.animation) {
      this.animation.kill();
    }
    
    this.animation = gsap.to(this, {
      currentScrollY: this.targetScrollY,
      duration: duration,
      ease: "power2.out",
      onUpdate: () => {
        window.scrollTo(0, this.currentScrollY);
      },
      onComplete: () => {
        this.animation = null;
      }
    });
  }

  // Method to get current scroll position
  public getCurrentScrollY(): number {
    return this.currentScrollY;
  }

  // Method to get target scroll position
  public getTargetScrollY(): number {
    return this.targetScrollY;
  }
}

// Create and export the smooth scroll instance
export const smoothScroll = new SmoothScroll();
export default SmoothScroll;