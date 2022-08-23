import { CLASSES, DOM } from './constants';

const burgerOpenBtn = document.querySelector('#burger-button');
const burgerCloseBtn = document.querySelector('#burger-close');
const burger = document.querySelector('#burger');

function toggleBurger() {
  burgerOpenBtn.addEventListener('click', function () {
    DOM.body.classList.add(CLASSES.scrollHidden);
    burger.classList.add(CLASSES.active);
    this.classList.add(CLASSES.active);
  });

  burgerCloseBtn.addEventListener('click', function () {
    DOM.body.classList.remove(CLASSES.scrollHidden);
    burger.classList.remove(CLASSES.active);
    this.classList.remove(CLASSES.active);
  });
}

export function controlHeaderBurger() {
  toggleBurger();
}
