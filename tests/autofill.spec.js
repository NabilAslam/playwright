import { test, expect } from "@playwright/test";

test("autofill", async ({ page }) => {
  await page.goto("http://localhost:3000/contact");

  await page.getByLabel("first name").pressSequentially("Rean", { delay: 90 });
  await page
    .getByLabel("last name")
    .pressSequentially("Schwarzer", { delay: 90 });
  await page
    .getByLabel("email")
    .pressSequentially("form@form.de", { delay: 90 });
  await page
    .getByLabel("phone number")
    .pressSequentially("013234930332", { delay: 90 });
  await page
    .getByLabel("message")
    .pressSequentially("I would like to talk to you personally.", {
      delay: 90,
    });

  await expect(page).toHaveURL("http://localhost:3000/contact");
});
