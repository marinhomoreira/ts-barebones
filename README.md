# boa-project-planning-automation

This project automates the process of multihoming tasks from a program's project into a Sprint project, taking into consideration the Current/Next sprint sections of the project and a Custom Field used to define when a task is expected to be completed.


# Setup

This is a node project. So, in the project's root directory run:

```bash
npm i -g typescript
npm i
```

You'll need to generate a PAT from ASANA and add it to your env before executing the automation script for the first time.
```bash
export ASANA_PERSONAL_ACCESS_TOKEN="ADD_YOUR_PAT_VALUE_HERE"
```

Running the automation
```bash
npm run dry-run # runs a mock execution without executing any real multihoming operation
npm run automate # runs the script and multihomes tasks that should be updated
```

Options available:
`--verbose` e.g. `npm run dry-run -- --verbose`


# Tech notes
- The starting point for the script is `main.ts`.
- Hardcoded props are defined in `boa_config.ts`.


## Workflow
`main` -> `portfolio_processor` -> `project_processor` -> `task_processor`

```
main.setup:
Compute the current and next sprint values

Get all projects from the portfolio
For each project:
    Get all tasks
    For each task:
        Get its CustomField value
        Validate if it belongs to the Current Sprint or Next Sprint sections
        Compare expected values with which section (if any) the task should be in the Sprint Project
        Add/move the task to the appropriate section or remove it from the project, if necessary
```