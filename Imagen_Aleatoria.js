const changeImagenButton = document.getElementById("change-imagen-button")

changeImagenButton.addEventListener("click", () => {
    let imagenes = [
        "img/imagen1.webp",
        "img/imagen2.webp",
        "img/imagen3.webp"
    ]

    const numeroAleatorio = Math.floor(Math.random() * imagenes.length)
    document.getElementById("img").src = imagenes[numeroAleatorio]
})