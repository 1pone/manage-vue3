<template>
  <div><h1>欢迎-{{msg}}</h1></div>
  <router-link to="/login">登录</router-link>
</template>

<script>
export default {
  name: 'welcome',
  props: {
    msg: String
  }
}
</script>

<style scoped>
</style>
