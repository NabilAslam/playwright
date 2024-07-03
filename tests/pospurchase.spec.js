import { test } from "@playwright/test";


test("versapos", async ({ page }) => {
  await page.goto("https://www.versacommerce.de/");
  await page.getByRole("link", { name: "Login" }).click();
  await page
    .locator("input[name='login']")
    .pressSequentially("aslam+playwright@versacommerce.de", { delay: 90 });
  await page
    .locator("input[name='password']")
    .pressSequentially("55555", { delay: 90 });
  await page.getByRole("button", { name: "Login" }).click();

  await page.getByRole("link", { name: "󰍒 Point of Sale" }).click();
  const posPromise = page.waitForEvent("popup");
  await page.getByRole("link", { name: "Open POS" }).click();
  const pos = await posPromise;
  await pos.getByRole("img").click();
  await pos.getByRole("button", { name: "1" }).click();
  await pos.getByRole("button", { name: "2" }).click();
  await pos.getByRole("button", { name: "3" }).click();
  await pos.getByRole("button", { name: "4" }).click();
  await pos.getByRole("button", { name: "login" }).click();

  await pos.getByRole('button', { name: 'Alle Produkte' }).click();
  await pos.locator('app-product div').filter({ hasText: 'The Legend of Zelda Artbook' }).nth(2).click();
  await pos.getByRole('button', { name: 'Summe 25,00 €' }).click();
  await pos.getByRole('button', { name: '2', exact: true }).click();
  await pos.locator('app-numpad').getByRole('button', { name: '5' }).click();
  await pos.getByRole('button', { name: '0', exact: true }).dblclick();
  await pos.getByRole('button', { name: 'Verkauf abschließen' }).click();
  await pos.getByRole('button', { name: 'Neuen Verkauf beginnen' }).click();
});