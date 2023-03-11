const root = document.body;
if (localStorage.getItem("color-palette")) {
  var palette = localStorage.getItem("color-palette");
  root.setAttribute("color-palette",palette);
}
var buttons = document.querySelectorAll("button[color-palette]");
buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    var attr = this.getAttribute("color-palette");
    document.body.setAttribute("color-palette", attr);
    localStorage.setItem("color-palette", attr);
  });
  button.style.setProperty(
    "background-color",
    button.getAttribute("color-palette")
  );
});