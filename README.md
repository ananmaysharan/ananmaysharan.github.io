# Portolio

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

This project uses SvelteKit 3, Svelte 5, and Vite 8. Use Node.js 24 (Node.js 22.17 or later is required).
Configuration lives in `vite.config.ts`; project imports use `#lib/*`, declared in `package.json`.

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

The static adapter outputs the site to `build`. Pushes to `main` build and deploy it to GitHub Pages.
