<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {test} from '@/api/test'
import {login} from '@/api/group'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  mounted() {
    login("ecust","123").then(res=>{
      console.log(res)
    })
  }
}
</script>
