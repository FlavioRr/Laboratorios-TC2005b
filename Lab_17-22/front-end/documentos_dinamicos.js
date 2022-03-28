function generar_imagen(ruta, alt) {
    return '<img src="' + ruta + '" alt="'+ alt + '">';
}

function mostrar_super_lupe() {
    let div_imagen = document.getElementById("imagen");
    let ruta_imagen = "https://cdn.shopify.com/s/files/1/0365/9884/1484/products/SuperLupe_720x720.png";
    let alt_imagen = "Imagen de una cerveza Súper Lupe";
    
    div_imagen.innerHTML = generar_imagen(ruta_imagen, alt_imagen);
}

document.getElementById("republica").onclick = () => {
    let div_imagen = document.getElementById("imagen");
    let ruta_imagen = "https://cdn.shopify.com/s/files/1/0365/9884/1484/products/Republica_720x720.png";
    let alt_imagen = "Imagen de una cerveza República";
    
    div_imagen.innerHTML = generar_imagen(ruta_imagen, alt_imagen);
}

function limpiar_imagen() {
    document.getElementById("imagen").innerHTML = "";
    div_macanuda.onclick = mostrar_macanuda;
}

function mostrar_macanuda() {
    let div_imagen = document.getElementById("imagen");
    let ruta_imagen = "https://cdn.shopify.com/s/files/1/0365/9884/1484/products/Macanuda_720x720.png";
    let alt_imagen = "Imagen de una cerveza Macanuda";
    
    div_imagen.innerHTML = generar_imagen(ruta_imagen, alt_imagen);
    div_macanuda.onclick = limpiar_imagen;
}

let div_macanuda = document.getElementById("macanuda");
div_macanuda.onclick = mostrar_macanuda;

document.getElementById("favorita").onkeyup = () => {
    document.getElementById("respuesta_favorita").innerHTML = "Acompaña tu " + document.getElementById("favorita").value + " con una manzana";
}