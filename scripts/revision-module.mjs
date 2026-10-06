import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

export async function writeRevisionModule(root, revision, preview) {
  const dir = join(root, 'src/generated');
  await mkdir(dir, { recursive: true });
  const source = `export const revision = ${JSON.stringify(revision)};\nexport const preview = ${preview ? 'true' : 'false'};\n`;
  await writeFile(join(dir, 'revision.js'), source);
}
