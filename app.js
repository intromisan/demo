const menu = document.querySelector(".menu");
const overlay = document.querySelector(".overlay");

menu.addEventListener('click', () => {
  menu.classList.toggle('active');
  overlay.classList.toggle('open');
});