import { test, expect } from '@playwright/test';

test('Generic locators example', async ({ page }) => {
    await page.goto('/');

    await page.locator('.needs-validation label[for="firstName"]').fill('Tylor');

    await page.locator('//button[text()="Register"]').click();

    await expect(page.locator('text=Valid last name is required')).toBeVisible();
});