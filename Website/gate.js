const CORRECT_PASSWORD = "Password";

const form = document.getElementById("gate-form");
const input = document.getElementById("password-input");
const errorMessage = document.getElementById("error-message");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (input.value === CORRECT_PASSWORD) {
    sessionStorage.setItem("unlocked", "true");
    window.location.href = "main.html";
  } else {
    errorMessage.hidden = false;
    input.value = "";
    input.focus();
  }
});
