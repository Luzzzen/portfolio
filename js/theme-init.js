/* Aplica el tema guardado antes de que se pinte la página (evita el parpadeo).
   Solo acepta valores de la lista: nada de lo que haya en localStorage llega al DOM sin validar. */
(function () {
  var colors = { pop: '#FFE14D', noche: '#121212', hueso: '#F2EEE6' };
  var t = 'pop';
  try {
    var saved = localStorage.getItem('nc-theme');
    if (saved && Object.prototype.hasOwnProperty.call(colors, saved)) t = saved;
  } catch (e) {}
  document.documentElement.setAttribute('data-theme', t);
  var meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', colors[t]);
})();
