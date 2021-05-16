/**
 * 全局状态管理
 */
import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      count: 0
    }
  },
  mutations: {
    increment (state: any) {
      state.count++
    }
  },
  actions: {

  },
  getters: {

  },
  modules: {

  }
})

export default store