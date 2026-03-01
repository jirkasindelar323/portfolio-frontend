# Agent Guidelines for portfolio-frontend

## Project Overview
This is a React 19 + TypeScript portfolio frontend using Vite. It fetches data from a backend API and displays personal info, projects, and skills.

## Build / Lint / Test Commands

```bash
# Development
npm run dev              # Start Vite dev server

# Production build
npm run build            # Type-check (tsc -b) + Vite build

# Linting
npm run lint             # Run ESLint on all files

# Preview
npm run preview          # Preview production build locally
```

**Note:** This project does not have test commands configured. Do not add tests unless explicitly requested.

### Running a Single File Lint
```bash
npm run lint -- --fix src/App.tsx    # Lint specific file with auto-fix
```

## Code Style Guidelines

### TypeScript
- **Strict mode enabled** - All TypeScript strict checks are on
- Use `import type` for type-only imports (required by `verbatimModuleSyntax`)
- Define interfaces in `src/types/index.ts` for shared types
- Component Props: define inline or as `interface Props { ... }`

### React Patterns
- Use named exports for components (e.g., `export function ProjectsSection`)
- Use function components with hooks, not classes
- Prefer `useEffect` + async functions for data fetching
- Handle loading and error states explicitly

### Imports
```typescript
// Type imports first
import type { Project } from '../types';

// Then external libraries
import { FaGithub } from 'react-icons/fa';

// Then relative imports
import { getProjects } from './services/api';
import './App.css';
```

### Naming Conventions
- **Components**: PascalCase (e.g., `ProjectsSection.tsx`)
- **Functions/variables**: camelCase
- **Interfaces**: PascalCase (e.g., `interface PersonalInfo`)
- **Files**: kebab-case for components, camelCase for utilities

### JSX / JSX-X
- Always include `rel="noopener noreferrer"` on external links
- Use self-closing tags for empty elements
- Prefer fragments to avoid extra DOM nodes

### Error Handling
```typescript
try {
  const data = await fetchData();
  setData(data);
} catch (err) {
  setError('User-friendly error message');
  console.error(err);  // Log the actual error for debugging
}
```

### CSS
- Use separate `.css` files (not CSS-in-JS)
- Use descriptive class names (e.g., `.projects-grid`, `.skill-item`)
- Follow BEM-like naming: block__element--modifier

### Accessibility
- Add `aria-label` to icon-only links
- Use semantic HTML elements (`<section>`, `<header>`, `<main>`)

## Project Structure
```
src/
├── components/        # React components
├── services/          # API calls
├── types/             # TypeScript interfaces
├── App.tsx            # Main app component
├── main.tsx           # Entry point
└── *.css              # Stylesheets
```

## Key Dependencies
- React 19 + React DOM 19
- TypeScript 5.9
- Vite 7
- ESLint 9 with typescript-eslint
- react-icons

## Environment
- API base URL: `/api` (configure via proxy in vite.config.ts if needed)
- No environment variables currently used

---

## Full-Stack Context

This frontend is part of a complete portfolio website project consisting of:

| Component | Repository | Purpose |
|-----------|------------|---------|
| Frontend | `portfolio-frontend` (this repo) | React/TypeScript UI |
| Backend | github.com/jirkasindelar323/portfolio | API serving portfolio data |
| Deployment | Railway | Hosting both FE + BE |
| Secrets | GitHub Secrets + Railway Variables | API keys, tokens, config |

### Current Intentions & Plans

*(Update this section when working on new features)*

- **Frontend**: Display personal info, projects, and skills from backend API
- **Backend**: Serves data at `/api/info`, `/api/projects`, `/api/skills`
- **Deployment**: Both deployed on Railway with environment variables

### Synchronization Protocol

When working across the full stack:

1. **Before starting work**: Check this file and any shared notes
2. **When deploying**: Note URL changes in this file
3. **When adding secrets**: Document which service holds what (GitHub vs Railway)
4. **When creating new features**: Note the intention and affected components

### API Contract

The frontend expects these endpoints from the backend:

```
GET /api/info  → { name, pronunciation, title, bio, email, github, linkedin, location }
GET /api/projects → [{ name, description, techStack, githubUrl, liveUrl }]
GET /api/skills → [{ name, category, proficiency }]
```

*(Keep these in sync with backend if changes occur)*
