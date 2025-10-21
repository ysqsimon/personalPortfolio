import { useState } from 'react';

const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Next.js', level: 88 },
      { name: 'Tailwind CSS', level: 92 }
    ]
  },
  {
    category: 'Tools & Others',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'Figma', level: 85 },
      { name: 'Vite', level: 88 },
      { name: 'Supabase', level: 82 }
    ]
  },
  {
    category: 'Design',
    skills: [
      { name: 'UI/UX Design', level: 87 },
      { name: 'Responsive Design', level: 95 },
      { name: 'Animations', level: 85 },
      { name: 'Accessibility', level: 90 }
    ]
  }
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section className="py-32 bg-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-5"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Constantly learning and evolving with the latest technologies
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {skillCategories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === index
                  ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/50'
                  : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Skills display */}
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <div
                key={index}
                className="group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-lg font-semibold text-white">
                    {skill.name}
                  </span>
                  <span className="text-sky-400 font-bold">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-sky-500 to-cyan-500 rounded-full transition-all duration-1000 ease-out shadow-lg shadow-sky-500/50"
                    style={{
                      width: activeCategory === skillCategories.findIndex(cat => cat.skills.includes(skill))
                        ? `${skill.level}%`
                        : '0%'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating tech icons */}
        <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
          {['React', 'TS', 'JS', 'CSS', 'HTML', 'Git', 'Figma', 'Vite'].map((tech, index) => (
            <div
              key={index}
              className="group relative aspect-square bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl flex items-center justify-center hover:bg-white/10 hover:border-sky-500/50 transition-all duration-300 hover:scale-110"
            >
              <span className="text-white/80 font-bold text-sm group-hover:text-sky-400 transition-colors">
                {tech}
              </span>
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/0 to-cyan-500/0 group-hover:from-sky-500/10 group-hover:to-cyan-500/10 rounded-2xl transition-all"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
