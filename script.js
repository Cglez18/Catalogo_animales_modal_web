function openModal(nombre, desc, dieta, tipo, peso, medidas, peligro, imagen, habitat, vida, dato) {
    const modal = document.getElementById("animalModal");
    
    //Mostrar Modal
    modal.style.display = "flex";

    //Inyectar Textos Básicos
    document.getElementById("m-nombre").innerText = nombre;
    document.getElementById("m-imagen").src = imagen;

    //Inyectar HTML Complejo (Descripción Larga)
    document.getElementById("m-desc").innerHTML = desc;

    //Inyectar Datos Técnicos
    document.getElementById("m-dieta").innerText = dieta;
    document.getElementById("m-tipo").innerText = tipo;
    document.getElementById("m-peso").innerText = peso;
    document.getElementById("m-medidas").innerText = medidas;
    document.getElementById("m-habitat").innerText = habitat;
    document.getElementById("m-vida").innerText = vida;
    
    //Dato Curioso
    document.getElementById("m-dato").innerText = dato;

    //Estado de Conservación
    const peligroDiv = document.getElementById("m-peligro");

    if (!peligro || peligro === "No") {
        peligroDiv.style.display = "none";
    } else {
        peligroDiv.style.display = "inline-block";
        peligroDiv.innerText = peligro;
    
        const p = peligro.toLowerCase();

        peligroDiv.style.color = "#fff"; 

        if (p.includes("en peligro crítico") || p.includes("en peligro Critico")) {
            peligroDiv.style.background = "#641E16"; 
            
        } else if (p.includes("en peligro")) {
            peligroDiv.style.background = "#c0392b"; 
            
        } else if (p.includes("vulnerable")) {
            peligroDiv.style.background = "#e67e22"; 
            
        } else if (p.includes("casi amenazada") || p.includes("casi amenazado")) {
            peligroDiv.style.background = "#f1c40f"; 
            peligroDiv.style.color = "#333";
            
        } else if (p.includes("preocupación menor")) {
            peligroDiv.style.background = "#27ae60"; 
            
        } else {
            // Otros casos
            peligroDiv.style.background = "#7f8c8d";
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