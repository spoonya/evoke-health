import { CLASSES } from '../constants';

export function controlInput() {
  const inputs = document.querySelectorAll('[data-input]');

  if (!inputs.length) return;

  inputs.forEach((input) => {
    input.addEventListener('change', () => {
      if (input.value) {
        input.classList.add(CLASSES.notEmpty);
      } else {
        input.classList.remove(CLASSES.notEmpty);
      }
    });
  });
}
