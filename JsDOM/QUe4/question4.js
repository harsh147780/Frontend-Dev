const body = document.body;

document.getElementById("lightBtn").addEventListener("click", () => {
  body.setAttribute("data-theme", "light");
});

document.getElementById("darkBtn").addEventListener("click", () => {
  body.setAttribute("data-theme", "dark");
});

document.getElementById("blueBtn").addEventListener("click", () => {
  body.setAttribute("data-theme", "blue");
});
