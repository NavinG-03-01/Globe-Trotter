# Vite + React + shadcn UI (TypeScript)

> Starter template used in the `Globe-Trotter` demo — adapted for the `odoo_Hackathon` workspace.


## ✨ Project overview

This project is a modern frontend scaffold built with:

- Vite
- React 18 + TypeScript
- Tailwind CSS
- shadcn/ui components (Radix primitives + Tailwind)
- Useful libs: `react-router-dom`, `@tanstack/react-query`, `recharts`

It serves as a UI template and demo application (pages, UI components, and example features).


## 🚀 Quick start

Prerequisites:

- Node.js (recommended v18+)
- npm or pnpm

Commands (from the project root `Globe-Trotter`):

```bash
# change into frontend folder
cd Globe-Trotter

# install deps
npm install

# start dev server
npm run dev

# build for production
npm run build

# preview production build locally
npm run preview

# run linter
npm run lint
```


## 🧭 Project structure

- `Globe-Trotter/`
  - `src/` — application source
    - `components/` — UI components and shadcn primitives
    - `pages/` — route pages
    - `hooks/`, `lib/`, `assets/` — utilities and static assets
  - `index.html`, `vite.config.ts`, `package.json` — tooling and config


## 🛠️ Scripts

See `package.json` for scripts. Typical scripts include:

- `dev` — start Vite dev server
- `build` — build production assets
- `preview` — preview production build
- `lint` — run ESLint


## ✅ Features

- Fast dev experience with Vite
- Type-safe UI with TypeScript
- Prebuilt components using shadcn + Radix UI
- Example pages (Home, Dashboard, Trips, Auth, etc.) ready to be extended


## 🧪 Testing / Linting

This template includes ESLint; add unit or integration tests according to your preferred stack (Jest, Vitest, Testing Library, etc.).


## 🤝 Contributing

Contributions are welcome:

1. Fork the repository
2. Create a branch for your change
3. Open a pull request describing the change
