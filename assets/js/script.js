const menu = document.getElementById("nav");
const toggle = document.getElementById("toggle");
const close = document.getElementById("close");

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

document.addEventListener('scroll', () => {
   const header = document.querySelector('header'); // Remplacez '.mon-element' par votre sélecteur
   const scrollThreshold = window.innerHeight * 0.1;

   if (window.scrollY > scrollThreshold) {
      header.classList.add('active'); // Remplacez 'active' par le nom de la classe à ajouter
   } else {
      header.classList.remove('active'); // Remplacez 'active' par le nom de la classe à retirer
   }
});