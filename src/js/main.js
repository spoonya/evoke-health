import { controlHeaderBurger } from './burger';
import { addClassToEvenProductItems } from './product';
import { initProgressBars } from './progress';
import { scrollToTop } from './scroll-to-top';
import * as sliders from './sliders';
import { controlScrollProgress } from './solutions-progress';
import { controlInput, controlSelect, controlPasswordToggle } from './form';
import './loading-bar.min';

controlHeaderBurger();
initProgressBars();
scrollToTop();
controlScrollProgress();
addClassToEvenProductItems();
controlInput();
controlSelect();
controlPasswordToggle();

AOS.init({
  disable: 'mobile',
  easing: 'ease',
  once: true
});
