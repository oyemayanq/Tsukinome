/*const navigationMenu = document.querySelector(".navigation-menu");

navigationMenu.innerHTML = navigation();*/

const indexContainer = document.querySelector("#index-container");
const indexNavToggler = document.querySelector("#index-nav-toggler");
const indexCollapse = document.querySelector("#index-collapse");

const indexToolToggler = document.querySelector("#index-tool-toggler");
const indexToolDropdown = document.querySelector("#index-tool-dropdown");

indexNavToggler.addEventListener("click", () => {
  indexCollapse.classList.toggle("index-active-collapse");
});

indexToolToggler.addEventListener("click", () => {
  indexToolDropdown.classList.toggle("index-tool-dropdown-active");
});

indexContainer.addEventListener("click", () => {
  indexToolDropdown.classList.remove("index-tool-dropdown-active");
});
