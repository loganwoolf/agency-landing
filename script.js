const menu = document.querySelector('.hamburger');
const menuFlyout = document.querySelector('.menu-flyout');


function toggleMenu() {
   console.log('click');
   if (menuFlyout.classList.contains('hidden')) {
      menuFlyout.classList.remove('hidden');
   } else {
      menuFlyout.classList.add('hidden');
   }
}



menu.addEventListener('click', toggleMenu);