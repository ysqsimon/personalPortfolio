import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// Get base path from environment or use repository name
function getBasePath(): string {
  // If GITHUB_PAGES is set, use the repository name from GitHub Actions
  if (process.env.GITHUB_PAGES === "true") {
    // Extract repo name from GITHUB_REPOSITORY (format: owner/repo)
    // GitHub Actions automatically provides GITHUB_REPOSITORY
    const repo = process.env.GITHUB_REPOSITORY || "ysqsimon/personalPortfolio"
    const repoName = repo.split("/")[1]
    const basePath = `/${repoName}/`
    console.log(`Building for GitHub Pages with base path: ${basePath}`)
    return basePath
  }
  return "/"
}

// https://vite.dev/config/
export default defineConfig({
  base: getBasePath(),
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})