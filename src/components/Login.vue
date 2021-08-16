<template>
  <div><h1>登录</h1></div>
  <welcome msg='wp'></welcome>
  <el-button @click="goHome">回首页</el-button>
</template>

<script >
// import {useRouter} from 'vue-router'
// const router = useRouter()
// const goHome = () => {
//   router.push('/')
// }
import Welcome from './Welcome.vue'
export default {
  name: 'login',
  methods: {
    goHome() {
      this.$router.push('/')
    }
  },
  components: {
    Welcome
  }
}
</script>

<style scoped>
</style>
