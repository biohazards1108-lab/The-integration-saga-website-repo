// ============================================================
// PROJECT EDEN TERMINAL — MAIN JAVASCRIPT
// Handles boot screen, navigation, dropdowns, lightbox
// ============================================================

document.addEventListener("DOMContentLoaded", () => {

  // ============================================================
  // BOOT SCREEN
  // ============================================================
  const bootScreen = document.getElementById("boot-screen");

  if (bootScreen) {
    // Fade out after progress bar finishes
    setTimeout(() => {
      bootScreen.style.opacity = "0";
      bootScreen.style.transition = "opacity 0.6s ease";

      setTimeout(() => {
        bootScreen.style.display = "none";
      }, 600);

    }, 3000); // Boot duration
  }

  // ============================================================
  // MOBILE NAV TOGGLE
  // ============================================================
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      navMenu.classList.toggle("open");
    });
  }

  // Close mobile menu when clicking outside
  document.addEventListener("click", () => {
    if (navMenu) navMenu.classList.remove("open");
  });

  // ============================================================
  // DROPDOWN MENUS
  // ============================================================
  const dropdowns = document.querySelectorAll(".nav-dropdown");

  dropdowns.forEach((dropdown) => {
    const toggle = dropdown.querySelector(".nav-dropdown-toggle");

    if (!toggle) return;

    toggle.addEventListener("click", (e) => {
      e.stopPropagation();

      // Close all other dropdowns
      dropdowns.forEach((d) => {
        if (d !== dropdown) d.classList.remove("open");
      });

      dropdown.classList.toggle("open");
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener("click", () => {
    dropdowns.forEach((dropdown) => dropdown.classList.remove("open"));
  });

  // ============================================================
  // LIGHTBOX VIEWER
  // ============================================================
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = lightbox ? lightbox.querySelector(".lightbox-image") : null;
  const lightboxClose = lightbox ? lightbox.querySelector(".lightbox-close") : null;

  if (lightbox && lightboxImg && lightboxClose) {

    // Open lightbox
    document.querySelectorAll("[data-lightbox]").forEach((img) => {
      img.addEventListener("click", () => {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt || "";
        lightbox.style.display = "flex";
      });
    });

    // Close button
    lightboxClose.addEventListener("click", () => {
      lightbox.style.display = "none";
    });

    // Click outside image closes lightbox
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        lightbox.style.display = "none";
      }
    });
  }

});
