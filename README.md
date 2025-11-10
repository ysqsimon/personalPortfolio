# Resume Portfolio

A modern, interactive resume portfolio built with React, TypeScript, Vite, and Tailwind CSS.

## 🚀 Features

- Modern UI with smooth animations
- Responsive design
- Interactive components
- Auto-deployment to GitHub Pages

## 📦 Installation

```bash
pnpm install
```

## 🛠️ Development

```bash
pnpm dev
```

## 🏗️ Build

```bash
pnpm build
```

## 🚢 Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Initial Setup

1. Go to your repository settings on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. Save the settings

### Auto-Deployment

The project will automatically deploy to GitHub Pages whenever you push to the `main` or `master` branch.

Your live site will be available at:
- `https://ysqsimon.github.io/resume/`

### Manual Deployment

You can also trigger a manual deployment by:
1. Going to the **Actions** tab in your repository
2. Selecting the **Deploy to GitHub Pages** workflow
3. Clicking **Run workflow**

## 📝 Notes

- The base path is configured for GitHub Pages (`/resume/`)
- For local development, the base path is `/`
- All deployments are handled automatically via GitHub Actions
