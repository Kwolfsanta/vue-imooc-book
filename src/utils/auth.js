import Cookies from 'js-cookie'

const TokenKey = 'Authorization'

export function getToken() {
  return Cookies.get(TokenKey)
  // return localStorage.getItem(TokenKey)
}

export function setToken(token) {
  // console.log(token)
  // console.log(Cookies.get(TokenKey))
  return Cookies.set(TokenKey, token)
  // return localStorage.setItem(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
  // return localStorage.removeItem(TokenKey)
}
