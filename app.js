(() => {
  if (typeof gsap === 'undefined') return;

  gsap.from('.hero-inner h1', {
    opacity: 0,
    y: 40,
    duration: 1.1,
    ease: 'power3.out'
  });

  gsap.from('.hero-sub', {
    opacity: 0,
    y: 20,
    delay: 0.2,
    duration: 0.9
  });
})();