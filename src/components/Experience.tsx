import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { Timeline } from '@/components/ui/timeline';
import MagnetCard from './ui/MagnetCard';

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
    <section id="experience" className="py-32 relative overflow-hidden bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold glass-text mb-6">
            Professional Journey
          </h2>
          <p className="text-xl glass-text-muted max-w-2xl mx-auto">
            Building impactful products and growing with amazing teams
          </p>
        </div>

        <div className="relative w-full overflow-clip">
          <Timeline
            data={experiences.map((exp) => ({
              title: exp.year,
              content: (
                <MagnetCard className="rounded-2xl p-6 md:p-8">
                  <div className="flex flex-col gap-3 mb-4">
                    <div className="flex items-center gap-2 glass-text">
                      <Calendar size={16} />
                      <span className="text-sm font-semibold uppercase tracking-wider">
                        {exp.year}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold glass-text">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-4 glass-text-muted">
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
                  <p className="glass-text-muted leading-relaxed mb-6">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-2 text-sm font-semibold rounded-full glass-text"
                        style={{
                          background: 'rgba(255, 255, 255, 0.08)',
                          backdropFilter: 'blur(8px)',
                          WebkitBackdropFilter: 'blur(8px)',
                          border: '1px solid rgba(255, 255, 255, 0.2)'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </MagnetCard>
              ),
            }))}
          />
        </div>
      </div>
    </section>
  );
}
