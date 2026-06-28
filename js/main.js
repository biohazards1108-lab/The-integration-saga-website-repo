/* ============================================================
   PROJECT EDEN TERMINAL — MAIN JS
   ============================================================ */

/* ------------------------------
   BOOT SCREEN
------------------------------ */
window.addEventListener("load", () => {
  const boot = document.getElementById("boot-screen");
  setTimeout(() => {
    boot.style.opacity = "0";
    setTimeout(() => boot.remove(), 600);
  }, 3000);
});

/* ------------------------------
   MOBILE NAV TOGGLE
------------------------------ */
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });
}

/* ------------------------------
   DROPDOWN MENUS (Desktop)
------------------------------ */
const dropdowns = document.querySelectorAll(".nav-dropdown");

dropdowns.forEach(drop => {
  const toggle = drop.querySelector(".nav-dropdown-toggle");

  toggle.addEventListener("click", (e) => {
    e.stopPropagation();

    // Close all other dropdowns
    dropdowns.forEach(d => {
      if (d !== drop) d.classList.remove("open");
    });

    // Toggle this one
    drop.classList.toggle("open");
  });
});

// Close dropdowns when clicking outside
document.addEventListener("click", () => {
  dropdowns.forEach(d => d.classList.remove("open"));
});

/* ------------------------------
   LIGHTBOX VIEWER
------------------------------ */
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-image");
const lightboxClose = document.querySelector(".lightbox-close");

document.querySelectorAll("img[data-lightbox]").forEach(img => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightbox.setAttribute("aria-hidden", "false");
    lightbox.style.display = "flex";
  });
});

lightboxClose.addEventListener("click", () => {
  lightbox.style.display = "none";
  lightbox.setAttribute("aria-hidden", "true");
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
    lightbox.setAttribute("aria-hidden", "true");
  }
});
