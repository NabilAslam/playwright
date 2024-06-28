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
});
