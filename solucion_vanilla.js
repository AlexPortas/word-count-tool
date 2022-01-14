// Tu código aquí

// Recuperar el botón del DOM
let botonCalcular = document.querySelector("#btn");
// Asociar un evento 'click'
botonCalcular.addEventListener("click", () => {
    let texto = document.querySelector('#str').value;
    console.log(texto);

    let numCaracteres = texto.length;
    document.querySelector("#output").textContent = numCaracteres;
});

// Recuperar el valor del  del input

// Calcular el número de carácteres del texto

// Mostrar dicha información en el elemento #output