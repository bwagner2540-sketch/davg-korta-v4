import sharp from 'sharp';
import { readdir, mkdir, readFile, writeFile, stat } from 'node:fs/promises';
import { createHash } from 'node:crypto';
const directory = 'public/images';
await mkdir(`${directory}/responsive`, { recursive: true });
const manifest = {};
let previous = {};
try { previous = JSON.parse(await readFile('src/data/images.json', 'utf8')); } catch {}
for (const file of (await readdir(directory)).sort().filter(name => /\.(webp|jpe?g|png)$/i.test(name))) {
  const bytes = await readFile(`${directory}/${file}`);
  const fingerprint = createHash('sha256').update(bytes).digest('hex');
  const metadata = await sharp(bytes).metadata();
  const variants = [];
  for (const width of [480, 800, 1200, 1600].filter(width => width <= metadata.width)) {
    const name = `${file.replace(/\.[^.]+$/, '')}-${width}.webp`;
    const target = `${directory}/responsive/${name}`;
    let exists = false;
    try { exists = (await stat(target)).size > 0; } catch {}
    if (!exists || previous[`/images/${file}`]?.fingerprint !== fingerprint) await sharp(bytes).rotate().resize({ width, withoutEnlargement: true }).webp({ quality: 82 }).toFile(target);
    variants.push({ src: `/images/responsive/${name}`, width });
  }
  manifest[`/images/${file}`] = { width: metadata.width, height: metadata.height, fingerprint, variants };
}
const text = JSON.stringify(manifest, null, 2) + '\n';
if (JSON.stringify(previous, null, 2) + '\n' !== text) await writeFile('src/data/images.json', text);
console.log(`Responsive images prepared: ${Object.keys(manifest).length} originals.`);
