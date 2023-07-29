import { GitHubAPI } from '.'
import { PER_PAGE } from '../constants'
import { getQueryParam } from '../helpers'

class UserSearchAPI extends GitHubAPI {
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
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
          Accept: 'application/vnd.github+json',
        },
      })
    } catch (e) {
      console.error(e)
    }
  }
}

const userSearchAPI = new UserSearchAPI()

export default userSearchAPI
