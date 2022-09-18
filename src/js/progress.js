export function initProgressBars() {
  const progressContainers = [
    ...document.querySelectorAll('[data-progress-circle]')
  ];

  if (!progressContainers.length) return;

  progressContainers.forEach((container) => {
    const bar = new ldBar(container, {
      value: 0
    });

    const infoEl = container.querySelector('[data-progress-info]');
    const valueEl = container.querySelector('.ldBar-label');
    const { value } = container.dataset;

    valueEl.classList.add('progress-circle__value');
    infoEl.prepend(valueEl);

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.25
    };
    const target = document.querySelector('#progress-circles');

    const startProgressAnime = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          bar.set(value);

          observer.unobserve(target);
        }
      });
    };

    const observer = new IntersectionObserver(startProgressAnime, options);
    observer.observe(target);
  });
}
