<template>
  <div><h1>登录</h1></div>
  <welcome msg="wp"></welcome>
  <el-button @click="goHome">回首页</el-button>
</template>

<script >
// import {useRouter} from 'vue-router'
// const router = useRouter()
// const goHome = () => {
//   router.push('/')
// }
import Welcome from "./Welcome.vue";
import { ElMessage } from "element-plus";
export default {
  name: "login",
  methods: {
    goHome() {
      this.$router.push("/");
    },
  },
  components: {
    Welcome,
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
    });
  },
};
</script>

<style scoped>
</style>
