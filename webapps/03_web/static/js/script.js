// 1. Obtener los elementos del DOM usando sus IDs.
const titulo_id = document.getElementById('titulo_id');
const titulo_name = document.getElementsByName('titulo_name');
const titulo_h2 = document.getElementsByTagName('h2');

const boton = document.getElementById('botonMensaje');

// 2. Asignar un manejador de evento 'click' al botón.
boton.addEventListener('click', function() {
    // 3. Modificar la propiedad de texto del h1.
    titulo_id.textContent = 'Click';
    titulo_name[0].textContent = 'Click';
    titulo_h2[0].textContent = 'Click';
    titulo_h2[1].textContent = 'Click';
});
