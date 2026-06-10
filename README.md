# Advanced Playwright Framework

This repository contains an advanced Playwright + TypeScript automation framework with source-first structure, custom reporting, environment-based configuration, quality checks, and Docker support.

## Phase Documentation

- Phase 1 summary: [docs/phase1/README.md](docs/phase1/README.md)

## Key Features

- Playwright cross-browser testing (Chromium, Firefox, WebKit, mobile profile)
- Environment-driven base URL configuration via dotenv
- Custom reporter integration
- Allure reporting support
- Winston logger integration
- Quality gates with lint and typecheck
- Dockerized test execution

## Project Structure

```text
AdvancedPlaywrightFramework1x/
|-- .github/
|   |-- workflows/
|   |   `-- playwright.yml
|   |-- copilot-instructions.md
|   `-- rules.md
|-- docs/
|   `-- phase1/
|       `-- README.md
|-- rules/
|   `-- testing-rules.md
|-- src/
|   |-- api/
|   |-- config/
|   |-- fixtures/
|   |-- pages/
|   |-- testdata/
|   |-- tests/
|   |   `-- example.spec.ts
|   `-- utils/
|       |-- CustomReporter.ts
|       `-- logger.ts
|-- .env
|-- .gitignore
|-- Dockerfile
|-- package.json
|-- package-lock.json
|-- playwright.config.ts
`-- tsconfig.json
```

## Important Commands

### Test Execution

- npm run test
- npm run test:ui
- npm run test:chromium
- npm run test:firefox
- npm run test:debug
- npm run test:e2e
- npm run test:p0

### Reporting

- npm run test:report
- npm run test:report:ci
- npm run allure:generate
- npm run allure:report

### Quality and Build

- npm run lint
- npm run typecheck
- npm run format
- npm run build
- npm run clean

## Team Rule for New Test Cases

For every newly added test case, run both:

1. npm run typecheck
2. npm run lint

Do not consider the task complete until both pass.

