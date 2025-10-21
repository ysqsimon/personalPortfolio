import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    year: '2023 - Present',
    company: 'Tech Innovators Inc.',
    location: 'San Francisco, CA',
    role: 'Senior Frontend Developer',
    description: 'Leading frontend architecture and mentoring junior developers. Implemented design system used across 5+ products, resulting in 40% faster development time.',
    technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind'],
    color: 'sky'
  },
  {
    year: '2021 - 2023',
    company: 'Digital Studios',
    location: 'New York, NY',
    role: 'Frontend Developer',
    description: 'Built responsive web applications for enterprise clients. Collaborated with design team to create seamless user experiences that increased user engagement by 60%.',
    technologies: ['React', 'JavaScript', 'SCSS', 'Figma'],
    color: 'cyan'
  },
  {
    year: '2019 - 2021',
    company: 'Startup Ventures',
    location: 'Remote',
    role: 'Junior Developer',
    description: 'Developed and maintained client-facing features. Gained expertise in React, TypeScript, and modern web technologies while working in fast-paced agile environment.',
    technologies: ['React', 'JavaScript', 'CSS', 'Git'],
    color: 'blue'
  }
];

export default function Experience() {
  return (
    <section className="py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-500 to-transparent opacity-50"></div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Professional Journey
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Building impactful products and growing with amazing teams
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-sky-500 via-cyan-500 to-blue-500"></div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 -translate-x-1/2 bg-white border-4 border-sky-500 rounded-full shadow-lg shadow-sky-500/50 z-10"></div>

                {/* Content card */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:pl-16'} ml-16 md:ml-0`}>
                  <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-sky-200 hover:-translate-y-2">
                    {/* Header */}
                    <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'} gap-3 mb-4`}>
                      <div className="flex items-center gap-2 text-sky-600">
                        <Calendar size={16} />
                        <span className="text-sm font-semibold uppercase tracking-wider">
                          {exp.year}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                        {exp.role}
                      </h3>

                      <div className="flex items-center gap-4 text-slate-600">
                        <div className="flex items-center gap-2">
                          <Briefcase size={16} />
                          <span className="font-semibold">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-700 leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-4 py-2 bg-gradient-to-br from-sky-50 to-cyan-50 text-sky-700 text-sm font-semibold rounded-full border border-sky-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
