import { GitHubAPI } from '.'

class UserSearchAPI extends GitHubAPI {
  async search(userName, sort, order) {
    try {
      return await this.octokit.request(
        `GET /search/users?q=${encodeURIComponent(`${userName} type:user`)}${
          sort ? '&sort=' + encodeURIComponent(sort) : ''
        }${order ? '$order=' + encodeURIComponent(order) : ''}`,
        {
          headers: {
            'X-GitHub-Api-Version': '2022-11-28',
            Accept: 'application/vnd.github+json',
          },
        },
      )
    } catch (e) {
      console.error(e)
    }
  }
}

const userSearchAPI = new UserSearchAPI()

export default userSearchAPI
