document.addEventListener("DOMContentLoaded", () => {
  const boot = document.getElementById("boot-screen");

  // Show boot screen for 5 seconds
  setTimeout(() => {
    boot.classList.add("fade-out");

    // Remove boot screen after fade
    setTimeout(() => {
      boot.remove();
    }, 1200);
  }, 5000);
});
