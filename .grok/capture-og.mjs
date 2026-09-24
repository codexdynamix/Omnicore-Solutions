import { chromium } from "playwright";
import { pathToFileURL } from "node:url";
import { join } from "node:path";

const html = pathToFileURL(join("/workspace/.grok/og-card.html")).href;
const out = "/workspace/.grok/card-raw.png";

const browser = await chromium.launch({
  headless: true,
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});
try {
  const page = await browser.newPage({
    viewport: { width: 2400, height: 1260 },
    deviceScaleFactor: 1,
  });
  await page.goto(html, { waitUntil: "networkidle", timeout: 30000 });
  await page.evaluate(async () => {
    await document.fonts.ready;
  });
  await page.waitForTimeout(200);
  await page.screenshot({ path: out, type: "png", clip: { x: 0, y: 0, width: 2400, height: 1260 } });
  console.log(JSON.stringify({ ok: true, out, html }));
} finally {
  await browser.close();
}
