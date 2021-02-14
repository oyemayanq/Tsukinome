const converterContainer = document.querySelector("#converter-container");

const input = document.querySelector("#converter-input");
const form = document.querySelector("#converter-form");
const convert = document.querySelector("#converter-icon");
const result = document.querySelector("#converter-result");

const converterNavToggler = document.querySelector("#converter-nav-toggler");
const converterCollapse = document.querySelector("#converter-collapse");

const converterToolToggler = document.querySelector("#converter-tool-toggler");
const converterToolDropdown = document.querySelector(
  "#converter-tool-dropdown"
);

converterNavToggler.addEventListener("click", () => {
  converterCollapse.classList.toggle("converter-active-collapse");
});

converterToolToggler.addEventListener("click", () => {
  converterToolDropdown.classList.toggle("converter-tool-dropdown-active");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let res = converter(input.value);
  /*let res = input.value;*/
  result.textContent = res;
});

convert.addEventListener("click", () => {
  let res = converter(input.value);
  result.textContent = res;
});

converterContainer.addEventListener("click", () => {
  converterToolDropdown.classList.remove("converter-tool-dropdown-active");
});
