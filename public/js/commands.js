document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("dropdown-button");
  const menu = document.getElementById("dropdown-menu");

  button.addEventListener("click", function () {
    menu.classList.toggle("show");
  });

  document.addEventListener("click", function (event) {
    if (!button.contains(event.target) && !menu.contains(event.target)) {
      menu.classList.remove("show");
    }
  });
});
