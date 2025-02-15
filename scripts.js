// Animación para mostrar/ocultar detalles del curso
document.querySelectorAll('.ver-mas').forEach(boton => {
    boton.addEventListener('click', () => {
        const cursoId = boton.getAttribute('data-curso');
        const detalle = document.getElementById(cursoId);

        // Alternar la clase 'visible' para mostrar/ocultar
        detalle.classList.toggle('visible');

        // Cambiar el texto del botón
        if (detalle.classList.contains('visible')) {
            boton.textContent = 'Ocultar información';
        } else {
            boton.textContent = 'Más información';
        }
    });
});

// Animación para mostrar/ocultar detalles del artículo
document.querySelectorAll('.ver-articulo').forEach(boton => {
    boton.addEventListener('click', () => {
        const articuloId = boton.getAttribute('data-articulo');
        const detalle = document.getElementById(articuloId);

        // Alternar la clase 'visible' para mostrar/ocultar
        detalle.classList.toggle('visible');

        // Cambiar el texto del botón
        if (detalle.classList.contains('visible')) {
            boton.textContent = 'Ocultar';
        } else {
            boton.textContent = 'Ver';
        }
    });
});