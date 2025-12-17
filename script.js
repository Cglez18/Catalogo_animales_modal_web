function openModal(nombre, desc, dieta, tipo, peso, medidas, peligro, imagen, habitat, vida, dato) {
    const modal = document.getElementById("animalModal");
    
    // 1. Mostrar Modal
    modal.style.display = "flex";

    // 2. Inyectar Textos Básicos
    document.getElementById("m-nombre").innerText = nombre;
    document.getElementById("m-imagen").src = imagen;

    // 3. Inyectar HTML Complejo (Descripción Larga)
    document.getElementById("m-desc").innerHTML = desc;

    // 4. Inyectar Datos Técnicos
    document.getElementById("m-dieta").innerText = dieta;
    document.getElementById("m-tipo").innerText = tipo;
    document.getElementById("m-peso").innerText = peso;
    document.getElementById("m-medidas").innerText = medidas;
    document.getElementById("m-habitat").innerText = habitat;
    document.getElementById("m-vida").innerText = vida;
    
    // 5. Dato Curioso
    document.getElementById("m-dato").innerText = dato;

    // 6. Estado de Conservación
    const peligroDiv = document.getElementById("m-peligro");
    if (!peligro || peligro === "No" || peligro === "Preocupación Menor") {
        peligroDiv.style.display = "none";
    } else {
        peligroDiv.style.display = "inline-block";
        peligroDiv.innerText = peligro; 
        
        // Cambiar color según gravedad
        if(peligro.includes("Vulnerable")) {
            peligroDiv.style.background = "#f39c12"; // Naranja
        } else if(peligro.includes("Crítico")) {
            peligroDiv.style.background = "#8e44ad"; // Morado
        } else {
            peligroDiv.style.background = "#c0392b"; // Rojo
        }
    }
}

function closeModal() {
    document.getElementById("animalModal").style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("animalModal");
    if (event.target == modal) {
        closeModal();
    }
}