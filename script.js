document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("tfMenuToggle");
  const nav = document.getElementById("tfNav");

  const dropdownBtn = document.getElementById("tfShopToggle");
  const dropdownMenu = document.getElementById("tfShopMenu");

  if (!menuBtn || !nav || !dropdownBtn || !dropdownMenu) return;

  // Mobile Menu
  menuBtn.addEventListener("click", function () {
    const isOpen = nav.classList.toggle("open");

    menuBtn.setAttribute("aria-expanded", String(isOpen));

    menuBtn.querySelector("i").className = isOpen
      ? "fa-solid fa-xmark"
      : "fa-solid fa-bars";
  });

  // Products Dropdown
  dropdownBtn.addEventListener("click", function () {
    const isOpen = dropdownMenu.classList.toggle("show");

    dropdownBtn.setAttribute("aria-expanded", String(isOpen));
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", function (event) {
    if (!event.target.closest(".tf-dropdown")) {
      dropdownMenu.classList.remove("show");
      dropdownBtn.setAttribute("aria-expanded", "false");
    }
  });

  // Escape Key
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      nav.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
      menuBtn.querySelector("i").className = "fa-solid fa-bars";

      dropdownMenu.classList.remove("show");
      dropdownBtn.setAttribute("aria-expanded", "false");
    }
  });
});
