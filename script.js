const root = document.body;
if (localStorage.getItem("color-text")) {
  var color_text = localStorage.getItem("color-text");
  root.setAttribute("color-text",color_text);
}
if (localStorage.getItem("color-bg")) {
  var color_bg = localStorage.getItem("color-bg");
  root.setAttribute("color-bg",color_bg);
}
var buttons = document.querySelectorAll("button[color-text]");
buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    var attr = this.getAttribute("color-text");
    document.body.setAttribute("color-text", attr);
    localStorage.setItem("color-text", attr);
  });
  button.style.setProperty(
    "color",
    button.getAttribute("color-text")
  );
});
var buttons = document.querySelectorAll("button[color-bg]");
buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    var attr = this.getAttribute("color-bg");
    document.body.setAttribute("color-bg", attr);
    localStorage.setItem("color-bg", attr);
  });
  button.style.setProperty(
    "background-color",
    button.getAttribute("color-bg")
  );
});