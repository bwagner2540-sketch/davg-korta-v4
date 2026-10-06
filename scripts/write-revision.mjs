import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { writeRevisionModule } from './revision-module.mjs';

const root = fileURLToPath(new URL('..', import.meta.url));
const result = spawnSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' });
const revision = result.status === 0 ? result.stdout.trim().toLowerCase() : '';
await writeRevisionModule(root, /^[a-f0-9]{40}$/.test(revision) ? revision : '', false);
