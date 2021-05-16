<template>
  <div>home</div>
  <el-button @click="getUsers">请求</el-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { getUser, postUser } from './api'

export default defineComponent({
  setup() {
    console.log('home')

    function getUsers() {
      getUser('/abc', {data: 33, headers: {'X-Custom-Header': 'foobar'}}).then((res: any) => console.log(res)).catch((e: any) => console.log(e, 3333))
      postUser('/abc', {b: 2}).then((res: any) => console.log(res)).catch((e: any) => console.log(e, 4444))
    }

    return { getUsers }
  }
})
</script>
