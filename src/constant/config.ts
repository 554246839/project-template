/**
 * 全局常量
 */
import merge from 'merge'
import { Config } from '../types'

import baseConfig from './base'

const env = process.env.NODE_ENV || 'development'

const config: Config = {
  development: {
    baseUrl: 'http://development-url.com'
  },
  production: {
    baseUrl: 'http://production-url.com'
  }
}

export default merge(baseConfig, config[env])
