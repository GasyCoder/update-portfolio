'use client';

import { useLanguage } from '@/lib/LanguageContext';

interface Skill {
  name: string;
  icon: string;
  level: number;
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
        { name: 'React', icon: '⚛️', level: 90 },
        { name: 'Next.js', icon: '▲', level: 85 },
        { name: 'TypeScript', icon: '📘', level: 88 },
        { name: 'Tailwind CSS', icon: '🎨', level: 92 },
        { name: 'Vue.js', icon: '💚', level: 75 },
      ],
    },
    {
      title: t.skills.backend,
      skills: [
        { name: 'Node.js', icon: '🟢', level: 85 },
        { name: 'Express', icon: '🚂', level: 80 },
        { name: 'MongoDB', icon: '🍃', level: 82 },
        { name: 'PostgreSQL', icon: '🐘', level: 78 },
        { name: 'GraphQL', icon: '🔷', level: 75 },
      ],
    },
    {
      title: t.skills.tools,
      skills: [
        { name: 'Git', icon: '🔀', level: 88 },
        { name: 'Docker', icon: '🐳', level: 75 },
        { name: 'VS Code', icon: '💻', level: 95 },
        { name: 'Figma', icon: '🎭', level: 70 },
        { name: 'Postman', icon: '📮', level: 85 },
      ],
    },
    {
      title: t.skills.other,
      skills: [
        { name: 'REST API', icon: '🔌', level: 90 },
        { name: 'Responsive Design', icon: '📱', level: 92 },
        { name: 'UI/UX', icon: '✨', level: 80 },
        { name: 'Agile/Scrum', icon: '🔄', level: 75 },
        { name: 'Testing', icon: '🧪', level: 70 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          {t.skills.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow neon-border"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress bar */}
                    <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Technologies */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-6 text-gray-700 dark:text-gray-300">
            {t.skills.other}
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['HTML5', 'CSS3', 'JavaScript', 'Sass', 'Redux', 'Next Auth', 'Prisma', 'Jest', 'Cypress', 'Webpack', 'Vite', 'NPM', 'Yarn'].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:shadow-lg transition-shadow cursor-default"
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
