import { test, chromium } from '@playwright/test';

test('Fixture example test', async ({ page }) => {
    await page.goto('https://playwright.dev');

    console.log("Text content: " + await page.title());
});

test('Other fixtures', async ({ browser, browserName, context, page }) => {
    // Page will be used most often for the UI tests, others are for multipage tests or configuration
});