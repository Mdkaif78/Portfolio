# Copilot instructions for this repository

## Project overview

This repository is a Vite + React + TypeScript single-page portfolio for Mohammad Kaif. The app is intentionally data-driven: most personal content, skills, projects, education, and experience entries live in `src/data/portfolioData.ts`, while the React components under `src/components/` render that structured data.

The app is a client-side portfolio/site with a lightweight theme toggle, custom section reveal behavior, and a downloadable CV preview modal. The app shell is assembled in `src/App.tsx`.

## Build, test, and lint commands

Use the repository scripts defined in `package.json`:

```bash
npm install
npm run dev
npm run build
npm run lint
```

Notes:
- There is no `npm test` script or automated test suite configured in this project right now.
- If you need to validate the TypeScript build without a full bundle, `npm run build` is the relevant check because it runs `tsc -b && vite build`.
- `npm run lint` uses `oxlint`; it currently exits successfully but may surface existing warnings that should be considered before broad refactors.

## Architecture and code flow

- `src/main.tsx` is the app entry point and mounts React into the DOM.
- `src/App.tsx` composes the page sections: Navbar, Hero, About, Skills, Projects, Education, Experience, Contact, Footer, and CV modal.
- `src/data/portfolioData.ts` is the canonical content source for the portfolio. This is the first place to edit when changing personal details, projects, resume content, or skills.
- `src/components/` contains the granular UI sections. Prefer reusing existing component patterns rather than introducing new app-level state for simple content changes.
- `src/hooks/useTheme.ts` manages the app theme in `localStorage` and toggles the `dark` class on `document.documentElement`.
- `src/App.css` and `src/index.css` contain supporting styles and Tailwind setup; keep custom styling consistent with the existing warm editorial aesthetic.
- Static files that are likely consumed directly by the browser (for example the CV PDF and icons) live in `public/` and are referenced from the site rather than bundled as React modules.

## Key conventions

- Keep portfolio content data-first: if a change is informational, edit the typed data object in `src/data/portfolioData.ts` instead of hard-coding text inside a component.
- Preserve the existing type contracts (`ProjectItem`, `SkillItem`, etc.) when updating the data model; they are used to keep the UI and content aligned.
- Treat the app as a single-page portfolio rather than a multi-route application. Avoid adding a router or complex state management unless the task specifically requires it.
- Dark mode is a project convention, not a one-off style. Use the existing `theme` pattern and Tailwind `dark:` classes rather than introducing a separate styling system.
- The project uses a static content model with optional external links. When a link is intentionally blank, keep the field empty rather than inventing placeholder URLs.
- For front-end/UI work, prefer small, section-oriented component changes aligned with the existing layout and naming patterns.

## Repository-specific guidance

- `README.md` is intentionally minimal; treat the source-of-truth content as the data file and the component structure instead of guessing from the README.
- This is a personal portfolio, so edits often focus on content, copy, and presentation rather than business logic or API integration.
- When updating the CV or downloadable assets, keep the file names aligned with the values defined in `portfolioData.personal.cvFileName` and related links.
- The project currently does not include a unit test framework or CI workflow; the reliable validation path is the build and lint scripts above.
