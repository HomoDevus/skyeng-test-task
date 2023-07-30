import { notify } from './components/common/notify/notify'

export function arrayOfN(n, max = Infinity) {
  const result = []

  for (let i = 1; i <= n && i <= max; i++) {
    result.push(i)
  }

  return result
}

export function getQueryParam(key, value, isFirst = false) {
  if (!value) {
    return ''
  }

  return `${isFirst ? '?' : '&'}${key}=${encodeURIComponent(value)}`
}

export function checkAPIError(response) {
  if (Math.floor(response.status / 100) !== 2) {
    throw Error(response)
  }
}

export function handleAPIError(error) {
  notify(error.message || error.data?.message || 'Unknown error', 'error')
}
