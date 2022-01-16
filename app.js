// Tu código aquí
let btn = document.querySelector("#btn");
let output = document.querySelector("#output");
let texto = document.querySelector("#str");

btn.addEventListener("click", escribirLongitud);

function escribirLongitud(){
    output.textContent = texto.value.length
}