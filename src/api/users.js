import { GitHubAPI } from '.'
import { GITHUB_HEADERS, PER_PAGE } from '../constants'
import { checkAPIError, getQueryParam, handleAPIError } from '../helpers'

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

      const res = await this.octokit.request(
        `GET /search/users${queryParams}`,
        {
          headers: GITHUB_HEADERS,
        },
      )

      checkAPIError(res)

      return res
    } catch (error) {
      handleAPIError(error)
    }
  }

  async userInfo(userName) {
    try {
      const res = await this.octokit.request('GET /users/{username}', {
        username: userName,
        headers: GITHUB_HEADERS,
      })

      checkAPIError(res)

      return res
    } catch (error) {
      handleAPIError(error)
    }
  }
}

const usersAPI = new UsersAPI()

export default usersAPI
