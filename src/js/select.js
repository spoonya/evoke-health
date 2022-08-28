import { CLASSES } from './constants';

export function controlSelect() {
  const selectedList = document.querySelectorAll('[data-select-selected]');

  selectedList.forEach((selected) => {
    const dropdown = selected.closest('[data-select]');
    const selectedLabel = dropdown.querySelector(
      '[data-select-selected-label]'
    );
    const optionsContainer = dropdown.querySelector('[data-select-options]');
    let isSelected = false;

    optionsContainer.addEventListener('click', (e) => {
      const option = e.target.closest('[data-select-option]');

      if (!option) return;

      if (e.target.tagName === 'DIV') {
        option.querySelector('input').checked = true;
      }

      selectedLabel.textContent = option.querySelector('label').innerText;
      optionsContainer.classList.remove('active');

      isSelected = true;
    });

    selected.addEventListener('click', () => {
      optionsContainer.classList.toggle(CLASSES.active);
      selected.classList.add(CLASSES.notEmpty);
    });

    window.addEventListener('click', (e) => {
      const path = e.path || (e.composedPath && e.composedPath());

      if (path.includes(selected)) return;

      if (!isSelected) {
        selected.classList.remove(CLASSES.notEmpty);
      }

      if (optionsContainer.classList.contains(CLASSES.active)) {
        optionsContainer.classList.remove(CLASSES.active);
      }
    });
  });
}
