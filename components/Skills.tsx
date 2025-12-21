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
    <section id="skills" className="mb-12 pb-12 border-b border-gray-200 dark:border-gray-800">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
        {t.skills.title}
      </h2>

      <div className="space-y-6">
        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="text-sm text-gray-700 dark:text-gray-300 px-3 py-1.5 bg-gray-100 dark:bg-white/5 rounded-md"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}

        <div>
          <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
            Other Technologies
          </h3>
          <div className="flex flex-wrap gap-2">
            {otherTech.map((tech, index) => (
              <span
                key={index}
                className="text-sm text-gray-700 dark:text-gray-300 px-3 py-1.5 bg-gray-100 dark:bg-white/5 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
