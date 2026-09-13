if (sessionStorage.getItem("unlocked") !== "true") {
  window.location.href = "index.html";
}

document.getElementById("logout-link").addEventListener("click", () => {
  sessionStorage.removeItem("unlocked");
});
