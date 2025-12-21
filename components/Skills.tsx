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
    <section id="skills" className="py-10 border-b border-gray-200 dark:border-white/10">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
        {t.skills.title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {skillCategories.map((category, categoryIndex) => (
          <div
            key={categoryIndex}
            className="p-5 bg-gradient-to-br from-gray-50 to-white dark:from-white/5 dark:to-white/10 rounded-xl border border-gray-200/50 dark:border-white/10 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <h3 className="text-sm text-gray-900 dark:text-white font-semibold mb-3 border-b border-gray-200 dark:border-white/10 pb-2">
              {category.title}
            </h3>
            <div className="space-y-2">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-default flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-blue-500 dark:bg-blue-400 rounded-full"></span>
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200 dark:border-white/10">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
          Other Technologies
        </h3>
        <div className="flex flex-wrap gap-2">
          {['HTML5', 'CSS3', 'JavaScript', 'Sass', 'Redux', 'Next Auth', 'Prisma', 'Jest', 'Cypress', 'Webpack', 'Vite', 'NPM', 'Yarn'].map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1.5 text-xs bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200/50 dark:border-white/10 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
