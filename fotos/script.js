// Lista de fotos (coloca los nombres de las imágenes aquí)
const fotos = [
    "fotos/Imagen1.jpg",
    "fotos/Imagen2.jpg",
    "fotos/Imagen3.jpg",
    // Agrega más fotos aquí
];

let indiceFoto = 0;
const pastel = document.getElementById("pastel");
const textoCumple = document.getElementById("textoCumple");
const galeria = document.getElementById("galeria");
const mensajeFinal = document.getElementById("mensajeFinal");
const fotoActual = document.getElementById("fotoActual");

// Paso 1: mostrar pastel y después texto
setTimeout(() => {
    pastel.style.display = "none";
    textoCumple.classList.remove("oculto");

    // Paso 2: después de 3s, iniciar galería
    setTimeout(() => {
        textoCumple.style.display = "none";
        galeria.classList.remove("oculto");
        mostrarFoto();
    }, 3000);
}, 3000);

function mostrarFoto() {
    fotoActual.src = fotos[indiceFoto];
    fotoActual.style.opacity = 1;

    setTimeout(() => {
        fotoActual.style.opacity = 0;
        indiceFoto++;

        if (indiceFoto < fotos.length) {
            setTimeout(mostrarFoto, 1000);
        } else {
            setTimeout(() => {
                galeria.style.display = "none";
                mensajeFinal.classList.remove("oculto");
            }, 1000);
        }
    }, 3000); // 3 segundos por foto
}
