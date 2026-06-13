# TTACart POM Conventions

Use these conventions when creating or updating page objects in this repository.

## File Location
- Place classes in src/pages.
- Use PascalCase class names, for example CartPage.

## Inheritance
- Extend BasePage.
- Constructor signature: constructor(page: Page).
- Call super(page, 'ClassName').

## Locator Strategy
1. data-test selectors first.
2. Then semantic attributes.
3. Avoid brittle CSS class selectors unless no alternative exists.

## Field Pattern
- private readonly <name>: Locator;
- Initialize all locators in constructor.

## Method Pattern
- open(): navigates to static PATH and asserts loaded.
- assertLoaded(): title + URL + key container visibility.
- Action methods: add, remove, checkout, continueShopping.
- Read methods: names list, price list, quantities.

## URL Pattern
- static readonly PATH = '/playwright/ttacart/<page>.html';
- Allow both extension and extensionless URL in assertions if app redirects.

## Validation
Always run after edits:
1. npm run typecheck
2. npm run lint
