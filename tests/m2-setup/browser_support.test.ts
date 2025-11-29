import {test, chromium, webkit, firefox} from '@playwright/test';

test('Browser support test', async ({ page }) => { // page is called a `fixture` in Playwright
    for(const browserType of [chromium, webkit, firefox]) {
        console.log('Running: ', browserType.name());

        await page.goto('https://whatsmybrowser.org/');
        await page.screenshot({ path: `pw-${browserType.name()}.png` });

    }
});