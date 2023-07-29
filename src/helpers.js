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
