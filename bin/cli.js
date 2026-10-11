#!/usr/bin/env node
import { cp, mkdir, lstat, readFile, readdir, rename } from 'node:fs/promises';
import { homedir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const name = 'scientific-english-polish';
const root = fileURLToPath(new URL('../', import.meta.url));
const source = path.join(root, 'skills', name);
const args = process.argv.slice(2);
async function exists(p) {
  try { return await lstat(p); } catch (e) { if (e.code === 'ENOENT') return null; throw e; }
}
async function sameTree(a, b) {
  const stat = await exists(b);
  if (!stat?.isDirectory() || stat.isSymbolicLink()) return false;
  const aa = (await readdir(a)).sort(), bb = (await readdir(b)).sort();
  if (aa.join('\0') !== bb.join('\0')) return false;
  for (const item of aa) {
    const ap = path.join(a, item), bp = path.join(b, item);
    const as = await lstat(ap), bs = await exists(bp);
    if (!bs || bs.isSymbolicLink()) return false;
    if (as.isDirectory()) { if (!await sameTree(ap, bp)) return false; }
    else if (!bs.isFile() || !(await readFile(ap)).equals(await readFile(bp))) return false;
  }
  return true;
}
async function main() {
  if (!args.length || ['--help', '-h', 'help'].includes(args[0])) {
    console.log('scientific-english-polish install [--project | --dir <skills-directory>] [--force]\nscientific-english-polish path [--project | --dir <skills-directory>]\nscientific-english-polish --version\nDefault: ~/.agents/skills. --force backs up an existing different skill before updating.'); return;
  }
  if (args[0] === '--version' && args.length === 1) {
    console.log(JSON.parse(await readFile(path.join(root, 'package.json'), 'utf8')).version); return;
  }
  const command = args.shift();
  if (!['install', 'path'].includes(command)) throw new Error(`Unknown command: ${command}`);
  let dir, project = false, force = false;
  while (args.length) {
    const flag = args.shift();
    if (flag === '--project') project = true;
    else if (flag === '--force') force = true;
    else if (flag === '--dir') {
      dir = args.shift();
      if (!dir || dir.startsWith('--')) throw new Error('--dir requires a directory.');
    } else throw new Error(`Unknown option: ${flag}`);
  }
  if (dir && project) throw new Error('Choose --dir or --project, not both.');
  const parent = path.resolve(dir || path.join(project ? process.cwd() : homedir(), '.agents', 'skills'));
  const destination = path.join(parent, name);
  if (command === 'path') { console.log(destination); return; }
  const existing = await exists(destination);
  if (existing && await sameTree(source, destination)) { console.log(`Already installed: ${destination}`); return; }
  if (existing && !force) throw new Error(`Existing skill differs: ${destination}\nUse --force to preserve a backup and update.`);
  if (existing?.isSymbolicLink()) throw new Error('Refusing to replace a symlink.');
  await mkdir(parent, { recursive: true });
  const suffix = `${Date.now()}-${process.pid}`;
  const staging = path.join(path.dirname(parent), `.scientific-english-polish-stage-${suffix}`);
  await cp(source, staging, { recursive: true, errorOnExist: true, force: false });
  let backup;
  if (existing) {
    const backupRoot = path.join(path.dirname(parent), 'skill-backups');
    await mkdir(backupRoot, { recursive: true });
    backup = path.join(backupRoot, `${name}-${suffix}`);
    await rename(destination, backup);
  }
  try { await rename(staging, destination); }
  catch (e) { if (backup && !await exists(destination)) await rename(backup, destination); throw e; }
  console.log(`Installed: ${destination}`);
  if (backup) console.log(`Previous copy preserved: ${backup}`);
  console.log('In Codex: use $scientific-english-polish to polish your text.');
}
main().catch(e => { console.error(e.message); process.exitCode = 1; });
