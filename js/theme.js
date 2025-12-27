const root = document.documentElement;
const toggleBtn = document.getElementById("theme-toggle");

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  root.setAttribute("data-theme", savedTheme);
}

// Toggle theme
toggleBtn.addEventListener("click", () => {
  const current = root.getAttribute("data-theme");
  const newTheme = current === "dark" ? "light" : "dark";

  root.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
});
