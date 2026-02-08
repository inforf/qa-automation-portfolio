import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

test('complete purchase flow', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  // add product
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('.shopping_cart_link').click();

  // checkout
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="firstName"]').fill('QA');
  await page.locator('[data-test="lastName"]').fill('Tester');
  await page.locator('[data-test="postalCode"]').fill('12345');
  await page.locator('[data-test="continue"]').click();

  await page.locator('[data-test="finish"]').click();

  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
});
