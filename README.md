
[![Playwright Tests](https://github.com/inforf/qa-automation-portfolio/actions/workflows/playwright.yml/badge.svg)](https://github.com/inforf/qa-automation-portfolio/actions/workflows/playwright.yml)

# QA Automation Portfolio

Projeto de automação de testes E2E e API utilizando Playwright com execução contínua em CI.

---

## O que este projeto demonstra

* Automação de fluxo crítico de aplicação web
* Testes de API REST
* Organização com Page Object Model
* Execução automática em pipeline CI
* Investigação de falhas fora do ambiente local

---

## Fluxo automatizado

Cenário completo de e-commerce:

1. Login
2. Adição de produto ao carrinho
3. Checkout
4. Confirmação do pedido

---

## Testes de API

Validações realizadas:

* Status code HTTP
* Estrutura JSON
* Campos obrigatórios da resposta
* Tratamento de bloqueio em ambiente CI (headers HTTP)

---

## Arquitetura do projeto

pages/ → Page Objects (interação com a interface)
tests/ → cenários de teste
playwright.config.ts → configuração de execução

---

## Integração Contínua

A cada push no repositório:

* Instala dependências
* Provisiona navegadores
* Executa testes UI e API
* Gera relatório

Pipeline executado automaticamente pelo GitHub Actions.

---

## Tecnologias

* Playwright
* TypeScript
* Node.js
* GitHub Actions

---

## Executar localmente

```
npm install
npx playwright test
```

---

## Objetivo

Demonstrar capacidade prática em:

* Automação E2E
* Testes de API
* Organização de testes
* Análise de falhas em CI
* Integração contínua

