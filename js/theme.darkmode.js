const chk = document.getElementById("codeindevelopers");
chk.addEventListener("click", () => {
  chk.checked
    ? document.body.classList.add("darkmode")
    : document.body.classList.remove("darkmode");
  localStorage.setItem("darkModeStatus", chk.checked);
});
window.addEventListener("load", (event) => {
  if (localStorage.getItem("darkModeStatus") == "true") {
    document.body.classList.add("darkmode");
    document.getElementById("codeindevelopers").checked = true;
  }
});
