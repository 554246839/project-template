/**
 * 项目请求封装文件
 */
import Axios, { AxiosResponse, AxiosRequestConfig, AxiosInstance } from 'axios'
import config from '../constant/config'
import router from '../router'

import { ElMessage } from 'element-plus'

const instance: AxiosInstance = Axios.create({
  baseURL: config.baseUrl,
  timeout: config.timeout
})

// 添加请求拦截器
instance.interceptors.request.use((config: AxiosRequestConfig) => {
  return config
}, (error: any) => {
  console.log(error, 'request')
  return Promise.reject(error);
})

// 添加响应拦截器
instance.interceptors.response.use((response: AxiosResponse<any>) => {
  console.log(response, 'response1')
  return response
}, (error: any) => {
  console.log(error.response.status, 'response2')
  switch(error.response.status) {
    case 401:
    case 403:
    case 404:
    case 405:
    case 500:
      router.push(`/${error.response.status}`)
      break
    default:
      ElMessage.error(`请求错误 - ${error.response.status}`)
  }
  return Promise.reject(error)
})

class HTTP {
  constructor(prefix: string = '') {
    if (prefix) {
      instance.defaults.baseURL = prefix
    }
  }
  public $get(url: string, params?: any) {
    let headers = params.headers
    delete params.headers

    return instance.get(url, { params, headers })
  }
  public $post(url: string, params?: any) {
    let headers = params.headers
    delete params.headers

    return instance.post(url, params, { headers })
  }
}

export { instance, Axios }

export default HTTP
