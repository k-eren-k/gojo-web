const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const closeButton = document.getElementById("close-button");

hamburger.addEventListener("click", () => {
  sidebar.classList.add("show");
  overlay.classList.add("show");
});

closeButton.addEventListener("click", () => {
  sidebar.classList.remove("show");
  overlay.classList.remove("show");
});

overlay.addEventListener("click", () => {
  sidebar.classList.remove("show");
  overlay.classList.remove("show");
});
