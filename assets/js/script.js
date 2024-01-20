const menu = document.getElementById("menu");
const toggle = document.getElementById("toggle");
const close = document.getElementById("close");
const img = document.getElementById("toggle-img");

if (toggle) {
  toggle.addEventListener("click", () => {
    menu.classList.add("active");
    img.src = "../images/close.svg";
  });
} else {
  toggle.addEventListener("click", () => {
    menu.classList.remove("active");
  });
}