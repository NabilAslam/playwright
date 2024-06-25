// @ts-check
import { test, expect } from '@playwright/test';

  
  // test('my test with geolocation', async ({ page }) => {
  //   await page.goto('https://google.com/maps');
  //   // overwrite the location for this test
  //   await page.getByRole('link', { name: "/@41.3741062,12.7656705" }).click();
  //   // await page.getByRole('button', { name: "Alle akzeptieren" }).click();
  //   await expect(page.getByRole('heading', { name: '' })).toBeVisible();
  // });

  // test("the user's location is shown", async ({ page, context }) => {
  //   const coords = { latitude: 50.9245541, longitude: 5.2435062 };
  //   context.setGeolocation(coords);
   
  //   await page.goto('http://localhost:3000');
   
  //   await expect(page.locator('p')).toHaveText(
  //     `Your current position is: ${coords.latitude}, ${coords.longitude}`,
  //   );
  // });

 test('example', async ({ page }) => {
  await page.addLocatorHandler(
    page.getByRole('heading', { name: 'Bevor Sie zu Google weitergehen' }),
    async () => {
      await page.getByRole('button', { name: 'Alle Akzeptieren' }).click();
    });
// Write the test as usual.
await page.goto('http://www.google.com/maps');

await expect(page.getByRole('link', { name: 'http://www.google.com/maps/@32.343434, 12.343343'})).toBeVisible();
// await page.getByRole('link', { name: 'Collection of blue and white' }).click();
// await expect(page.getByRole('heading', { name: 'Light and easy' })).toBeVisible();
  });