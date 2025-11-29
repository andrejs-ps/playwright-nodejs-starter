import { test, expect } from '@playwright/test';

test('Filtering demo', async ({ page }) => {
    await page.goto('/savings.html');

    const rows = page.getByRole('row');
    console.log('Total rows: ' + await rows.count());

    const row = page.getByRole('row')
        .filter({ hasText: 'Competition' });

    console.log('Filtered rows: ' + await row.textContent());

    const cell = page.getByRole('row')
        .filter({ hasText: 'Competition' })
        .getByRole('cell').nth(1);

    console.log('Filtered cell: ' + await cell.textContent());


});