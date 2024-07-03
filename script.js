document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var respuesta = document.querySelector('input[name="respuesta"]:checked').value;
    var respuestaTexto = document.getElementById('respuesta-texto');

    if (respuesta === 'si') {
        respuestaTexto.innerHTML = '¡Sabía que sí! Preciosa, Te amooo. ¡Bonito día! <br>Queria decirte que eres muy importante para mi nunca dudes del gran amor que te tengo.';
    } else if (respuesta === 'no') {
        respuestaTexto.innerHTML = 'Adios y Gracias<br>Disculpe las molestias ):';
        setTimeout(function() {
            window.close(); // Cierra la ventana después de mostrar el mensaje
        }, 3000); // 3000 milisegundos = 3 segundos
    }
});