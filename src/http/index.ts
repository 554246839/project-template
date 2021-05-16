/**
 * 项目请求封装文件
 */
import Axios, { AxiosResponse, AxiosRequestConfig, AxiosInstance } from 'axios'
import config from '../constant/config'

const instance: AxiosInstance = Axios.create({
  baseURL: config.baseUrl,
  timeout: config.timeout
})

// 添加请求拦截器
instance.interceptors.request.use((config: AxiosRequestConfig) => {
  return config
}, function (error: any) {
  return Promise.reject(error);
})

// 添加响应拦截器
instance.interceptors.response.use((response: AxiosResponse<any>) => {
  return response
}, function (error: any) {
  return Promise.reject(error);
})

class HTTP {
  prefix: string
  constructor(prefix: string = '') {
    this.prefix = prefix
  }
  public $get(url: string, params?: any) {
    let headers = params.headers
    delete params.headers
    
    return instance.get(this.prefix + url, { params, headers })
  }
  public $post(url: string, params?: any) {
    return instance.post(this.prefix + url, params)
  }
}

export { instance, Axios }

export default HTTP
