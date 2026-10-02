import { defineConfig } from 'vite'
import { sveltekit } from '@sveltejs/kit/vite'
import tailwindcss from '@tailwindcss/vite'
import adapter from '@sveltejs/adapter-static'
import { mdsvex } from 'mdsvex'
import process from 'node:process'

export default defineConfig({
  plugins: [
    tailwindcss(),
    sveltekit({
      extensions: ['.svelte', '.svx'],
      preprocess: mdsvex({ extensions: ['.svx'] }),
      adapter: adapter({ fallback: '404.html' }),
      paths: { base: (process.env.BASE_PATH ?? '') as '' | `/${string}`, origin: 'https://ananmay.net' },
    }),
  ]
})
