import { test, expect } from "@playwright/test";

test("video", async ({ page }) => {
  await page.goto("https://www.bandai.com/brands");
  await page.getByRole("link", { name: "home" }).click();

  await page.getByRole("button", { name: "home" }).click();

  await expect(
    page.getByRole("heading", { name: "Bandai Namco Logo" })
  ).toBeVisible();
});
