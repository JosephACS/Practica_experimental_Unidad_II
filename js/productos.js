// Datos de productos
const productos = [
    {
        id: 1,
        nombre: "Teclado Mecánico RGB",
        descripcion: "Teclado mecánico con retroiluminación RGB y switches azules",
        precio: "$89.99",
        categoria: "teclados",
        imagen: "../Img/tecladomecanicorgb.webp"
    },
    {
        id: 2,
        nombre: "Ratón Gaming",
        descripcion: "Ratón para gaming con sensor óptico de alta precisión",
        precio: "$45.99",
        categoria: "ratones",
        imagen: "../Img/RatonMecanico.jpg"
    },
    {
        id: 3,
        nombre: "Audífonos Inalámbricos",
        descripcion: "Audífonos con cancelación de ruido y batería de larga duración",
        precio: "$129.99",
        categoria: "audifonos",
        imagen: "../Img/audifonosgamerinalambricos.webp"
    },
    {
        id: 4,
        nombre: "Teclado Membrana",
        descripcion: "Teclado silencioso de membrana con diseño ergonómico",
        precio: "$29.99",
        categoria: "teclados",
        imagen: "../Img/tecladomembrana.jpg"
    },
    {
        id: 5,
        nombre: "Ratón Inalámbrico",
        descripcion: "Ratón ergonómico con conexión Bluetooth y batería recargable",
        precio: "$35.99",
        categoria: "ratones",
        imagen: "../Img/ratoninalambrico.webp"
    },
    {
        id: 6,
        nombre: "Audífonos con Micrófono",
        descripcion: "Audífonos gaming con micrófono retráctil y sonido envolvente",
        precio: "$79.99",
        categoria: "audifonos",
        imagen: "../Img/audifonosconmicro.webp"
    },
    {
        id: 7,
        nombre: "Teclado Compacto",
        descripcion: "Teclado mecánico compacto 60% para ahorrar espacio",
        precio: "$75.99",
        categoria: "teclados",
        imagen: "../Img/tecladocompacto.jpg"
    },
    {
        id: 8,
        nombre: "Ratón Ergonómico",
        descripcion: "Ratón diseñado para comodidad durante largas sesiones",
        precio: "$39.99",
        categoria: "ratones",
        imagen: "../Img/ratonergonomico.jpg"
    }
];

// Función para mostrar productos
function mostrarProductos(categoria = 'todos') {
    const contenedor = document.getElementById('contenedor-productos');
    contenedor.innerHTML = '';

    const productosFiltrados = categoria === 'todos'
        ? productos
        : productos.filter(producto => producto.categoria === categoria);

    if (productosFiltrados.length === 0) {
        contenedor.innerHTML = '<p class="texto-sin-productos">No hay productos en esta categoría.</p>';
        return;
    }

    productosFiltrados.forEach(producto => {
        const tarjetaProducto = document.createElement('div');
        tarjetaProducto.className = 'tarjeta-producto';
        tarjetaProducto.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" class="imagen-producto">
            <div class="contenido-producto">
                <h3 class="nombre-producto">${producto.nombre}</h3>
                <p class="descripcion-producto">${producto.descripcion}</p>
                <p class="precio-producto">${producto.precio}</p>
            </div>
        `;
        contenedor.appendChild(tarjetaProducto);
    });
}

// Configurar filtros
document.addEventListener('DOMContentLoaded', function() {
    // Mostrar todos los productos al cargar la página
    mostrarProductos();

    // Configurar filtros
    const botonesFiltro = document.querySelectorAll('.boton-filtro');
    botonesFiltro.forEach(boton => {
        boton.addEventListener('click', function() {
            // Quitar clase activa de todos los botones
            botonesFiltro.forEach(b => b.classList.remove('activo'));
            // Agregar clase activa al botón clickeado
            this.classList.add('activo');
            // Filtrar productos
            const categoria = this.getAttribute('data-categoria');
            mostrarProductos(categoria);
        });
    });
});