# Copilot Instructions

## Mandatory Rule For New Test Cases

Whenever a new test case is added, always run both checks before considering the task complete:

1. `npm run typecheck`
2. `npm run lint`

If any check fails, fix all issues and re-run both commands until they pass.
