---
name: playwright-pom-from-dom
description: 'Generate or update Playwright page object model classes from captured page DOM and URL. Use when user asks to capture full DOM, build page objects like LoginPage or ItemDetailPage, or run step flows such as login -> inventory -> cart before modeling.'
argument-hint: '[target-url-or-page-name]'
user-invocable: true
---

# Playwright POM From DOM

Create reliable Playwright page object classes from real page structure with stable selectors.

## Use When
- User asks to capture full DOM from a page and generate a page object class.
- User gives a URL and wants a class similar to existing project POMs.
- Workflow needs prerequisite navigation, for example login -> inventory -> cart.
- Existing page object needs refinement after DOM capture.

## Inputs
- Target URL or page name.
- Required pre-steps, for example login credentials and navigation flow.
- Target class path, for example src/pages/CartPage.ts.

## TTACart Quick Reference

### Base URL
- https://app.thetestingacademy.com

### URLs
- Login: /playwright/ttacart/index.html
- Inventory: /playwright/ttacart/inventory.html
- Cart: /playwright/ttacart/cart.html
- Checkout Step One: /playwright/ttacart/checkout-step-one.html

### className Mapping
- Login page -> LoginPage (src/pages/LoginPage.ts)
- Inventory page -> InventoryPage (src/pages/InventoryPage.ts)
- Cart page -> CartPage (src/pages/CartPage.ts)
- Checkout step one -> CheckoutStepOnePage (src/pages/CheckoutStepOnePage.ts)

### Login -> 1 Item -> Cart -> Checkout One Flow
1. Open https://app.thetestingacademy.com/playwright/ttacart/index.html
2. Login with:
   - username: standard_user
   - password: tta_secret
3. Confirm inventory is loaded at /playwright/ttacart/inventory.html
4. Add one item by id, example: tta-practice-backpack
5. Open cart at /playwright/ttacart/cart.html
6. Capture full cart DOM and metadata:
   - logs/dom-captures/cart-page.dom.html
   - logs/dom-captures/cart-page.meta.json
7. Click Checkout and validate redirect to /playwright/ttacart/checkout-step-one.html
8. Create or update CheckoutStepOnePage with selectors from captured DOM.

## Procedure
1. Validate environment URL.
2. Execute prerequisite flow.
3. Open the target page.
4. Capture full DOM and metadata:
   - Save HTML to logs/dom-captures/<page>.dom.html
   - Save selector inventory to logs/dom-captures/<page>.meta.json
5. Extract stable selectors, preferring data-test.
6. Generate or update page object class following local conventions in [TTACart POM conventions](./references/ttacart-pom-conventions.md).
7. Add methods for common user actions and assertions.
8. Validate changed file with diagnostics and run required checks:
   - npm run typecheck
   - npm run lint

## Output Contract
- Updated page object class in src/pages.
- DOM capture artifacts under logs/dom-captures.
- Short summary of:
  - URL modeled
  - locators added
  - methods added
  - validation status

## Method Design Rules
- Prefer data-test selectors.
- Keep locators private readonly fields.
- Keep methods small and action-focused.
- Include one assertLoaded method with URL and key-UI checks.
- Use BasePage helpers for actions and logging where available.

## Template
Use the starter in [POM class template](./assets/pom-class-template.ts.txt).

## Notes
- If target URL requires app state, always include required navigation steps before capture.
- If a selector is dynamic, provide a parameterized locator method instead of hardcoding a single value.
