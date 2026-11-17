/*
 * 首屏主题初始化：必须在 <body> 渲染前同步执行，避免闪白。
 * 抽成外部文件是为了能启用严格 CSP（script-src 'self'）。
 */
(function () {
  var root = document.documentElement;
  var choice = "dark";
  try {
    var saved = localStorage.getItem("theme-choice");
    if (saved === "light" || saved === "dark" || saved === "auto") choice = saved;
  } catch (e) {}
  var dark =
    choice === "dark" ||
    (choice === "auto" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);
  root.dataset.themeChoice = choice;
  root.dataset.theme = dark ? "dark" : "light";
  var meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", dark ? "#14171c" : "#f4f6fb");
})();
