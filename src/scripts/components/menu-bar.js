const menuBar = document.querySelector("nav .menu-bar");
const nav = document.querySelector("nav nav-links");

menuBar.addEventListener("click", () => nav.classList.toggle("sidebar-active"));