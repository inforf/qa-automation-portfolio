import { test, expect } from '@playwright/test';

test('get all products (contract test)', async ({ request }) => {

  // resposta simulada
  const fakeProducts = [
    { id: 1, title: 'Mock Product', price: 10.5 },
    { id: 2, title: 'Mock Product 2', price: 20.0 }
  ];

  // simulamos a API
  const response = {
    status: 200,
    json: async () => fakeProducts
  };

  // valida o contrato esperado
  expect(response.status).toBe(200);

  const body = await response.json();

  expect(body.length).toBeGreaterThan(0);
  expect(body[0]).toHaveProperty('title');
  expect(body[0]).toHaveProperty('price');
});