(() => {
  const links = Array.from(document.querySelectorAll('.nav-link'));
  const sections = Array.from(document.querySelectorAll('.guide'));
  const highlight = (id) => links.forEach(link => {
    if (link.hash === '#' + id) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
  let scheduled = false;
  const update = () => {
    scheduled = false;
    const current = sections.filter(section => section.getBoundingClientRect().top <= 180).pop() || sections[0];
    if (current) highlight(current.id);
  };
  window.addEventListener('scroll', () => {
    if (!scheduled) { scheduled = true; requestAnimationFrame(update); }
  }, { passive: true });
  window.addEventListener('hashchange', update);
  window.addEventListener('load', update);
  update();
})();
