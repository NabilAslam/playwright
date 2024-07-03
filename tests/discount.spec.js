import { test } from "@playwright/test";


test("login", async ({ page }) => {
  await page.goto("https://www.versacommerce.de/");
  await page.getByRole("link", { name: "Login" }).click();
  await page
    .locator("input[name='login']")
    .pressSequentially("aslam+playwright@versacommerce.de", { delay: 90 });
  await page
    .locator("input[name='password']")
    .pressSequentially("55555", { delay: 90 });
  await page.getByRole("button", { name: "Login" }).click();

  const shopPromise = page.waitForEvent('popup');
  await page.getByTitle('Shop').click();
  const shop = await shopPromise;
  await shop.getByRole('link', { name: 'The Legend of Zelda Artbook' }).click();
  await shop.locator('.product__prices__oldprice').isEnabled();
});
