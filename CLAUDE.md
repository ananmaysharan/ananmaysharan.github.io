# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for www.ananmay.net built with SvelteKit 2 and Svelte 4. Uses Vite for bundling and deploys as a static site to GitHub Pages.

## Common Commands

```bash
npm run dev          # Start development server
npm run build        # Production build (outputs to /build)
npm run preview      # Preview production build locally
npm run check        # Run svelte-check for TypeScript/Svelte validation
npm run check:watch  # Run svelte-check in watch mode
```

## Architecture

**Routing**: SvelteKit file-based routing in `src/routes/`. Each route has `+page.svelte` for the component and optionally `+layout.svelte` for shared layout.

**Components**: Reusable components in `src/lib/components/` - imported via `$lib/components/ComponentName.svelte` alias.

**Assets**: Images and icons in `src/lib/assets/`. Project images use WebP/WebM formats for optimization.

**Styling**: Global CSS in `src/styles.css` with component-scoped styles in Svelte `<style>` blocks. Responsive breakpoints at 768px and 992px.

### Key Pages
- `/` - Homepage with auto-rotating Gallery and Last.fm Listening widget
- `/work` - Project gallery with Card components
- `/work/[projects]` - Individual project case study pages (dynamic routes)
- `/links` - Interactive links page with matter-js physics engine
- `/about` - Bio page

### External Integrations
- **Last.fm API**: Used in `Listening.svelte` for displaying currently playing track with 2-minute localStorage caching
- **matter-js**: 2D physics engine for interactive button animations on the links page

## Static Site Generation

All pages are pre-rendered (`export const prerender = true` in root layout). Uses `@sveltejs/adapter-static` to generate static HTML.

## Deployment

GitHub Actions workflow (`.github/workflows/static-deploy.yml`) automatically deploys to GitHub Pages on push to main branch.

## TypeScript

Strict mode enabled. Uses `svelte-check` for validation. Some components use `@ts-nocheck` for flexibility.

## Icons

Custom SVG icons loaded via `unplugin-icons` from `src/lib/assets/icons/` and `@iconify/json` package.
