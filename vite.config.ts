import { defineConfig } from 'vite'
import { sveltekit } from '@sveltejs/kit/vite'
import Icons from 'unplugin-icons/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders';


export default defineConfig({
  plugins: [
    sveltekit(),
    Icons({
      compiler: 'svelte',
      customCollections: {
        myIcons: FileSystemIconLoader('./src/lib/assets', svg => svg.replace(/^<svg /, '<svg fill="currentColor" ')),
      },
    })
  ]
})