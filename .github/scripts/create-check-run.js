#!/usr/bin/env node

const { Octokit } = require('@octokit/rest');

async function createCheckRun() {
  try {
    // Get environment variables
    const token = process.env.GITHUB_TOKEN;
    const repository = process.env.GITHUB_REPOSITORY;
    const sha = process.env.GITHUB_SHA;
    const tokenType = process.env.TOKEN_TYPE || 'Default GITHUB_TOKEN';

    if (!token) {
      console.error('Error: GITHUB_TOKEN environment variable is missing');
      process.exit(1);
    }

    if (!repository) {
      console.error('Error: GITHUB_REPOSITORY environment variable is missing');
      process.exit(1);
    }

    if (!sha) {
      console.error('Error: GITHUB_SHA environment variable is missing');
      process.exit(1);
    }

    const [owner, repo] = repository.split('/');
    const timestamp = new Date().toISOString();

    console.log(`Creating check run with ${tokenType}...`);
    console.log(`Repository: ${repository}`);
    console.log(`SHA: ${sha}`);
    console.log(`Timestamp: ${timestamp}`);

    // Create Octokit instance with the token
    const octokit = new Octokit({ auth: token });

    // Create a check run with a simple annotation
    const response = await octokit.checks.create({
      owner,
      repo,
      name: `Annotation Demo (${tokenType})`,
      head_sha: sha,
      status: 'completed',
      conclusion: 'neutral',
      output: {
        title: `Annotation Demo (${tokenType})`,
        summary: `This check run was created with ${tokenType} at ${timestamp}`,
        annotations: [
          {
            path: 'README.md',
            start_line: 1,
            end_line: 1,
            annotation_level: 'notice',
            message: `This annotation was created with ${tokenType} at ${timestamp}`
          }
        ]
      }
    });

    console.log('Check run created successfully!');
    console.log(`Check run ID: ${response.data.id}`);
    console.log(`Check run URL: ${response.data.html_url}`);
    
    process.exit(0);
  } catch (error) {
    console.error('Error creating check run:');
    console.error(error.message);
    
    if (error.response) {
      console.error('Response status:', error.response.status);
      console.error('Response data:', JSON.stringify(error.response.data, null, 2));
    }
    
    process.exit(1);
  }
}

createCheckRun();
