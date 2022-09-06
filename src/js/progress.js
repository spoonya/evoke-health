const ProgressBar = require('progressbar.js');

export function initProgressBars() {
  const progressContainers = [
    ...document.querySelectorAll('[data-progress-circle]')
  ];

  if (!progressContainers.length) return;

  progressContainers.forEach((container) => {
    const isToTop = container.classList.contains('progress-circle--up');
    const color = !isToTop
      ? getComputedStyle(document.documentElement).getPropertyValue(
          '--orange-alpha'
        )
      : getComputedStyle(document.documentElement).getPropertyValue(
          '--purple-alpha'
        );
    const progressMark = container.dataset.progressMark
      ? container.dataset.progressMark
      : '%';
    const progressBar = new ProgressBar.Circle(container, {
      strokeWidth: 10,
      easing: 'easeInOut',
      duration: 1400,
      color,
      trailColor: getComputedStyle(document.documentElement).getPropertyValue(
        '--gray-alpha'
      ),
      trailWidth: 10,
      svgStyle: null,
      text: {
        className: 'progress-circle__value',
        style: null
      },
      step: (state, bar) => {
        bar.setText(
          `${parseFloat(
            Math.round(bar.value() * 100) *
              (!isToTop ? -1 : 1) *
              (progressMark === 'hrs' ? 0.2 : 1)
          )
            .toFixed(1)
            .replace(/\.0+$/, '')} ${progressMark}`
        );
      }
    });

    const info = container.querySelector('[data-progress-info]');
    const value = container.querySelector('.progress-circle__value');
    const { progressEnd } = container.dataset;
    info.prepend(value);

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.25
    };
    const target = document.querySelector('#progress-circles');

    const startProgressAnime = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          progressBar.animate(
            (!isToTop ? progressEnd * -1 : progressEnd) /
              100 /
              (progressMark === 'hrs' ? 2 : 1)
          ); // values between 0-1

          observer.unobserve(target);
        }
      });
    };

    const observer = new IntersectionObserver(startProgressAnime, options);
    observer.observe(target);
  });
}
