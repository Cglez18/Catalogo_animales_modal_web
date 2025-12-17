/* script.js - ZooMundo
  Controla la lógica del Modal (Ventana emergente)
*/

// Función principal para abrir el modal con los datos del animal
function openModal(nombre, descripcion, dieta, tipo, peso, medidas, peligro, imagen) {
    
    // 1. Obtenemos el modal y los elementos internos
    const modal = document.getElementById('animalModal');
    
    // 2. Insertamos la información en el HTML
    document.getElementById('m-nombre').textContent = nombre;
    document.getElementById('m-desc').textContent = descripcion;
    document.getElementById('m-dieta').textContent = dieta;
    document.getElementById('m-tipo').textContent = tipo;
    document.getElementById('m-peso').textContent = peso;
    document.getElementById('m-medidas').textContent = medidas;
    
    // Insertar la imagen
    document.getElementById('m-imagen').src = imagen;

    // 3. Lógica para la alerta de extinción
    const dangerBox = document.getElementById('m-peligro');
    
    // Si la variable peligro es "No" o nula, ocultamos la caja roja
    if (!peligro || peligro === "No" || peligro === "no") {
        dangerBox.style.display = 'none';
    } else {
        // Si hay peligro, mostramos la caja con el mensaje
        dangerBox.style.display = 'block';
        dangerBox.innerHTML = "⚠️ Estatus: " + peligro;
    }

    // 4. Cambiamos el estilo para mostrar la ventana (Flexbox para centrar)
    modal.style.display = 'flex';
}

// Función para cerrar el modal al dar click en la "X"
function closeModal() {
    const modal = document.getElementById('animalModal');
    modal.style.display = 'none';
}

// Función para cerrar el modal si se da click fuera de la tarjeta blanca
window.onclick = function(event) {
    const modal = document.getElementById('animalModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// (Opcional) Scroll suave para los enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});