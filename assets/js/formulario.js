//Formularios

// Seleccior el formulario 
const formulario = document.querySelector('.formulario');

// Agregamos un event listener para el evento "submit"
formulario.addEventListener('submit', function(event) {
    // Prevenimos el envío del formulario por defecto
    event.preventDefault();

    // Obtener los valores de los campos
    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    let mensaje = document.getElementById('mensaje').value;

    // Validar que el nombre tenga al menos 3 caracteres y no contenga números
    let nombreRegex = /^[A-Za-zÁáÉéÍíÓóÚúÜüÑñ\s]{3,}$/;
    if (!nombreRegex.test(nombre)) {
        alert('El nombre debe tener al menos 3 caracteres y no debe contener caracteres numericos.');
        return false; // Evita que el formulario se envíe
    }

    // Validar que los campos no estén vacíos
    if (nombre.trim() === '' || email.trim() === '' || mensaje.trim() === '') {
        alert('Por favor, completa todos los campos del formulario.');
        return false; // Evita que el formulario se envíe
    }

    // Validar el formato del email
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, introduce un email válido.');
        return false; // Evita que el formulario se envíe
    }

    // Si todo está correcto, el formulario se envía
    alert('Formulario enviado correctamente.'); // Mensaje de éxito (opcional)
    formulario.submit(); // Envía el formulario manualmente
});