<script setup>
import { ref } from "vue"
// import router from "@/router"
import { useRouter, useRoute } from "vue-router"
const isSidebarCollapsed = ref(false)
const toggleButtonContent = ref("&#10094;") // 初始状态为左箭头
const pageTitle = ref("")
const router = useRouter()
const loadPage = (page) => {
  console.log("load page:", page)
  if (page !== "Home") router.push("/" + page)
  else router.push("/")
  pageTitle.value = page
}

const toggleSidebar = () => {
  isSidebarCollapsed.value = !isSidebarCollapsed.value
  toggleButtonContent.value = isSidebarCollapsed.value ? "&#10095;" : "&#10094;" // 根据状态更新箭头方向
  console.log("toggle sidebar", isSidebarCollapsed.value)
}
</script>

<template>
  <body>
    <!-- 文档主体，包含内容 -->
    <!-- 侧边栏 -->
    <div id="sidebar" :class="['sidebar', { collapsed: isSidebarCollapsed }]">
      <!-- 块级元素，用于布局 -->
      <div class="logo">
        LOGO
        <span class="app-name">APP NAME</span>
      </div>
      <div class="nav-item" @click="loadPage('Home')">
        <!-- 标签中的 id 与 class 可以用于 CSS 与 JS 选择器定位元素 -->
        <div class="icon">M</div>
        <div class="nav-text">HOME</div>
      </div>
      <div class="nav-item" @click="loadPage('Page1')">
        <div class="icon">A</div>
        <div class="nav-text">PAGE 1</div>
      </div>
      <div class="nav-item" @click="loadPage('Page2')">
        <div class="icon">B</div>
        <div class="nav-text">PAGE 2</div>
      </div>
    </div>

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

/* 侧边栏样式 */
.sidebar {
  width: 200px; /* 设置宽度 */
  background-color: #add8e6; /* 浅蓝色 */
  padding: 20px; /* 设置内边距，使用盒子模型 */
  padding-left: 1px; /* 设置左侧内边距为 1px */
  padding-right: 1px; /* 设置右侧内边距为 1px */
  box-sizing: border-box; /* 包括内边距和边框在内的总宽度 */
  display: flex; /* 使用 Flexbox 布局 */
  flex-direction: column; /* 垂直排列子元素 */
  transition: width 0.3s; /* 宽度变化时的过渡效果 */
}

.sidebar.collapsed {
  width: 50px; /* 设置宽度为 50px */
}

.logo {
  font-weight: bold; /* 设置字体加粗 */
  margin-bottom: 20px; /* 设置底部外边距 */
  text-align: center; /*文本居中 */
  white-space: nowrap; /* 防止文本换行，使得收缩更加平滑 */
  display: flex; /* 确保 logo 和 logo-name 在同一行 */
}
.sidebar .logo .app-name {
  display: flex;
  flex: 1;
  display: inline; /* 行内元素显示 */
}

.sidebar.collapsed .logo .app-name {
  display: none; /* 隐藏元素 */
}

.nav-item {
  display: flex; /* 使用 Flexbox 布局 */
  align-items: center; /* 子元素垂直居中 */
  padding: 10px 0; /* 设置内边距，使用盒子模型 */
  white-space: nowrap; /* 防止文本换行 */
  user-select: none; /* 禁止文本选择 */
}

.nav-item:hover {
  background-color: #d3d3d3; /* 鼠标悬停时的背景颜色 */
}

.icon {
  width: 30px; /* 设置宽度 */
  height: 30px; /* 设置高度 */
  background-color: #c0c0c0; /* 灰色 */
  margin-right: 10px; /* 设置右侧外边距 */
  margin-left: 10px; /* 设置右侧外边距 */
}

.nav-text {
  flex: 1; /* 占据剩余空间 */
  transition: opacity 0.5s, display 0.3s; /* 透明度变化时的过渡效果 */
}

.sidebar.collapsed .nav-text {
  opacity: 0; /* 设置透明度为 0 */
  display: none;
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
