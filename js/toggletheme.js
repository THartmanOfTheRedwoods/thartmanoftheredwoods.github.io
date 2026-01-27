document.addEventListener('DOMContentLoaded', () => {
  var paletteSwitcher1 = document.getElementById("__palette_1");
  var paletteSwitcher2 = document.getElementById("__palette_2");
  paletteSwitcher1?.addEventListener("change", () => location.reload());
  paletteSwitcher2?.addEventListener("change", () => location.reload());
});
