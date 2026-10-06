import { defineConfig } from 'vite'
import { sveltekit } from '@sveltejs/kit/vite'
import tailwindcss from '@tailwindcss/vite'
import adapter from '@sveltejs/adapter-static'
import { mdsvex } from 'mdsvex'
import process from 'node:process'

export default defineConfig({
  plugins: [
    {
      name: 'exclude-unpublished-drafts',
      apply: 'build',
      enforce: 'pre',
      transform(code, id) {
        const path = id.split('?')[0];
        if (!path.endsWith('/src/lib/server/writing.ts') &&
            !path.includes('/src/routes/writing/preview/[slug]/+page.')) return;
        // Remove draft globs before Vite discovers their dynamic imports.
        // A dev conditional alone still emits otherwise unreachable chunks.
        return code.replace(/const drafts = dev \? import\.meta\.glob[^;]+;/g, 'const drafts = {};');
      }
    },
    tailwindcss(),
    sveltekit({
      extensions: ['.svelte', '.svx'],
      preprocess: mdsvex({ extensions: ['.svx'] }),
      adapter: adapter({ fallback: '404.html' }),
      paths: { base: (process.env.BASE_PATH ?? '') as '' | `/${string}`, origin: 'https://ananmay.net' },
    }),
  ]
})
