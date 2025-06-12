let input = document.createElement("input");
input.type = "text";
input.placeholder = "Escribí tu nombre";

let titulo = document.getElementById("titulo");
document.body.insertBefore(input, titulo);

input.addEventListener("input", function () {
  titulo.textContent = input.value;
  console.log(input.value);
});

