// 1. Obtener los elementos del DOM usando sus IDs.
const cadena = document.getElementById('cadena');
const numerico = document.getElementById('numero');
const boleano = document.getElementById('boleano');

const tipo_cadena = document.getElementById('tipo_cadena');
const tipo_numero = document.getElementById('tipo_numero');
const tipo_boleano = document.getElementById('tipo_boleano');

const btn_validar = document.getElementById('btn_validar');

// 2. Asignar un manejador de evento 'click' al botón.
btn_validar.addEventListener('click', function() {
    // 3. Modificar la propiedad de texto del h1.
    tipo_cadena.textContent = typeof(cadena.va);
});
