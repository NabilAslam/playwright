import { test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://www.versacommerce.de/");
  await page.getByRole("link", { name: "Login" }).click();

  await page
    .locator("input[name='login']")
    .pressSequentially("aslam+playwright@versacommerce.de", { delay: 90 });
  await page
    .locator("input[name='password']")
    .pressSequentially("55555", { delay: 90 });
  await page.getByRole("button", { name: "Login" }).click();
});


test("settings", async ({ page }) => {
  await page.getByRole('link', { name: '󰢻 Settings' }).click();
  await page.getByRole('link', { name: 'Base Settings', delay: 50 }).click();
  await page.locator('#assets_logo').setInputFiles('/Users/nabilaslam/Pictures/Logos/Erebonia_Crest.jpg');
  await page.getByRole('button', { name: 'Save', delay: 50 }).click();
  await page.getByRole('link', { name: '󰢻 Settings', delay: 50 }).click();
  await page.getByRole('link', { name: 'Countries', delay: 50 }).click();
  await page.getByRole('link', { name: '󰐕 Add Countries', delay: 50 }).click();
  await page.getByRole('link', { name: '󰢻 Settings' }).click();
});
