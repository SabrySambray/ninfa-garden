// MODULO PARA LAS PLANTAS GENERADAS A PARTIR DE UN API REST
const API_KEY = 'sk-uJnP6744ee10729b17772'; 
const API_URL = 'https://perenual.com/api/species-list?key=' + API_KEY;

function mezclar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

async function obtenerPlantas() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Error al consumir la API');
        const data = await response.json();
        
        // Mezclar las plantas y tomar las primeras 12
        const plantasMezcladas = mezclar(data.data).slice(0, 12);
        mostrarPlantas(plantasMezcladas);
    } catch (error) {
        console.error('Error:', error);
    }
}

function mostrarPlantas(plantas) {
    const contenedor = document.getElementById('plantas-container');
    contenedor.innerHTML = ''; // Limpia el contenido antes de añadir más

    plantas.forEach(planta => {
        const card = document.createElement('div');
        card.className = 'plant-card';

        card.innerHTML = `
            <img src="${planta.default_image?.thumbnail || 'https://via.placeholder.com/300'}" alt="${planta.common_name}">
            <h3>${planta.common_name || 'Nombre desconocido'}</h3>
            <p> Nombre científico: ${planta.scientific_name || ''}</p>
        `;

        contenedor.appendChild(card);
    });
}

// Llama a la función cuando se cargue la página
document.addEventListener('DOMContentLoaded', obtenerPlantas);

// Módulo del catálogo de productos

// Función para crear un array de productos
function crearProductos() {
    return [
        {
            nombre: "Suculenta",
            descripcion: "Una planta resistente y fácil de cuidar, perfecta para interiores y exteriores.",
            imagen: "img/suculenta_bckgrnd.jpg",
            enlace: "c_suculenta.html",
        },
        {
            nombre: "Flores de Temporada",
            descripcion: "Disfruta de colores vibrantes con nuestras flores frescas de temporada.",
            imagen: "img/flores_bckgrnd.jpg",
            enlace: "c_suculenta.html",
        },
        {
            nombre: "Plantas Ornamentales",
            descripcion: "Plantas decorativas que aportan un toque elegante a tu hogar o jardín.",
            imagen: "img/ornamentales_bckgrnd.jpg",
            enlace: "c_suculenta.html",
        },
        {
            nombre: "Cactus",
            descripcion: "Perfectos para ambientes cálidos, fáciles de mantener y hermosos.",
            imagen: "img/cactus.jpg",
            enlace: "c_suculenta.html",
        },
    ];
}

// Función para renderizar los productos en el HTML
function renderizarProductos(productos, contenedorSelector) {
    const contenedor = document.querySelector(contenedorSelector);
    if (!contenedor) {
        console.error(`No se encontró el contenedor con el selector: ${contenedorSelector}`);
        return;
    }

    contenedor.innerHTML = ""; // Limpia el contenido antes de añadir los productos

    productos.forEach((producto) => {
        // Plantilla dinámica de cada producto
        const productoHTML = `
            <div class="planta">
                <img src="${producto.imagen}" alt="${producto.nombre}" class="planta-img">
                <h3>${producto.nombre}</h3>
                <p>${producto.descripcion}</p>
                <a href="${producto.enlace}">
                    <button class="btn-link">Ver más</button>
                </a>
            </div>
        `;
        // Añadir el producto al contenedor
        contenedor.innerHTML += productoHTML;
    });
}

// Inicializar el catálogo en la página
function inicializarCatalogo() {
    const productos = crearProductos();
    renderizarProductos(productos, "#catalogo-main .catalogo-list");
}

// Asegurarse de que el DOM esté cargado antes de inicializar
document.addEventListener("DOMContentLoaded", () => {
    inicializarCatalogo();
});

//FORMULARIO (FUNCIÓN PARA REVISAR SI ESTA COMPLETO)
document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("contacto-formulario");
  
    formulario.addEventListener("submit", (event) => {
      // Obtiene los campos del formulario
      const nombre = document.getElementById("name").value.trim();
      const correo = document.getElementById("email").value.trim();
      const mensaje = document.getElementById("message").value.trim();
  
      // Verifica si todos los campos están completos
      if (nombre === "" || correo === "" || mensaje === "") {
        console.error("Por favor, completa todos los campos antes de enviar el formulario.");
        event.preventDefault(); // Evita que el formulario se envíe
      } else {
        console.log("Formulario enviado correctamente.");
      }
    });
  });
  



