/* Selector de temas + año del footer */
(function () {
  var root = document.documentElement;
  var meta = document.querySelector('meta[name="theme-color"]');
  var colors = { pop: '#FFE14D', noche: '#121212', hueso: '#F2EEE6' };
  var dots = document.querySelectorAll('.theme-dot');

  function apply(theme, save) {
    if (!Object.prototype.hasOwnProperty.call(colors, theme)) return;
    root.setAttribute('data-theme', theme);
    if (meta) meta.setAttribute('content', colors[theme]);
    dots.forEach(function (d) {
      d.setAttribute('aria-pressed', d.dataset.set === theme ? 'true' : 'false');
    });
    if (save) { try { localStorage.setItem('nc-theme', theme); } catch (e) {} }
  }

  dots.forEach(function (d) {
    d.addEventListener('click', function () { apply(d.dataset.set, true); });
  });
  apply(root.getAttribute('data-theme') || 'pop', false);

  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
