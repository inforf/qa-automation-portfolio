[![Playwright Tests](https://github.com/inforf/qa-automation-portfolio/actions/workflows/playwright.yml/badge.svg)](https://github.com/inforf/qa-automation-portfolio/actions/workflows/playwright.yml)

QA Automation Portfolio

Projeto demonstrando implementação de automação de testes utilizando Playwright com execução contínua em pipeline CI.

Cobertura de Testes
End-to-End (UI)

Automação de fluxo crítico de e-commerce:

Login de usuário

Adição de produto ao carrinho

Processo de checkout

Validação de confirmação de pedido

Os testes utilizam Page Object Model para organização e reutilização de código.

Testes de API

Validação de endpoints REST:

Verificação de status code HTTP

Validação de estrutura JSON

Verificação de propriedades obrigatórias da resposta

Tratamento de bloqueio por infraestrutura (headers HTTP para CI)

Arquitetura

O projeto segue estrutura baseada em Page Object Model:

pages/ → abstração da interface

tests/ → cenários de teste

playwright.config.ts → configuração de execução

Integração Contínua

Os testes são executados automaticamente a cada commit utilizando GitHub Actions.

O pipeline:

Instala dependências

Provisiona navegadores

Executa testes UI e API

Gera relatório automático

Tecnologias Utilizadas

Playwright

TypeScript

Node.js

GitHub Actions

Execução Local
npm install
npx playwright test
Objetivo

Demonstrar experiência prática em:

Automação E2E

Testes de API

Organização de testes

Investigação de falhas em CI

Integração contínua
