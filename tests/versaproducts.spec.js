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


  test("products", async ({ page }) => {
  await page.getByRole("link", { name: "󰓼 Products" }).click();
  await page.getByRole("link", { name: "All products" }).click();
  await page.getByRole("link", { name: "Add product" }).click();


  await page.getByPlaceholder('e.g. Raincoat').pressSequentially('The Legend of Zelda Artbook', {delay: 50});
  await page.getByRole('paragraph').first().click();
  await page.locator('.rx-content').pressSequentially('The Legend of Zelda Artbook', {delay: 50});
  await page.getByLabel('AI Tools').click();
  await page.getByLabel('Create Product Description').click();
  await page.locator('#product_price_with_currency').click();
  await page.locator('#product_price_with_currency').fill('25,00€');
  await page.locator("#image-drop-zone").setInputFiles("/Users/nabilaslam/Pictures/Artbooks/91aR+itJlEL._SL1500_.jpg");
  await page.getByLabel('GTIN').click();
  await page.getByLabel('GTIN').fill('2302189203348129');
  await page.getByLabel('Stock (units)').click();
  await page.getByLabel('Stock (units)').fill('50');
  await page.getByLabel('Minimum stock warning').click();
  await page.getByLabel('Minimum stock warning').fill('5');
  await page.locator('label').filter({ hasText: 'Considers stock' }).locator('i').click();
  await page.locator('button[name="button"]').click();
  await page.getByRole('link', { name: 'All products' }).click();
});