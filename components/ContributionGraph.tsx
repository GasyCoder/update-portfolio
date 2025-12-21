'use client';

import { useEffect, useState } from 'react';

export default function ContributionGraph() {
  const [contributions, setContributions] = useState<number[][]>([]);

  useEffect(() => {
    // Generate random contribution data for the last 12 months (52 weeks)
    const weeks = 52;
    const daysPerWeek = 7;
    const data: number[][] = [];

    for (let week = 0; week < weeks; week++) {
      const weekData: number[] = [];
      for (let day = 0; day < daysPerWeek; day++) {
        // Random contribution count (0-4 levels)
        weekData.push(Math.floor(Math.random() * 5));
      }
      data.push(weekData);
    }
    setContributions(data);
  }, []);

  const getContributionColor = (level: number) => {
    const colors = {
      0: 'bg-gray-100 dark:bg-gray-800',
      1: 'bg-green-200 dark:bg-green-900',
      2: 'bg-green-400 dark:bg-green-700',
      3: 'bg-green-600 dark:bg-green-500',
      4: 'bg-green-700 dark:bg-green-400',
    };
    return colors[level as keyof typeof colors] || colors[0];
  };

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
        Contribution Activity
      </h2>

      <div className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg bg-white dark:bg-[#0d1117]">
        {/* Month labels */}
        <div className="flex gap-1 mb-2 text-xs text-gray-600 dark:text-gray-400 ml-8">
          {months.map((month, index) => (
            <div key={index} className="w-12" style={{ marginLeft: index === 0 ? 0 : '32px' }}>
              {month}
            </div>
          ))}
        </div>

        {/* Contribution grid */}
        <div className="flex gap-1 overflow-x-auto">
          {contributions.map((week, weekIndex) => (
            <div key={weekIndex} className="flex flex-col gap-1">
              {week.map((level, dayIndex) => (
                <div
                  key={dayIndex}
                  className={`w-3 h-3 rounded-sm ${getContributionColor(level)}`}
                  title={`${level} contributions`}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex items-center gap-2 mt-4 text-xs text-gray-600 dark:text-gray-400">
          <span>Less</span>
          {[0, 1, 2, 3, 4].map((level) => (
            <div
              key={level}
              className={`w-3 h-3 rounded-sm ${getContributionColor(level)}`}
            />
          ))}
          <span>More</span>
        </div>
      </div>
    </div>
  );
}
