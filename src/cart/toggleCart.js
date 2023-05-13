import { getElement } from "../utils.js";

const toggleCartBtn = document.querySelector(".toggle-container");
const cartOverlay = document.querySelector(".cart-overlay");
const closeCartBtn = document.querySelector(".cart-close");

toggleCartBtn.addEventListener("click", () => {
  cartOverlay.classList.add("show");
});

closeCartBtn.addEventListener("click", () => {
  cartOverlay.classList.remove("show");
});

export const openCart = () => {
  cartOverlay.classList.add("show");
};
