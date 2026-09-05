# Rive Portfolio

An interactive portfolio for motion designer and Rive developer Mordecai. The site presents production-minded character rigs, state machines, and UI micro-interactions as live `.riv` experiences instead of static screenshots.

**Repository:** [Modexanderson/rive-portfolio](https://github.com/Modexanderson/rive-portfolio)

## What is included

- A responsive portfolio layout with work, services, process, and contact sections.
- Live Rive canvases powered by [`@rive-app/react-canvas`](https://github.com/rive-app/rive-wasm).
- Six interactive examples covering characters, avatars, facial rigs, toggles, download states, and cursor tracking.
- A reusable `RivePlayer` component for loading and sizing `.riv` files.
- Vite's optimized production build and TypeScript project references.
- Firebase Hosting configuration with an SPA rewrite to `index.html`.

## Tech stack

| Layer | Technology |
| --- | --- |
| UI | React 19 + TypeScript |
| Build | Vite 8 |
| Animation | Rive runtime for React |
| Quality | TypeScript + Oxlint |
| Hosting | Firebase Hosting |

## Requirements

- Node.js 22 or newer
- npm 10 or newer
- Firebase CLI for Firebase deployment

## Run locally

```bash
npm install
npm run dev
```

Vite will print the local URL, normally `http://localhost:5173`.

## Available commands

```bash
npm run dev       # Start the Vite development server
npm run build     # Type-check and create dist/
npm run preview   # Preview the production build locally
npm run lint      # Run Oxlint
```

Run the build before deploying. It catches TypeScript errors and produces the static files Firebase serves.

## Adding a Rive example

1. Add the `.riv` file to [`public/riv`](public/riv).
2. Add an entry to the `projects` list in [`src/App.tsx`](src/App.tsx).
3. Use the public path, for example `/riv/my-animation.riv`.
4. Confirm the animation loads in the browser and test its hover and click behavior.

The `RivePlayer` component owns the runtime canvas setup, sizing, and lifecycle. Keep portfolio metadata in `App.tsx` and animation binaries in `public/riv`.

## Deploy with Firebase

The repository is configured for the Firebase project `mordecai-rive`.

```bash
npm run build
firebase login
firebase use mordecai-rive
firebase deploy --only hosting
```

`firebase.json` serves `dist` and rewrites all routes to `index.html`, which keeps the single-page app navigation working on refresh.

## Project structure

```text
public/riv/          Rive animation assets
src/components/      Reusable React components
src/App.tsx          Portfolio content and page composition
src/App.css          Portfolio-specific styles
src/index.css        Global styles and typography
firebase.json        Firebase Hosting configuration
vite.config.ts       Vite configuration
```

## Design direction

The interface is intentionally editorial and interaction-led: warm neutral surfaces, bright accent color, oversized type, and generous spacing keep attention on the animated work. Rive files remain static assets so the portfolio can be deployed as a fast, cacheable static site.

## License

The portfolio source is private creative work. Do not reuse the artwork or `.riv` assets without permission.
