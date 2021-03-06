"use strict";

let cart = [];

const addCartBtns = document.querySelectorAll(".add-to-cart-btn");
addCartBtns.forEach((el) => {
    el.addEventListener("click", () => addToCart(el.parentElement))
})


const updateCartTotal = () => {
    const cartTotalEl = document.querySelector(".cart-total");
    cartTotalEl.innerHTML = cart.length;
}

const addToCart = (element) => {
    cart.push(element);
    console.log(cart);
    updateCartTotal();
    console.log(cart.length);
};

const displayCartModal = () => {
    const cartModal = document.querySelector(".cart-modal");
    cartModal.classList.remove("hidden");
    console.log("unhiddeN")
}

const cartHover = document.querySelectorAll(".cart-hover");
cartHover.forEach((el) => {
    el.addEventListener("mouseenter", displayCartModal());
})