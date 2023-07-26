import { GitHubAPI } from '.'

class UserSearchAPI extends GitHubAPI {
  async search(userName) {
    return await this.octokit.request(
      'GET /search/users?q=' + encodeURIComponent(`${userName} type:user`),
      {
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
          Accept: 'application/vnd.github+json',
        },
      },
    )
  }
}

const userSearchAPI = new UserSearchAPI()

export default userSearchAPI
