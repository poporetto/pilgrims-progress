import { chromium } from '../film/node_modules/playwright-core/index.mjs';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
export async function launch() {
  const chrome = join(process.env.HOME, 'Library/Caches/ms-playwright/chromium-1228/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing');
  return chromium.launch({ executablePath: existsSync(chrome) ? chrome : undefined, args: ['--use-angle=metal', '--enable-gpu', '--ignore-gpu-blocklist'] });
}
