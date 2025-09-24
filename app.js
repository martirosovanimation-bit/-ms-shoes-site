const burger = document.querySelector('.burger');
const menu = document.querySelector('nav ul');
if (burger) {
  burger.addEventListener('click', () => {
    menu.classList.toggle('active');
  });
}
