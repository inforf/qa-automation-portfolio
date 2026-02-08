import { test, expect } from '@playwright/test';

test('get all products', async ({ request }) => {
  const response = await request.get('https://fakestoreapi.com/products', {
    headers: {
      'Accept': 'application/json',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120 Safari/537.36'
    }
  });

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.length).toBeGreaterThan(0);
  expect(body[0]).toHaveProperty('title');
  expect(body[0]).toHaveProperty('price');
});
