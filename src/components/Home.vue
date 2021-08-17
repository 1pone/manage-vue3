<template>
  <el-container class="basic-layout">
    <el-aside class="nav-aside">
      <el-menu
        default-active="1-4-1"
        class="el-menu-vertical-demo"
        background-color="#001529"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
      >
        <el-submenu index="1">
          <template #title>
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <template #title>分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template #title>选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <template #title>导航二</template>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <template #title>导航三</template>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <template #title>导航四</template>
        </el-menu-item>
      </el-menu></el-aside
    >
    <el-container class="contant-right">
      <el-header class="nav-top">
        <div class="bread">面包屑</div>
        <div class="user-info">用户</div></el-header
      >
      <el-main class="wrapper">
        <div class="main-page">
          <router-view></router-view>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return { isCollapse: false };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped lang='scss'>
.basic-layout {
  .nav-aside {
    width: 200px;
    height: 100vh;
    background-color: #001529;
    color: #fff;
    text-align: center;
    line-height: 200px;
    overflow-y: auto;
  }
  .contant-right {
    .nav-top {
      height: 50px;
      line-height: 50px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #ddd;
      .bread {
      }
      .user-info {
      }
    }
    .wrapper {
      background-color: #eef0f3;
      padding: 20px;
      .main-page{
        background-color: #fff;
        height: 100%;
      }
    }
  }
}
</style>
