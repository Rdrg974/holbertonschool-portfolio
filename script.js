const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');


registerLink.addEventListener('click', ()=> {
  wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});

const textContent = document.getElementById('text-content');
const leftButton = document.getElementById('leftButton');
const rightButton = document.getElementById('rightButton');

let scrollAmount = 0;

leftButton.addEventListener('click', () => {
    if (scrollAmount > 0) {
        scrollAmount -= 20;
        textContent.style.left = -scrollAmount + 'px';
    }
});

rightButton.addEventListener('click', () => {
    if (scrollAmount < textContent.scrollWidth - textContent.clientWidth) {
        scrollAmount += 20;
        textContent.style.left = -scrollAmount + 'px';
    }
});
