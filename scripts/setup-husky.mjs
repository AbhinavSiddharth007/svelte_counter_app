import { execSync, spawnSync } from 'node:child_process';
import { relative, resolve } from 'node:path';

try {
  const repoRoot = execSync('git rev-parse --show-toplevel', {
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'ignore'],
  }).trim();
  const huskyDir = (
    relative(repoRoot, resolve(process.cwd(), '.husky')) || '.husky'
  )
    .split('\\')
    .join('/');
  const npx = process.platform === 'win32' ? 'npx.cmd' : 'npx';
  const result = spawnSync(npx, ['husky', huskyDir], {
    cwd: repoRoot,
    stdio: 'inherit',
  });

  process.exit(result.status ?? 0);
} catch {
  process.exit(0);
}
