# AI for All? Responsible AI Ethics Portfolio

A React and TypeScript portfolio exploring global AI governance, digital inequality, and responsible AI practice. The site presents semester assignments, ethical analysis, governance principles, creative artifacts, and practical reflection in one responsive experience.

## What is included

- **Home:** introduction to the portfolio and the question of who benefits from AI.
- **The Issue:** global AI governance and structural inequalities across access, data, language, economics, geography, and decision-making.
- **My Portfolio:** six assignments covering fraud detection, Google Maps data auditing, cancer detection, recruitment, education, and facial recognition.
- **Global Inequalities:** analysis of how AI affects communities differently across regions and contexts.
- **Generative AI Lab:** creative ethical artifacts and scenarios, including an interactive ethical decision tool.
- **Governance & Guidelines:** eight responsible AI principles and an interactive pre-deployment checklist.
- **Reflection:** personal reflection on responsible AI and ethical learning.
- **References:** assignment references, research sources, and an AI-use disclosure.

## Features

- Responsive layout for desktop and mobile screens
- Accessible navigation, headings, focus states, and reduced-motion support
- Interactive section reveals, expandable ethical issues, governance checklist, and decision tool
- Realistic domain imagery for the hero and portfolio assignments
- Tailwind CSS styling with a navy, teal, blue, and muted orange visual system

## Tech stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Oxlint

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown by Vite, usually `http://localhost:5173/`.

## Build and checks

```bash
npm run build
npm run lint
```

## Project structure

```text
src/
  components/   Reusable layout, UI, and interactive components
  data/         Portfolio, reference, principle, and artifact content
  pages/        Main portfolio sections
  App.tsx       Page composition and navigation flow
```
