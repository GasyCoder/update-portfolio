export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics: string[];
}

export interface GitHubContribution {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

const GITHUB_USERNAME = 'GasyCoder';
const GITHUB_API_BASE = 'https://api.github.com';

// Language colors matching GitHub's color scheme
export const languageColors: { [key: string]: string } = {
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  Python: '#3572A5',
  Java: '#b07219',
  'C++': '#f34b7d',
  C: '#555555',
  'C#': '#178600',
  PHP: '#4F5D95',
  Ruby: '#701516',
  Go: '#00ADD8',
  Rust: '#dea584',
  Swift: '#ffac45',
  Kotlin: '#A97BFF',
  Dart: '#00B4AB',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Vue: '#41b883',
  React: '#61dafb',
  Svelte: '#ff3e00',
  Shell: '#89e051',
  Dockerfile: '#384d54',
};

/**
 * Fetch user's public repositories from GitHub
 */
export async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(
      `${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
      {
        headers: {
          Accept: 'application/vnd.github.v3+json',
        },
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const repos: GitHubRepo[] = await response.json();

    // Sort by stars and recent activity
    return repos.sort((a, b) => {
      // Prioritize starred repos
      if (a.stargazers_count !== b.stargazers_count) {
        return b.stargazers_count - a.stargazers_count;
      }
      // Then by recent updates
      return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
    });
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return [];
  }
}

/**
 * Fetch GitHub contribution data using GraphQL API
 * Note: Requires GITHUB_TOKEN environment variable for authentication
 */
export async function fetchGitHubContributions(): Promise<GitHubContribution[]> {
  try {
    // Check if GitHub token is available
    const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

    if (!token) {
      console.warn('GitHub token not found. Contribution graph will not be available.');
      console.warn('To enable: Add NEXT_PUBLIC_GITHUB_TOKEN to your .env.local file');
      return [];
    }

    const query = `
      query {
        user(login: "${GITHUB_USERNAME}") {
          contributionsCollection {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  contributionCount
                  date
                }
              }
            }
          }
        }
      }
    `;

    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/vnd.github.v4+json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ query }),
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error(`GitHub GraphQL API error: ${response.status}`);
    }

    const data = await response.json();

    if (data.errors) {
      console.error('GraphQL errors:', data.errors);
      return [];
    }

    const weeks = data.data?.user?.contributionsCollection?.contributionCalendar?.weeks || [];
    const contributions: GitHubContribution[] = [];

    weeks.forEach((week: any) => {
      week.contributionDays.forEach((day: any) => {
        const count = day.contributionCount;
        let level: 0 | 1 | 2 | 3 | 4 = 0;

        if (count === 0) level = 0;
        else if (count <= 3) level = 1;
        else if (count <= 6) level = 2;
        else if (count <= 9) level = 3;
        else level = 4;

        contributions.push({
          date: day.date,
          count,
          level,
        });
      });
    });

    return contributions;
  } catch (error) {
    console.error('Error fetching GitHub contributions:', error);
    return [];
  }
}

/**
 * Get the top repositories (pinned or most popular)
 */
export async function getTopRepositories(limit: number = 6): Promise<GitHubRepo[]> {
  const repos = await fetchGitHubRepos();
  return repos.slice(0, limit);
}

/**
 * Get language color for a given language
 */
export function getLanguageColor(language: string | null): string {
  if (!language) return '#858585';
  return languageColors[language] || '#858585';
}
