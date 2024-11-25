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



