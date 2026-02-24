[![Playwright Tests](https://github.com/inforf/qa-automation-portfolio/actions/workflows/playwright.yml/badge.svg)](https://github.com/inforf/qa-automation-portfolio/actions/workflows/playwright.yml)

# Portfólio de QA Automation — Playwright + CI/CD + Quality Gate

Este repositório demonstra um fluxo completo de trabalho de QA em um ambiente próximo do real, e não apenas scripts de automação.

O projeto simula como um QA Engineer atua dentro de um time de desenvolvimento profissional, incluindo:

- Testes automatizados de API e UI
- Validação de Pull Requests
- Integração Contínua (CI)
- Análise de qualidade de código
- Quality Gate obrigatório
- Proteção da branch principal

O objetivo deste projeto é demonstrar experiência prática com processos modernos de qualidade de software utilizados em empresas.

---

## Stack utilizada

| Ferramenta | Finalidade |
|-----------|------|
| Playwright | Automação de testes UI e API |
| TypeScript | Linguagem dos testes |
| GitHub Actions | Pipeline de Integração Contínua |
| SonarCloud | Análise de qualidade e segurança do código |
| Branch Protection | Controle de merge e validação obrigatória |

---

## O que este projeto demonstra

Este repositório foi construído para representar o dia a dia real de um QA dentro de um time ágil.

### Testes automatizados
- Testes de API utilizando `request` do Playwright
- Testes End-to-End de interface
- Validações e asserts
- Execução paralela

### Integração Contínua
Cada Pull Request dispara automaticamente uma pipeline que:

1. Instala dependências
2. Instala os browsers do Playwright
3. Executa todos os testes automatizados
4. Publica os resultados

### Qualidade de código e Quality Gate
O SonarCloud analisa o repositório a cada Pull Request:

- Code Smells
- Problemas de segurança
- Manutenibilidade
- Validação do Quality Gate

Um Pull Request **não pode ser aprovado** caso o Quality Gate falhe.

### Proteção da branch principal
A branch `main` é protegida e exige:

- Pull Request obrigatório
- Testes automatizados aprovados
- Quality Gate aprovado

Commits diretos na `main` são bloqueados.

Isso simula um ambiente real de produção.

---

## Pipeline de CI

Todo Pull Request executa automaticamente:

```
Pull Request → CI → Testes Playwright → SonarCloud → Quality Gate → Merge permitido
```

Se qualquer etapa falhar, o merge é bloqueado.

---

## Executando o projeto localmente

### 1. Instalar dependências
```bash
npm install
```

### 2. Instalar browsers do Playwright
```bash
npx playwright install
```

### 3. Executar os testes
```bash
npx playwright test
```

### 4. Abrir relatório HTML
```bash
npx playwright show-report
```

---

## Cobertura dos testes

O projeto contém:

- Testes de API
- Validação de resposta HTTP
- Verificação de estrutura JSON
- Fluxo de usuário completo (E2E)

Exemplos de validações:
- Status HTTP
- Estrutura de resposta
- Interação com elementos da interface
- Navegação entre páginas

---

## Fluxo de trabalho adotado

O repositório segue um fluxo profissional de desenvolvimento:

1. Criar uma branch de funcionalidade
2. Abrir Pull Request
3. A pipeline de CI executa
4. Testes e Quality Gate precisam passar
5. O merge na main é liberado

Nenhum código é integrado sem validação automatizada.

---

## Por que isso é importante

Hoje empresas esperam que um QA:

- Entenda CI/CD
- Valide Pull Requests
- Trabalhe junto com desenvolvedores
- Garanta qualidade do código
- Evite regressões automaticamente

Este projeto demonstra essas capacidades na prática.

---

## Autor

Ronaldo Ferreira  
Projeto de portfólio — QA Automation

---

## Observação

Este repositório foi estruturado propositalmente como um ambiente próximo de produção para demonstrar responsabilidades reais de QA, e não apenas escrita de testes automatizados.
