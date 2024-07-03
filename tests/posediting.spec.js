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

  await pos.locator('app-product div').filter({ hasText: 'The Legend of Zelda Artbook' }).nth(2).click();
  await pos.locator('app-cart-item').getByRole('button', { name: 'edit' }).click();
  await pos.locator('div').filter({ hasText: /^remove_circle_outlineadd_circle_outline$/ }).getByRole('spinbutton').click();
  await pos.locator('div').filter({ hasText: /^remove_circle_outlineadd_circle_outline$/ }).getByRole('spinbutton').fill('2');
  await pos.locator('div').filter({ hasText: /^Rabatt hinzufügen€%$/ }).getByRole('spinbutton').click();
  await pos.locator('div').filter({ hasText: /^Rabatt hinzufügen€%$/ }).getByRole('spinbutton').fill('5');
  await pos.getByRole('button', { name: 'Änderungen speichern' }).click();
  await pos.getByRole('button', { name: 'delete_forever' }).click();
  await pos.getByRole('button', { name: 'Warenkorb leeren' }).click();
  await pos.locator('app-product div').filter({ hasText: 'The Legend of Zelda Artbook' }).nth(2).click();
  await pos.locator('app-cart-item').getByRole('button', { name: 'edit' }).click();
  await pos.getByText('%', { exact: true }).click();
  await pos.locator('div').filter({ hasText: /^Rabatt hinzufügen€%$/ }).getByRole('spinbutton').click();
  await pos.locator('div').filter({ hasText: /^Rabatt hinzufügen€%$/ }).getByRole('spinbutton').fill('20');
  await pos.getByRole('button', { name: 'Änderungen speichern' }).click();
  await pos.locator('div').filter({ hasText: /^Notizedit$/ }).getByRole('button').click();
  await pos.getByRole('textbox').click();
  await pos.getByRole('textbox').press('CapsLock');
  await pos.getByRole('textbox').fill('Here is a sample text');
  await pos.getByRole('button', { name: 'Änderungen speichern' }).click();
  await pos.getByRole('button', { name: 'info' }).click();
  await pos.getByLabel('Close').click();
  await pos.getByRole('button', { name: 'delete_forever' }).click();
  await pos.getByRole('button', { name: 'Abbrechen' }).click();
  await pos.getByRole('button', { name: 'Summe 20,00 €' }).click();
  await pos.getByText('Kartenzahlung').click();
  await pos.getByRole('button', { name: 'Verkauf abschließen' }).click();
  await pos.getByRole('button', { name: 'Neuen Verkauf beginnen' }).click();
});