# Test Case Rules

## Mandatory Checks For Every New Test Case

Whenever a new test case is added, always run both of the following checks before considering the work complete:

1. Type check:

```bash
npm run typecheck
```

2. Lint check:

```bash
npm run lint
```

If either check fails, fix the issues and run the checks again until both pass.
