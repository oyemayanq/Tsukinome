const bracketContainer = document.querySelector("#bracket-container");

const input = document.querySelector("#bracket-input");
const form = document.querySelector("#bracket-form");
const result = document.querySelector("#bracket-result");
const check = document.querySelector("#bracket-icon");

const bracketNavToggler = document.querySelector("#bracket-nav-toggler");
const bracketCollapse = document.querySelector("#bracket-collapse");

const bracketToolToggler = document.querySelector("#bracket-tool-toggler");
const bracketToolDropdown = document.querySelector("#bracket-tool-dropdown");

bracketNavToggler.addEventListener("click", () => {
  bracketCollapse.classList.toggle("bracket-active-collapse");
});

bracketToolToggler.addEventListener("click", () => {
  bracketToolDropdown.classList.toggle("bracket-tool-dropdown-active");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let res = checker(input.value);
  if (res === "Valid") {
    result.style.color = "#2b9348";
  } else {
    result.style.color = "#d90429";
  }
  result.textContent = res;
});

check.addEventListener("click", () => {
  let res = checker(input.value);
  if (res === "Valid") {
    result.style.color = "#2b9348";
  } else {
    result.style.color = "#d90429";
  }
  result.textContent = res;
});

bracketContainer.addEventListener("click", () => {
  bracketToolDropdown.classList.remove("bracket-tool-dropdown-active");
});
