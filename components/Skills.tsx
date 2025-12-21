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
    <section id="skills" className="py-6 border-b border-gray-200 dark:border-white/10">
      <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
        {t.skills.title}
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <h3 className="text-xs text-gray-700 dark:text-gray-500 font-medium mb-2">
              {category.title}
            </h3>
            <div className="space-y-1">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="text-xs text-gray-600 dark:text-gray-400">
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-white/5">
        <div className="flex flex-wrap gap-2 text-xs text-gray-600 dark:text-gray-600">
          {['HTML5', 'CSS3', 'JavaScript', 'Sass', 'Redux', 'Next Auth', 'Prisma', 'Jest', 'Cypress', 'Webpack', 'Vite', 'NPM', 'Yarn'].map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
