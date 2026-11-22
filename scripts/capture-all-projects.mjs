import { chromium } from "playwright";
import { execSync } from "child_process";
import fs from "fs";

const targets = [
  {
    name: "startvisa",
    url: "https://www.startvisa.com/",
    selector: "body"
  },
  {
    name: "houseofvaz",
    url: "https://houseofvaz.com/",
    selector: "body"
  },
  {
    name: "goldenacres",
    url: "https://www.goldenacresrealestate.co.in/",
    selector: "body"
  },
  {
    name: "yuvaparipalan",
    url: "https://www.yuvaparipalan.com/",
    selector: "body"
  },
  {
    name: "palananeurosync",
    url: "https://palananeurosync.com/",
    selector: "body"
  }
];

async function run() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1.5,
    userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  });

  for (const t of targets) {
    console.log(`Navigating to ${t.name}: ${t.url}`);
    const page = await context.newPage();
    try {
      await page.goto(t.url, { waitUntil: "networkidle", timeout: 35000 });
      await page.waitForTimeout(2500);
      
      const tmpPng = `/tmp/${t.name}.png`;
      await page.screenshot({ path: tmpPng, clip: { x: 0, y: 0, width: 1440, height: 900 } });
      console.log(`Saved screenshot to ${tmpPng}`);
      
      // Convert to WebP and JPG
      execSync(`cwebp -q 88 "${tmpPng}" -o "public/projects/${t.name}.webp"`);
      execSync(`sips -s format jpeg -s formatOptions 85 "${tmpPng}" --out "public/projects/${t.name}.jpg"`);
      console.log(`Processed ${t.name} -> webp and jpg`);
    } catch (err) {
      console.error(`Error capturing ${t.name}:`, err.message);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  console.log("All screenshots captured and optimized!");
}

run();
