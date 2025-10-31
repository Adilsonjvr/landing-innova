const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const TARGET_URL = 'https://www.mesoestetic.pt/?utm_source=paid_search&utm_medium=cpc&utm_campaign=pt_performance_low_sea_purchase_brand&campaignid=7132566132&adgroupid=83961611007&adid=391023401915&gad_source=1&gad_campaignid=7132566132&gclid=Cj0KCQjwvJHIBhCgARIsAEQnWlCkpnOG50rK3LOAB7YWyj36fD054u6QyABscafgnCkkWBj_uRDHeQwaAsE3EALw_wcB';
const OUTPUT_PATH = path.join(__dirname, '..', 'assets', 'css', 'mesoestetic-styles.css');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto(TARGET_URL, { waitUntil: 'domcontentloaded', timeout: 120000 });
  await page.waitForTimeout(5000);

  const inlineCss = await page.$$eval('style', (nodes) =>
    nodes.map((node) => node.textContent.trim()).filter(Boolean)
  );

  const stylesheetUrls = await page.$$eval('link[rel="stylesheet"]', (links) =>
    links.map((link) => link.getAttribute('href')).filter(Boolean)
  );

  const baseUrl = page.url();

  const uniqueUrls = Array.from(
    new Set(
      stylesheetUrls
        .map((href) => {
          try {
            return new URL(href, baseUrl).href;
          } catch {
            return null;
          }
        })
        .filter(Boolean)
    )
  );

  let combinedCss = '';

  if (inlineCss.length) {
    combinedCss += `/* Inline styles */\n${inlineCss.join('\n\n')}\n\n`;
  }

  for (const cssUrl of uniqueUrls) {
    try {
      const response = await page.request.get(cssUrl);
      if (!response.ok()) {
        console.warn(`Failed to fetch ${cssUrl}: ${response.status()}`);
        continue;
      }

      const text = await response.text();
      combinedCss += `/* Source: ${cssUrl} */\n${text}\n\n`;
    } catch (error) {
      console.warn(`Error fetching ${cssUrl}: ${error.message}`);
    }
  }

  await browser.close();

  if (!combinedCss.trim()) {
    console.error('No CSS extracted.');
    process.exit(1);
  }

  fs.writeFileSync(OUTPUT_PATH, combinedCss, 'utf8');
  console.log(`Extracted CSS saved to ${OUTPUT_PATH}`);
})();
