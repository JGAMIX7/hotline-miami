const menu = document.getElementById("menu");
const toggle = document.getElementById("toggle");
const close = document.getElementById("close");

if (toggle) {
  toggle.addEventListener("click", () => {
    menu.classList.add("active");
    document.getElementById("toggle-img").src = "../images/close.svg";
  });
}

// if (toggle) {
//   toggle.addEventListener("click", () => {
//     menu.classList.remove("active");
//   });
// }