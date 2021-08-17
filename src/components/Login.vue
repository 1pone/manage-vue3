<template>
  <div><h1>登录</h1></div>
  <el-button @click="goHome">回首页</el-button>
</template>

<script >
// import {useRouter} from 'vue-router'
// const router = useRouter()
// const goHome = () => {
//   router.push('/')
// }
import { ElMessage } from "element-plus";
export default {
  name: "login",
  methods: {
    goHome() {
      this.$router.push("/");
    },
  },
  mounted() {
    // this.$request({
    //   method: "get",
    //   url: "/login",
    //   data: {
    //     name: "wp",
    //   },
    // }).then((res) => {
    //   ElMessage({
    //     message: "登录成功！",
    //     type: "success",
    //   });
    //   console.log(res);
    // });

    this.$request.get("/login", { name: "wp" }).then((res) => {
      ElMessage({
        message: "登录成功！",
        type: "success",
      });
      console.log(res);
      // this.$storage.setItem('userInfo', {userName: res.userName, userId: res.userId, token: res.token})
      this.$storage.setItem("userId",res.userId)
      this.$storage.setItem("userName",res.userName)
      this.$storage.setItem("token",res.token)
      this.$storage.clearItem('userName')
    });
  },
};
</script>

<style scoped>
</style>
