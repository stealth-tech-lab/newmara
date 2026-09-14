
document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());

const btn = document.getElementById("menuBtn");
const menu = document.getElementById("mobileMenu");
if (btn && menu) {
  btn.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  });
  menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    menu.classList.remove("open");
    btn.setAttribute("aria-expanded", "false");
  }));
}
