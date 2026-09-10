import { test, expect } from '@playwright/test';

test('GET /posts/1 - validates public API contract', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body).toMatchObject({
    userId: expect.any(Number),
    id: 1,
    title: expect.any(String),
    body: expect.any(String),
  });
});
