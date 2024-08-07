import { test, expect } from "@playwright/test";

test("maybe", async ({ page }) => {
  // This will navigate to http://127.0.0.1:3000/login
  await page.goto("http://localhost:3000/home");

  await expect(page.locator("heading", { name: "Home Title" })).toBeVisible();
});
