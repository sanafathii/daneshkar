//

let nameInput = document.getElementById("name");
let passwordInput = document.getElementById("password");
let emailInput = document.getElementById("email");
let span = document.createElement("span");

//
nameInput.addEventListener("keyup", (e) => {
  let value = e.target.value;
  let isValid = /^[a-zA-Z\s]+$/.test(value) && value.length < 15;
  span.innerText = "Please use only English letters.";
  if (!isValid) {
    span.classList.add("error");
    e.target.classList.add("border-red");
    e.target.classList.remove("border-green");
    e.target.parentNode.appendChild(span);
  } else {
    e.target.classList.remove("border-red");
    e.target.classList.add("border-green");
    span.remove();
  }
});

passwordInput.addEventListener("keyup", (e) => {
  let value = e.target.value;
  let isValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(value);
  span.innerText =
    "Password must be at least 8 characters long and include uppercase letters, lowercase letters, and numbers.";
  if (!isValid) {
    span.classList.add("error");
    e.target.classList.add("border-red");
    e.target.classList.remove("border-green");
    e.target.parentNode.appendChild(span);
  } else {
    e.target.classList.remove("border-red");
    e.target.classList.add("border-green");
    span.remove();
  }
});

emailInput.addEventListener("keyup", (e) => {
  let value = e.target.value;
  let isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  span.innerText = "Email must have a valid format.";

  if (!isValid) {
    span.classList.add("error");
    e.target.classList.add("border-red");
    e.target.classList.remove("border-green");
    e.target.parentNode.appendChild(span);
  } else {
    e.target.classList.remove("border-red");
    e.target.classList.add("border-green");
    span.remove();
  }
});
