import { test, expect } from '@playwright/test';

test('get all products', async ({ request }) => {
  const response = await request.get('https://fakestoreapi.com/products');

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.length).toBeGreaterThan(0);
  expect(body[0]).toHaveProperty('title');
  expect(body[0]).toHaveProperty('price');
});
