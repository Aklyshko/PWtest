// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://br-analytics.ru/');
  await page.locator('.header__nav-signup').click();
  await page.locator('#username').fill('autotest')
  await page.locator('#ba_password').fill('Autotest100500!')
});
