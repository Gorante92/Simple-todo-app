var form = document.getElementById("Form");
var field = document.getElementById("Field");

form.addEventListener("submit", e => {
  e.preventDefault();
  let value = field.value;

  document.body.insertAdjacentHTML(
    "beforeend",
    `<li class="list">${value}</li>`
  );
});
