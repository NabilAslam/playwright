import { test, expect } from '@playwright/test';

test('has different color', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await page.getByRole('link', { name: "home" }).click();

    await page.getByRole('button', { name: "home" }).click();

  await expect(page.getByRole('heading', { colorScheme: "light", name: "nav-logo" })).toBeVisible()
});
