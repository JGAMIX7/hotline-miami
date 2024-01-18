const menu = document.getElementById("menu");
const toggle = document.getElementById("toggle");
const close = document.getElementById("close");
const dropdown = document.getElementById("dropdown");
const links = document.getElementsByClassName("nav_link");

if (toggle) {
  toggle.addEventListener("click", () => {
    menu.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    menu.classList.remove("active");
  });
}


links.forEach((link) => {
   link.addEventListener("click", () =>{
      dropdown.classList.toggle("active-dropdown");
   })
});
