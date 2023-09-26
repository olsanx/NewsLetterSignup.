const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const input = form.querySelector("input");

  const inputValue = input.value;

  const error = document.querySelector(".error");

  const isValid = validateEmail(inputValue);

  if(isValid) {
    const container = document.querySelector(".container");
    const success = document.querySelector(".success");

    error.classList.add("d-none");
    container.classList.add("d-none");
    success.classList.remove("d-none");

    input.classList.remove("invalid");
  }  else {
      error.classList.remove("d-none");
      input.classList.add("invalid");
  }
});

function validateEmail(input) {
  const validRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if(input.match(validRegex)){
    return true;
  } else {
    return false;
  }
}

const dismiss = document.querySelector(".dismiss");

dismiss.addEventListener("click", function (e) {
  e.preventDefault();

  const container = document.querySelector(".container");
  const success = document.querySelector(".success");

  container.classList.remove("d-none");
  success.classList.add("d-none");
});















































