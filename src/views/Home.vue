<template>
  <router-link to="/about">Go to About</router-link>
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
      getUser('/PSSlnStudio/slnstudio/devcenter/psdevcenterdbinst/curslngrid/searchcursln', {
        data: 33, headers: {'X-Custom-Header': 'foobar'}
      })
      .then((res: any) => console.log(res))
      
      postUser('/PSSlnStudio/slnstudio/devcenter/psdevcenterdbinst/curslngrid/searchcursln', {b: 2, headers: {'X-Custom-Header': 'foobar'}})
      .then((res: any) => console.log(res))
      // .catch((err) => console.log(err))
    }

    return { getUsers }
  }
})
</script>
