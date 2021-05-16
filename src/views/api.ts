/**
 * 页面公共api
 */
import HTTP from '../http'

const http = new HTTP('ucc')

export function getUser(url: string, params?: any) {
  return http.$get(url, params)
}

export function postUser(url: string, params?: any) {
  return http.$post(url, params)
}
