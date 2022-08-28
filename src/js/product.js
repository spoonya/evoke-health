export function addClassToEvenProductItems() {
  const productItems = document.querySelectorAll('[data-product-item]');

  productItems.forEach((el, index) => {
    if (index % 2 !== 0) el.classList.add('bg-decor');
  });
}
