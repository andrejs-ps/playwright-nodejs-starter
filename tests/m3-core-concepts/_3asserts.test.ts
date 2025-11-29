import { test, expect } from '@playwright/test';

test('Simple assertions test', async ({ page }) => {
    expect('a').toEqual('a');
    expect(2).toBeGreaterThan(1);
    expect(null).toBeFalsy
});

test('Test with simple auto-retrying assertions', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await expect(page).toHaveTitle('Credit Association');
    await expect(page).toHaveURL(process.env.LOCALHOST_URL! || 'http://localhost:3000');


});