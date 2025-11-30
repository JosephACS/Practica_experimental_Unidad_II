// Validación del formulario de contacto
document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formulario-contacto');

    formulario.addEventListener('submit', function(e) {
        e.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const asunto = document.getElementById('asunto').value;
        const mensaje = document.getElementById('mensaje').value;

        if (nombre && email && asunto && mensaje) {
            // Simular envío del formulario
            alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
            formulario.reset();
        } else {
            alert('Por favor, completa todos los campos del formulario.');
        }
    });
});