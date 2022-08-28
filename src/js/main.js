import { controlHeaderBurger } from './burger';
import { controlInput } from './input';
import { addClassToEvenProductItems } from './product';
import { initProgressBars } from './progress';
import { scrollToTop } from './scroll-to-top';
import { controlSelect } from './select';
import * as sliders from './sliders';
import { controlScrollProgress } from './solutions-progress';

controlHeaderBurger();
initProgressBars();
scrollToTop();
controlScrollProgress();
addClassToEvenProductItems();
controlInput();
controlSelect();
