import { execFileSync } from 'node:child_process';
import { cpSync, existsSync, mkdirSync, mkdtempSync, readdirSync, readFileSync, symlinkSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

// The complete site immediately before "Simplify homepage presentation".
const revision = 'a23d351';
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const destination = join(root, 'static/archive/2025');
const base = '/archive/2025';
if (existsSync(destination)) throw new Error('Archive already exists. Refusing to overwrite a preserved snapshot.');
const workspace = mkdtempSync(join(tmpdir(), 'portfolio-2025-'));
const source = join(workspace, 'source');
mkdirSync(source);
execFileSync('git', ['archive', revision, '-o', join(workspace, 'source.tar')], { cwd: root });
execFileSync('tar', ['-xf', join(workspace, 'source.tar'), '-C', source]);
symlinkSync(join(root, 'node_modules'), join(source, 'node_modules'), 'dir');

// Only relocate internal URLs. Keep the original components, styling and media.
function relocate(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) relocate(path);
    else if (/\.(svelte|js|ts)$/.test(entry.name)) {
      const original = readFileSync(path, 'utf8');
      const updated = original.replace(/(['"])(\/(?:work(?:\/[a-z0-9-]+)?|about|writing)?)(\1)/g,
        (_, quote, route) => `${quote}${base}${route === '/' ? '/index' : route}.html${quote}`);
      if (updated !== original) writeFileSync(path, updated);
    }
  }
}
relocate(join(source, 'src'));
const configPath = join(source, 'svelte.config.js');
writeFileSync(configPath, readFileSync(configPath, 'utf8').replace('kit: {', 'kit: {\n        prerender: { crawl: false },'));
const templatePath = join(source, 'src/app.html');
writeFileSync(templatePath, readFileSync(templatePath, 'utf8').replace('<body ', '<body data-sveltekit-reload '));
execFileSync('npm', ['run', 'build'], { cwd: source, env: { ...process.env, BASE_PATH: base }, stdio: 'inherit' });
mkdirSync(dirname(destination), { recursive: true });
cpSync(join(source, 'build'), destination, { recursive: true });
writeFileSync(join(destination, 'snapshot.json'), JSON.stringify({
  label: '2025',
  commit: execFileSync('git', ['rev-parse', revision], { cwd: root, encoding: 'utf8' }).trim(),
  note: 'Version before the September 10, 2026 homepage change. Year is an archive label, not the capture date.'
}, null, 2) + '\n');
console.log(`Preserved snapshot in ${destination}`);
