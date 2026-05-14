# Brightsite CI/CD Pipeline Guide

This repository is configured with a GitHub Actions workflow that automates the build verification of the Brightsite website, while Netlify handles the actual deployment.

## How it works

1.  **Trigger**: Every push to the `main` branch triggers the GitHub Actions `Build` workflow.
2.  **GitHub Actions**: 
    - **Checkout code**: Pulls the latest code from the repository.
    - **Set up Node.js**: Installs Node.js version 20.
    - **Install dependencies**: Runs `npm install`.
    - **Build**: Runs `npm run build` to ensure the project compiles without errors.
3.  **Netlify Deployment**: Netlify is connected directly to the GitHub repository. On every successful push to `main`, Netlify automatically triggers a deployment to `brightsiteagency.com`.

## Configuration

### Netlify Settings
- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- **Redirects**: Managed by `netlify.toml` in the repository root to support SPA routing.

## How to replicate for other sites

1.  Initialize a GitHub repository for the client site.
2.  Add the `.github/workflows/deploy.yml` file from this repository for build verification.
3.  Connect the GitHub repository to Netlify via the Netlify dashboard.
4.  Configure the build settings as described above.
5.  Set up the custom domain and SSL in Netlify.
