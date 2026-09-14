import { chromium } from 'playwright';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1400, height: 1000 } });
await page.goto('http://localhost:3000/vote', { waitUntil: 'networkidle' });
await page.screenshot({ path: '/tmp/claude-1000/-home-anson225-react-projects-Anson-ucausa-nextjs/fe3897b8-34f7-452b-9ef4-d351db2d7389/scratchpad/vote-full.png', fullPage: true });
await browser.close();
