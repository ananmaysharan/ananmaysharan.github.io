import { build } from 'esbuild';
import { access, mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const slug = 'parts-of-speech-interaction-design-week-1';
let content = 'drafts';
try { await access(`${root}src/content/writing/${slug}/index.svx`); content = 'writing'; } catch { /* Still a draft. */ }
const output = `${root}src/content/${content}/${slug}/prototypes`;
await mkdir(output, { recursive: true });

for (const name of ['frame', 'gallery']) {
    const result = await build({
        stdin: {
            contents: `import React from 'react'; import { createRoot } from 'react-dom/client'; import App from './prototypes/mount/${name}.tsx'; createRoot(document.getElementById('root')).render(React.createElement(App));`,
            resolveDir: root,
            loader: 'tsx'
        },
        bundle: true,
        write: false,
        format: 'iife',
        jsx: 'automatic',
        minify: true,
        define: { 'process.env.NODE_ENV': '"production"' }
    });
    // Inline scripts must not accidentally close their containing HTML element.
    const script = result.outputFiles[0].text.replace(/<\/script/gi, '<\\/script');
    await writeFile(`${output}/${name}.html`, `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Mount — ${name}</title><style>html,body,#root{margin:0;width:100%;height:100%;}</style></head><body><div id="root"></div><script>${script}</script></body></html>`);
    console.log(`Built ${name} prototype`);
}
