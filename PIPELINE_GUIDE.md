# Brightsite CI/CD Pipeline Guide

This repository is configured with a GitHub Actions workflow that automates the build and deployment of the Brightsite website.

## How it works

1.  **Trigger**: Every push to the `main` branch triggers the `Build and Deploy` workflow.
2.  **Environment**: The workflow runs on the latest Ubuntu runner.
3.  **Steps**:
    - **Checkout code**: Pulls the latest code from the repository.
    - **Set up Node.js**: Installs Node.js version 18.
    - **Install dependencies**: Runs `npm install`.
    - **Build**: Runs `npm run build` to generate the production build in the `dist` directory.
    - **Deploy to Surge**: Uses the `surge` CLI to deploy the contents of the `dist` directory to `brightsite-main.surge.sh`.

## Credentials

The deployment relies on a Surge token stored as a GitHub Action secret:
- **Secret Name**: `SURGE_TOKEN`
- **Value**: Managed by the lead/DomainHosting agent.

## How to replicate for other sites

1.  Initialize a GitHub repository for the client site.
2.  Add the `.github/workflows/deploy.yml` file from this repository, updating the Surge domain as needed.
3.  Get a Surge token using `npx surge token` (while logged in as the deployment account).
4.  Add the Surge token to the GitHub repository secrets as `SURGE_TOKEN`.
5.  Push to the `main` branch to trigger the first deployment.

