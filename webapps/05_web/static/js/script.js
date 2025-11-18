const boton = document.getElementById('agregarActividad');

boton.addEventListener('click', function() {
    const input = document.getElementById('actividad');
    const lista = document.getElementById('listaActividades'); 
    const text = input.value.trim();
    const nuevaActividad = document.createElement('li');
    nuevaActividad.textContent = text;
    lista.appendChild(nuevaActividad);
});