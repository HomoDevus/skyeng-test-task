import { GitHubAPI } from '.'
import { GITHUB_HEADERS, PER_PAGE } from '../constants'
import { getQueryParam } from '../helpers'

class UsersAPI extends GitHubAPI {
  async search(userName, sort, order, pageNum) {
    try {
      const queryParams = [
        getQueryParam('q', `${userName} type:user`, true),
        getQueryParam('sort', sort),
        getQueryParam('order', order),
        getQueryParam('page', pageNum),
        getQueryParam('per_page', PER_PAGE),
      ].join('')

      return await this.octokit.request(`GET /search/users${queryParams}`, {
        headers: GITHUB_HEADERS,
      })
    } catch (e) {
      console.error(e)
    }
  }

  async userInfo(userName) {
    try {
      return await this.octokit.request('GET /users/{username}', {
        username: userName,
        headers: GITHUB_HEADERS,
      })
    } catch (e) {
      console.error(e)
    }
  }
}

const usersAPI = new UsersAPI()

export default usersAPI
