export function controlScrollProgress() {
  const progressSection = document.querySelector('#solutions');

  if (!progressSection) return;

  const progressBar = document.querySelector('#solutions-progress');

  const animateProgressBar = () => {
    const scrollDist = -progressSection.getBoundingClientRect().top;
    const progressHeight =
      (scrollDist /
        (progressSection.getBoundingClientRect().height -
          document.documentElement.clientHeight)) *
      100;

    progressBar.style.height = `${progressHeight}%`;

    if (progressHeight < 0) {
      progressBar.style.height = '0%';
    }
  };

  window.addEventListener('scroll', animateProgressBar);
}
