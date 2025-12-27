(function () {
  const root = document.documentElement;
  const toggleBtnId = "theme-toggle";

  // 1. Apply saved theme OR system preference
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    root.setAttribute("data-theme", savedTheme);
  } else {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    root.setAttribute("data-theme", prefersDark ? "dark" : "light");
  }

  // 2. Wait for DOM before attaching button
  document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById(toggleBtnId);
    if (!toggleBtn) return;

    toggleBtn.addEventListener("click", () => {
      const current = root.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";

      root.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
    });
  });
})();
