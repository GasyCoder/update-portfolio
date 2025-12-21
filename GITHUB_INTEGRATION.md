# GitHub Integration Guide

This portfolio integrates with the GitHub API to display your real repositories and contribution activity.

## Features

✅ **Automatic Repository Display** - Fetches your top repositories from GitHub
✅ **Contribution Activity Graph** - Shows your GitHub contribution calendar (requires token)
✅ **Real-time Stats** - Displays stars, forks, and programming languages
✅ **Auto-refresh** - Data is cached and refreshed every hour

## Setup Instructions

### 1. Repository Display (No Token Required)

The repository section works automatically and fetches your public repositories from:
```
https://api.github.com/users/GasyCoder/repos
```

No additional setup is needed for this feature!

### 2. Contribution Activity Graph (Optional - Requires Token)

To display your contribution activity graph, you need to create a GitHub Personal Access Token:

#### Step-by-Step:

1. **Go to GitHub Settings**
   - Navigate to: https://github.com/settings/tokens
   - Click "Generate new token" → "Generate new token (classic)"

2. **Configure Token**
   - **Token name**: `Portfolio Contribution Graph`
   - **Expiration**: Choose your preference (recommend 90 days or no expiration)
   - **Scopes**: Select `public_repo` (read-only access to public repositories)

3. **Copy Token**
   - Copy the generated token (you won't see it again!)

4. **Add to Project**
   - Create a file named `.env.local` in the project root
   - Add your token:
   ```bash
   NEXT_PUBLIC_GITHUB_TOKEN=ghp_your_token_here
   ```

5. **Restart Development Server**
   ```bash
   npm run dev
   ```

### Security Notes

⚠️ **Important Security Information:**

- ✅ The token is **read-only** and only accesses public data
- ✅ `.env.local` is already in `.gitignore` (never committed to git)
- ✅ The `NEXT_PUBLIC_` prefix makes it available in the browser (safe for public data)
- ✅ No sensitive information is exposed
- ❌ Never commit `.env.local` to version control
- ❌ Don't share your token publicly

## What Gets Displayed

### Repositories Section
- Top 6 repositories (sorted by stars and recent activity)
- Repository name, description, and link
- Programming language with color badge
- Star count and fork count
- Repository topics (tags)
- Homepage link (if available)

### Contribution Graph
- Last 365 days of contribution activity
- Color-coded contribution levels
- Hover tooltips showing contribution count
- Total contribution count for the year

## Customization

To change the GitHub username, edit `/lib/github.ts`:

```typescript
const GITHUB_USERNAME = 'GasyCoder'; // Change this to your username
```

To change the number of displayed repositories, edit the call in `/components/PinnedRepos.tsx`:

```typescript
const repos = await getTopRepositories(6); // Change 6 to your desired count
```

## Troubleshooting

### Repositories not showing
- Check that the GitHub username is correct in `/lib/github.ts`
- Verify you have public repositories
- Check browser console for API errors

### Contribution graph not showing
- Ensure `.env.local` exists with the token
- Verify the token has `public_repo` permissions
- Check that the token hasn't expired
- Look for console warnings about missing token

### Data not updating
- Data is cached for 1 hour by default
- Clear browser cache or wait for cache to expire
- Restart development server after changing `.env.local`

## API Rate Limits

- **Without Token**: 60 requests per hour per IP
- **With Token**: 5,000 requests per hour

The portfolio caches data for 1 hour, so you won't hit these limits under normal usage.

## Learn More

- [GitHub REST API Documentation](https://docs.github.com/en/rest)
- [GitHub GraphQL API Documentation](https://docs.github.com/en/graphql)
- [Creating Personal Access Tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
