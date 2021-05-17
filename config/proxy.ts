/**
 * 跨域代理配置文件
 */

export default {
  '/ucc': {
    target: 'http://studio.ibizlab.cn',
    changeOrigin: true,
    rewrite: (path) => path.replace(/^\/ucc/, '')
  }
}