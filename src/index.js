// 切换侧边栏伸缩
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("collapsed");
}

// 页面切换功能
function switchPage(pageId) {
  // 隐藏所有页面
  document
    .querySelectorAll(".page")
    .forEach((page) => page.classList.remove("active"));

  // 显示选中的页面
  document.getElementById(pageId).classList.add("active");

  // 更新页面标题
  const pageTitle = document.querySelector(".page-title");
  if (pageId === "home") {
    pageTitle.textContent = "HOME";
  } else if (pageId === "page1") {
    pageTitle.textContent = "PAGE 1";
  } else if (pageId === "page2") {
    pageTitle.textContent = "PAGE 2";
  }
}
