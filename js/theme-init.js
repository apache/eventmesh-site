/* ============================================================
   Theme Init — Blocking script, runs BEFORE first paint
   Prevents Flash of Unstyled Content (FOUC) on docs pages
   Must be loaded WITHOUT defer so it executes synchronously
   ============================================================ */
(function () {
  try {
    var t = localStorage.getItem('eventmesh-theme') || 'dark';
    if (t !== 'light' && t !== 'dark') t = 'dark';
    document.documentElement.setAttribute('data-theme', t);
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();
