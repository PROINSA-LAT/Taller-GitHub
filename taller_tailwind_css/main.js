const toggle = document.getElementById("toggle-dark");
toggle.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
});
