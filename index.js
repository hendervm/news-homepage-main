const menuLabel = document.querySelector('.menu-img')
const menuChecked = document.querySelector('#menu-toggle-inp')
const body = document.querySelector('body');

function change() {
    if (menuChecked.checked) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = 'auto';
    }
};

addEventListener('change', change)
