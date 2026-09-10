[![Playwright Tests](https://github.com/inforf/qa-automation-portfolio/actions/workflows/playwright.yml/badge.svg)](https://github.com/inforf/qa-automation-portfolio/actions/workflows/playwright.yml)

# QA Automation Portfolio — Playwright + API + CI

Projeto independente do QA Playground, criado para demonstrar automação aplicada a fluxos públicos e integração contínua.

O foco está em três frentes:

- testes E2E de interface
- testes de API com serviço público real
- execução automatizada em Pull Requests

---

## O que existe no projeto

### E2E

Os testes utilizam o SauceDemo para validar:

- login
- navegação
- carrinho
- checkout
- confirmação de compra

O fluxo de login utiliza Page Object Model em `pages/login.page.ts`.

### API

O teste em `tests/api.spec.ts` utiliza o `request` do Playwright contra a API pública JSONPlaceholder.

Ele valida:

- status HTTP
- contrato básico da resposta
- tipos esperados
- identificador do recurso

### CI

O workflow `.github/workflows/playwright.yml` é executado em Pull Requests para a branch `main`.

A pipeline:

1. instala dependências com `npm ci`
2. instala os browsers do Playwright
3. executa os testes
4. executa análise pelo SonarCloud

O repositório também contém configuração em `sonar-project.properties`.

> A existência do workflow e da análise SonarCloud é demonstrada no próprio código. Regras de merge e proteção de branch dependem da configuração do repositório no GitHub e não são tratadas aqui como requisito garantido.

---

## Stack

| Ferramenta | Uso |
|---|---|
| Playwright | testes E2E e API |
| TypeScript | linguagem dos testes |
| GitHub Actions | integração contínua |
| SonarCloud | análise estática |
| SauceDemo | aplicação pública para E2E |
| JSONPlaceholder | API pública para contrato |

---

## Estrutura

```text
.github/workflows/
  playwright.yml

pages/
  login.page.ts

tests/
  api.spec.ts
  checkout.spec.ts
  login.spec.ts

playwright.config.ts
sonar-project.properties
```

---

## Executando localmente

```bash
npm install
npx playwright install
npm test
```

Para abrir o relatório HTML:

```bash
npm run report
```

---

## Evidências de execução

O Playwright está configurado para:

- screenshot em falhas
- vídeo retido em falhas
- trace na primeira repetição
- retries configurados

Essas evidências ajudam na investigação de regressões e na reprodução de problemas.

---

## Objetivo

Este projeto demonstra automação como parte do processo de qualidade, e não apenas como scripts isolados.

A ideia é exercitar:

**fluxo real → validação automatizada → evidência → feedback no Pull Request**

---

## Autor

Ronaldo Ferreira  
https://github.com/inforf
