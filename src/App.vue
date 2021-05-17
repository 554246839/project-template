<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'

import config from './constant/config'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  },
  setup() {
    let router = useRouter()
    let route = useRoute()
    let store = useStore()
    console.log(getCurrentInstance())
    console.log(router.getRoutes())
    console.log(route)
    console.log(store.state)
    console.log(config)
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
