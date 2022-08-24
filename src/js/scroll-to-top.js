export function scrollToTop() {
  const button = document.querySelector('#scroll-top');

  button.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
