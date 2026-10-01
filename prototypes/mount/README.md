# Mount prototypes

Original React prototypes copied from the Mounted and Gallery projects in the verbs chat. Gallery includes embedded artwork fallbacks and their original credits.

Edit `frame.tsx` or `gallery.tsx`, then run `npm run prototypes:build`. The regular dev, check, and build commands also generate the standalone HTML automatically. They run inside sandboxed iframes in the post, so their global styles and React runtime stay isolated from Svelte.

The generated HTML lives next to the post. When publishing, move the entire post folder, including `prototypes`, from `src/content/drafts` to `src/content/writing`. The build script finds it in either location.
