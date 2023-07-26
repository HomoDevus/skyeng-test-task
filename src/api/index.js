import { Octokit } from 'octokit'

export class GitHubAPI {
  constructor() {
    this.octokit = new Octokit({
      auth: process.env.GITHUB_API_TOKEN,
    })
  }
}
