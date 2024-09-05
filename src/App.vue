<script setup>
import { ref, onMounted, watch } from "vue"
import { useRoute, useRouter } from "vue-router"
import { usePageStore } from "@/stores/pageStore"
import Menu from "./components/Menu.vue"
const isSidebarCollapsed = ref(false)
const toggleButtonContent = ref("&#10094;") // 初始状态为左箭头
const pageTitle = ref("")

const pageStore = usePageStore()
const router = useRouter()
const route = useRoute()
const loadPage = (page) => {
  console.log("load page:", page)
  if (page !== "Home") router.push("/" + page)
  else router.push("/")
  pageTitle.value = page
  pageStore.setPage(page)
}

const toggleSidebar = () => {
  isSidebarCollapsed.value = !isSidebarCollapsed.value
  toggleButtonContent.value = isSidebarCollapsed.value ? "&#10095;" : "&#10094;" // 根据状态更新箭头方向
  console.log("toggle sidebar", isSidebarCollapsed.value)
}

onMounted(() => {
  console.log("mounted")
  loadPage(pageStore.currentPage)
})
// 监听路由变化并更新 pageTitle
watch(route, (newRoute) => {
  console.log("route change", newRoute.name)
  pageTitle.value = newRoute.name || ""
})
</script>

<template>
  <body>
    <!-- 文档主体，包含内容 -->
    <!-- 侧边栏 -->
    <Menu :isCollapse="isSidebarCollapsed" />

    <!-- 主内容区 -->
    <div class="main-content">
      <!-- 块级元素，用于布局 -->
      <div class="header">
        <div class="toggle-button" @click="toggleSidebar()" v-html="toggleButtonContent"></div>
        <div class="page-title">{{ pageTitle }}</div>
        <div class="user-info">user</div>
      </div>
      <div id="content-area" class="content-area">
        <!-- 块级元素，用于布局 -->
        <!-- 默认显示首页 -->
        <router-view />
      </div>
    </div>
  </body>
</template>

<style scoped>
body {
  margin: 0; /* 移除默认外边距 */
  font-family: Arial, sans-serif; /* 设置字体 */
  display: flex; /* 使用 Flexbox 布局 */
  height: 100vh; /* 设置高度为视口高度 */
}

/* 主内容区样式 */
.main-content {
  flex: 1; /* 占据剩余空间 */
  display: flex; /* 使用 Flexbox 布局 */
  flex-direction: column; /* 垂直排列子元素 */
}

.header {
  display: flex; /* 使用 Flexbox 布局 */
  justify-content: space-between; /* 子元素两端对齐 */
  align-items: center; /* 子元素垂直居中 */
  background-color: #90ee90; /* 浅绿色 */
  padding: 10px; /* 设置内边距，使用盒子模型 */
  box-sizing: border-box; /* 包括内边距和边框在内的总宽度 */
}

.toggle-button {
  font-size: 20px; /* 设置字体大小 */
  cursor: pointer; /* 设置鼠标指针为手型 */
}

.page-title {
  font-weight: bold; /* 设置字体加粗 */
}

.user-info {
  background-color: #90ee90; /* 浅绿色 */
  padding: 5px 10px; /* 设置内边距，使用盒子模型 */
  border-radius: 5px; /* 设置圆角边框 */
}

.content-area {
  flex: 1; /* 占据剩余空间 */
  background-color: #ffff99; /* 浅黄色 */
  display: flex; /* 使用 Flexbox 布局 */
  justify-content: center; /* 子元素水平居中 */
  align-items: center; /* 子元素垂直居中 */
  font-size: 24px; /* 设置字体大小 */
  font-weight: bold; /* 设置字体加粗 */
}
</style>
