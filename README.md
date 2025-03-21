# GitHub Actions Token Permissions Demo

This repository demonstrates two specific GitHub Actions scenarios that highlight the permission differences between the default `GITHUB_TOKEN` and a Personal Access Token (PAT):

1. **Check Run Annotations Demo**: Shows how creating check run annotations via the GitHub API works with the default token but fails with a PAT
2. **PR Creation Demo**: Shows how creating a Pull Request from a workflow requires a PAT

## Check Run Annotations Demo

The annotations workflows demonstrate the surprising difference between using the default `GITHUB_TOKEN` and a PAT when creating check run annotations via the GitHub API:

1. `annotations-default-token.yml`:
   - Uses the default `GITHUB_TOKEN`
   - Successfully creates check run annotations via the GitHub API
   - Works because the default token has specific permissions for this operation

2. `annotations-pat.yml`:
   - Uses a Personal Access Token (PAT)
   - Attempts to create check run annotations via the GitHub API
   - Will fail even with all possible permissions set on the PAT

This demonstrates an interesting limitation: while the default `GITHUB_TOKEN` can create check run annotations via the GitHub API, a PAT cannot create check run annotations despite having broader permissions in other areas.

## PR Creation Demo

The PR creation workflow (`pr-creation-workflow.yml`) demonstrates how to create a Pull Request from within a GitHub Action.

Key points:
- Requires a Personal Access Token (PAT) with appropriate permissions
- Cannot use the default `GITHUB_TOKEN` due to permission limitations
- Creates a new branch, makes changes, and opens a PR

## Why Two Different Tokens?

1. **Default GITHUB_TOKEN**:
   - Automatically provided by GitHub Actions
   - Has specific permissions for certain GitHub API operations
   - Can create check run annotations via the API
   - Cannot create PRs that trigger new workflow runs

2. **Personal Access Token (PAT)**:
   - Must be created manually and stored as a repository secret
   - Has broader permissions in many areas
   - Cannot create check run annotations via the API (surprising limitation)
   - Required for operations like creating PRs that trigger new workflow runs
