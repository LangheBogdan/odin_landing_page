document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.querySelector(".footer__get-year");
  if (!yearEl) return;

  yearEl.textContent = new Date().getFullYear();
});
