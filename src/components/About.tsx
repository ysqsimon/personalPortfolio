import { Code, Lightbulb, Rocket, Target } from 'lucide-react';
import MagnetCard from './ui/MagnetCard';

const principles = [
  {
    icon: Code,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable solutions that stand the test of time'
  },
  {
    icon: Lightbulb,
    title: 'Creative Problem Solving',
    description: 'Turning complex challenges into elegant, user-friendly experiences'
  },
  {
    icon: Target,
    title: 'Detail Oriented',
    description: 'Obsessing over every pixel, animation, and interaction'
  },
  {
    icon: Rocket,
    title: 'Performance First',
    description: 'Building lightning-fast applications that users love'
  }
];

export default function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden bg-black">

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl font-bold glass-text">
                Building the web,
                <span className="block glass-text">one pixel at a time</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-white/40 to-white/60 rounded-full"></div>
            </div>

            <div className="space-y-6 text-lg glass-text-muted leading-relaxed">
              <p>
                I'm a frontend developer passionate about building interfaces that feel natural and effortless.
                My approach combines technical precision with creative problem-solving to deliver experiences
                that users love.
              </p>
              <p>
                I believe great design emerges from the intersection of simplicity and functionality.
                Every line of code, every interaction, and every visual element serves a purpose —
                to create digital products that are both beautiful and practical.
              </p>
              <p>
                When I'm not coding, I'm exploring new technologies, refining my craft, and seeking
                inspiration from design, art, and the world around me.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div>
                <div className="text-4xl font-bold glass-text">5+</div>
                <div className="text-sm glass-text-muted mt-1">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold glass-text">50+</div>
                <div className="text-sm glass-text-muted mt-1">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold glass-text">100%</div>
                <div className="text-sm glass-text-muted mt-1">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right side - Principles cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {principles.map((principle, index) => (
              <MagnetCard
                  key={index}
                  className="p-6 rounded-2xl"
                >
                  <div className="relative z-10">
                    <div className="card-icon-container w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                      <principle.icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-lg font-bold glass-text mb-2">
                      {principle.title}
                    </h3>
                    <p className="text-sm glass-text-muted leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </MagnetCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
