import { getElement } from "./utils.js";

const sidebarOverlay = document.querySelector(".sidebar-overlay");
const closeBtn = document.querySelector(".sidebar-close");
const navBtn = document.querySelector(".toggle-nav");

navBtn.addEventListener("click", () => {
  sidebarOverlay.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  sidebarOverlay.classList.remove("show");
});
