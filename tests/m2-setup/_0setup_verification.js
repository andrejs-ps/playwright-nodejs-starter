const { chromium } = require('@playwright/test');

(async function firstScript() {
  const browser = await chromium.launch();  
  await browser.close();
  console.log("we reached this line");
})();