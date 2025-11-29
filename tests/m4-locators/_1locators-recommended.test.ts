import { test, expect } from "@playwright/test";

test('Recommended locators test', async ({ page }) => {
    await page.goto(''); // Don't specify a URL because it is specified in the configuration file
    /**
     * Recommended to save a locator in a variable if it is used multiple times, otherwise you can chain it directly
     * await page.getByLabel('First name').fill('Tylor');
     */
    const firstName = page.getByLabel('First name'); 
    await firstName.fill('Tylor');
    await firstName.clear();

    await page.getByRole('button', { name: 'Register' }).click(); // exact: true for exact match or case sensitive
    await page.getByRole('button', { id: 'Register' }).click(); // You can use id, name, etc.
    const warning = page.getByText('Valid last name is required');
    await expect(warning).toBeVisible();
});