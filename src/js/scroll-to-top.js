export function scrollToTop() {
  const button = document.querySelector('#scroll-top');

  if (!button) return;

  button.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
