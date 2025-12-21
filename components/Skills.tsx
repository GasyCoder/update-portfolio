'use client';

import { useLanguage } from '@/lib/LanguageContext';

interface Skill {
  name: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

export default function Skills() {
  const { t } = useLanguage();

  const skillCategories: SkillCategory[] = [
    {
      title: t.skills.frontend,
      skills: [
        { name: 'React' },
        { name: 'Next.js' },
        { name: 'TypeScript' },
        { name: 'Tailwind CSS' },
        { name: 'Vue.js' },
      ],
    },
    {
      title: t.skills.backend,
      skills: [
        { name: 'Node.js' },
        { name: 'Express' },
        { name: 'MongoDB' },
        { name: 'PostgreSQL' },
        { name: 'GraphQL' },
      ],
    },
    {
      title: t.skills.tools,
      skills: [
        { name: 'Git' },
        { name: 'Docker' },
        { name: 'VS Code' },
        { name: 'Figma' },
        { name: 'Postman' },
      ],
    },
    {
      title: t.skills.other,
      skills: [
        { name: 'REST API' },
        { name: 'Responsive Design' },
        { name: 'UI/UX' },
        { name: 'Agile/Scrum' },
        { name: 'Testing' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-32 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-light text-white mb-20">
          {t.skills.title}
        </h2>

        <div className="grid md:grid-cols-4 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-sm text-gray-500 mb-6">
                {category.title}
              </h3>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="text-sm text-gray-400">
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Technologies */}
        <div className="mt-20 pt-20 border-t border-white/5">
          <div className="flex flex-wrap gap-3 text-xs text-gray-600">
            {['HTML5', 'CSS3', 'JavaScript', 'Sass', 'Redux', 'Next Auth', 'Prisma', 'Jest', 'Cypress', 'Webpack', 'Vite', 'NPM', 'Yarn'].map((tech, index) => (
              <span key={index}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
