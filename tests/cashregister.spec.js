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

test("pos", async ({ page }) => {
  await page.getByRole("link", { name: "󰍒 Point of Sale" }).click();
  const posPromise = page.waitForEvent("popup");
  await page.getByRole("link", { name: "Open POS" }).click();
  const pos = await posPromise;
  await page.close();
  await pos.getByRole("img").click();
  await pos.getByRole("button", { name: "1" }).click();
  await pos.getByRole("button", { name: "2" }).click();
  await pos.getByRole("button", { name: "3" }).click();
  await pos.getByRole("button", { name: "4" }).click();
  await pos.getByRole("button", { name: "login" }).click();

  await pos.getByRole('button', { name: 'point_of_sale' }).click();
  await pos.getByRole('button', { name: 'Kassenabschluss' }).click();
  await pos.getByRole('textbox').click();
  await pos.getByRole('textbox').pressSequentially('250,00€');
  await pos.getByRole('button', { name: 'Abschluss durchführen' }).click();
  const printPromise = pos.waitForEvent('popup');
  await pos.getByRole('button', { name: 'Z-Bericht drucken' }).click();
  const print = await printPromise;
  await print.close();
})

test("cash", async ({ page }) => {
  await page.getByRole("link", { name: "󰍒 Point of Sale" }).click();
  await page.getByRole('link', { name: 'Cash journal' }).click();
  await page.getByRole('cell', { name: 'Kasse' }).first().click();
  await page.getByRole('row', { name: 'Kasse 1' }).first().getByRole('button').click();
  const voucherPromise = page.waitForEvent('popup');
  await page.getByRole('link', { name: '󰐪 Voucher' }).first().click();
  const voucher = await voucherPromise;
  await voucher.getByRole('img').isVisible();
  await voucher.mouse.wheel(0, 800, { delay: 50});
})


// test("cash", async ({ page }) => {
//   const page1 = page;
  
//   await page1.getByRole("link", { name: "󰍒 Point of Sale" }).click();
  // await page1.goto("https://www.versacommerce.de/");
  // await page1.getByRole("link", { name: "Login" }).click();
  // await page1
  //   .locator("input[name='login']")
  //   .pressSequentially("aslam+playwright@versacommerce.de", { delay: 90 });
  // await page1
  //   .locator("input[name='password']")
  //   .pressSequentially("55555", { delay: 90 });
  // await page1.getByRole("button", { name: "Login" }).click();
  // await page1.getByRole('link', { name: 'Cash journal' }).click();
  // await page1.getByRole('cell', { name: 'Kasse' }).first().click();
  // await page1.getByRole('row', { name: 'Kasse 1' }).first().getByRole('button').click();
  // const voucherPromise = page1.waitForEvent('popup');
  // await page1.getByRole('link', { name: '󰐪 Voucher' }).first().click();
  // const voucher = await voucherPromise;
  // await voucher.getByRole('img').isVisible();
  // await voucher.mouse.wheel(0, 800, { delay: 50});
  // });