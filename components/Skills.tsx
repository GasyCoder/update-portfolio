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

  const allSkills = skillCategories.flatMap(cat => cat.skills.map(s => s.name));
  const otherTech = ['HTML5', 'CSS3', 'JavaScript', 'Sass', 'Redux', 'Next Auth', 'Prisma', 'Jest', 'Cypress', 'Webpack', 'Vite', 'NPM', 'Yarn'];

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
        {t.skills.title}
      </h2>

      <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg bg-white dark:bg-[#0d1117] space-y-6">
        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="text-sm text-blue-700 dark:text-blue-400 px-3 py-1.5 bg-blue-100 dark:bg-blue-900/30 border border-blue-300 dark:border-blue-800 rounded-md font-medium"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}

        <div>
          <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Other Technologies
          </h3>
          <div className="flex flex-wrap gap-2">
            {otherTech.map((tech, index) => (
              <span
                key={index}
                className="text-sm text-gray-700 dark:text-gray-300 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
