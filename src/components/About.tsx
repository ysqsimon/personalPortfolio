import { Code, Lightbulb, Rocket, Target } from 'lucide-react';

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
    <section id="about" className="py-32 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-100 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl font-bold text-slate-900">
                Building the web,
                <span className="block text-sky-600">one pixel at a time</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-full"></div>
            </div>

            <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
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
                <div className="text-4xl font-bold text-sky-600">5+</div>
                <div className="text-sm text-slate-600 mt-1">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-sky-600">50+</div>
                <div className="text-sm text-slate-600 mt-1">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-sky-600">100%</div>
                <div className="text-sm text-slate-600 mt-1">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right side - Principles cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {principles.map((principle, index) => (
              <div
                key={index}
                className="group relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-sky-200 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-sky-50 to-cyan-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <principle.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
