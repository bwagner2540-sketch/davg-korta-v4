import { readFile } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';

// Wrangler runs this before deploy. A production deploy still has to pass
// assert-production. A branch preview may upload the sandbox site in dist/.
const command = process.env.WRANGLER_COMMAND || '';
let policy = null;
try {
  policy = JSON.parse(await readFile('dist/build-policy.json', 'utf8'));
} catch {
  policy = null;
}
const previewUpload = policy?.mode === 'preview' && command !== '' && command !== 'deploy';
if (previewUpload) {
  console.log(`Preview dist accepted for wrangler ${command}. Production assert was not applied.`);
  process.exit(0);
}
const result = spawnSync(process.execPath, ['scripts/assert-production.mjs'], { stdio: 'inherit' });
process.exit(result.status ?? 1);
