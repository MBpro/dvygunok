"use strict"

const burgerOpen = document.querySelector('#burger-open');
const burgerClose = document.querySelector('#burger-close');
const lineDecoration = document.querySelector('.burger__line');
const navigation = document.querySelector('.main-header__nav');
const backgroundMenu = document.querySelector('.background-mobile-menu');
const lockScroll = document.querySelector('body');

function openMenu(){
    burgerOpen.classList.add('js-burger__button--active');
    lineDecoration.classList.add('js-burger__line--active');
    navigation.classList.add('js-main-header__nav--active');
    backgroundMenu.classList.add('js-background-mobile-menu');
    lockScroll.classList.add('js-lock-scroll');
}

function closeMenu(){
    burgerOpen.classList.remove('js-burger__button--active');
    lineDecoration.classList.remove('js-burger__line--active');
    navigation.classList.remove('js-main-header__nav--active');
    backgroundMenu.classList.remove('js-background-mobile-menu');
    lockScroll.classList.remove('js-lock-scroll');
}

burgerOpen.addEventListener('click', openMenu);
burgerClose.addEventListener('click', closeMenu);






