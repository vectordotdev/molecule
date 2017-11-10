import * as R from 'ramda'
import querystring from 'query-string'
import openPopup from 'utils/popup'

const listenForCredentials = (popup, resolve, reject) => {
  let hash
  try {
    hash = popup.location.hash
  } catch (err) {
    if (process.env.NODE_ENV !== 'production') {
      /* eslint-disable no-console */
      console.error(err)
      /* eslint-enable no-console */
    }
  }

  if (hash) {
    popup.close()

    const response = querystring.parse(hash.substr(1))

    if (response.access_token) {
      const expiresIn = response.expires_in
        ? parseInt(response.expires_in)
        : NaN
      const result = {
        token: response.access_token,
        expiresAt: !isNaN(expiresIn)
          ? new Date().getTime() + expiresIn * 1000
          : null,
      }
      resolve(result)
    } else {
      reject(response.error || 'Unknown error.')
    }
  } else if (popup.closed) {
    reject('Authentication was cancelled.')
  } else {
    setTimeout(() => listenForCredentials(popup, resolve, reject), 100)
  }
}

export const authorize = config => {
  const query = querystring.stringify({
    response_type: config.response_type,
    redirect_url: config.redirect,
  })
  const url = config.url + (config.url.indexOf('?') === -1 ? '?' : '&') + query
  const width = config.width || 400
  const height = config.height || 400
  const popup = openPopup(url, 'oauth2', width, height)

  return new Promise((resolve, reject) =>
    listenForCredentials(popup, resolve, reject),
  )
}

export function getNextRoute (action) {
  const nextPath = R.path(['meta', 'from', 'pathname'], action)
  return nextPath && nextPath !== '/auth' ? nextPath : '/'
}

export function storeCredentials (token, expiresIn) {
  localStorage.setItem('token', token)
  localStorage.setItem('expiresIn', expiresIn)
}

export function storeUser (user) {
  localStorage.setItem('user', JSON.stringify(user))
}

export function getUser () {
  const user = localStorage.getItem('user')
  return user !== 'undefined' ? JSON.parse(user) : null
}

export function logout () {
  localStorage.setItem('token', null)
  localStorage.setItem('expiresIn', null)
  localStorage.setItem('user', null)
}

export default authorize
