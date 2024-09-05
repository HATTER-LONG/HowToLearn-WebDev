<template>
  <el-menu
    default-active="1"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
    @select="handleSelect"
  >
    <div class="logo-container">
      <transition name="logo-fade">
        <img
          v-if="!isCollapse"
          key="large-logo"
          src="/src/assets/layout/logo-text-2.png"
          alt="Logo"
          class="logo"
        />
        <img
          v-else
          key="small-logo"
          src="/src/assets/layout/logo.png"
          alt="Logo"
          class="small_logo"
        />
      </transition>
    </div>
    <hr />
    <el-menu-item index="/">
      <el-icon><icon-menu /></el-icon>
      <template #title>Home</template>
    </el-menu-item>
    <el-menu-item index="/Page1">
      <el-icon><document /></el-icon>
      <template #title>Page1</template>
    </el-menu-item>
    <el-menu-item index="/Page2">
      <el-icon><setting /></el-icon>
      <template #title>Page2</template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router"
import { Document, Menu as IconMenu, Location, Setting } from "@element-plus/icons-vue"
const props = defineProps({
  isCollapse: Boolean
})

const router = useRouter()
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleSelect = (index: string) => {
  console.log(index)
  router.push(index)
}
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  /* min-height: 400px; */
}
.logo-container {
  display: flex;
  /* align-items: center; */
  padding: 10px;
  /* justify-content: center; */
}

.logo {
  width: 160px;
  height: 50px;
  transition: width 0.1s, opacity 0.3s;
}
.small_logo {
  width: 50px;
  height: 50px;
  transition: width 0.1s, opacity 0.3s;
}
.logo-fade-enter-active,
.logo-fade-leave-active {
  transition: opacity 0.3s;
}

.logo-fade-enter, .logo-fade-leave-to /* .logo-fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
