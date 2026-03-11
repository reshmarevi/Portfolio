# Portfolio

A single-page portfolio site built with React, Vite, TypeScript, and Framer Motion. Deploys to GitHub Pages.

## Setup

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Edit your content**

   Update [src/content/site.ts](src/content/site.ts) with your name, experience, projects, skills, and contact links.

3. **Run locally**

   ```bash
   npm run dev
   ```

4. **Build**

   ```bash
   npm run build
   ```

## Deploy to GitHub Pages

1. Create a new repository (e.g. `portfolio`) and push this project.

2. In the repo **Settings → Pages**:
   - **Source**: choose **GitHub Actions**.

3. The workflow [.github/workflows/deploy.yml](.github/workflows/deploy.yml) runs on every push to `main` and deploys the built site.

4. **Base URL**: The app is built with base path `/portfolio/` when `GITHUB_ACTIONS` is set, so the site will be available at:
   - `https://<your-username>.github.io/portfolio/`

   If this repo is your **user/org site** (repo name `username.github.io`), change the base in [vite.config.ts](vite.config.ts) to:

   ```ts
   base: process.env.GITHUB_ACTIONS ? '/' : '/',
   ```

## Stack

- React 18 + TypeScript
- Vite
- React Router (HashRouter for GitHub Pages)
- Framer Motion (scroll animations, reduced-motion aware)
- CSS Modules + CSS variables
