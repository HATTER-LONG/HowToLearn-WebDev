// 切换侧边栏伸缩
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  // 当搜索时给侧边栏添加一个类名，用于隐藏侧边栏
  sidebar.classList.toggle("collapsed");
  // 切换箭头方向
  const toggleButton = document.querySelector(".toggle-button");
  if (sidebar.classList.contains("collapsed")) {
    toggleButton.innerHTML = "&#10095;"; // 右箭头
  } else {
    toggleButton.innerHTML = "&#10094;"; // 左箭头
  }
}

// 加载外部 HTML 文件
function loadPage(page) {
  console.log(page);
  fetch(`./src/${page}`)
    .then((response) => response.text())
    .then((html) => {
      console.log(html);
      const content = document.querySelector(".content-area");
      content.innerHTML = html;
      // 手动执行嵌入的脚本
      const scripts = content.querySelectorAll("script");
      scripts.forEach((script) => {
        const newScript = document.createElement("script");
        newScript.textContent = script.textContent;
        document.body.appendChild(newScript);
      });

      updatePageTitle(page);
    })
    .catch((error) => console.error(error));
}

// 更新页面标题
function updatePageTitle(page) {
  const pageTitle = document.querySelector(".page-title");

  if (page === "home.html") {
    pageTitle.textContent = "HOME";
  } else if (page === "page1.html") {
    pageTitle.textContent = "PAGE 1";
  } else if (page === "page2.html") {
    pageTitle.textContent = "PAGE 2";
  }
}

// 默认加载首页
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded");
  loadPage("home.html");
});
