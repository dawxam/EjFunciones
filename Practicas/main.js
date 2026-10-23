const obtenerPalabras = () => {
    const palabras = [];
    let entrada;

    while (true) {
        entrada = prompt("Introduce una palabra (dejalo vacio o cancela para terminar):");
        if (entrada === null || entrada.trim() === "") {
        break;
        }
        palabras.push(entrada.trim());
    }

    return palabras;
};

const procesarPalabras = (palabras) => {
    const unicas = [...new Set(palabras)];
    return unicas.sort((a, b) => b.localeCompare(a, 'es'));
};

const contarPalabras = (palabras) => {
    const mapa = new Map();
    palabras.forEach(palabra => {
        mapa.set(palabra, (mapa.get(palabra) || 0) + 1);
    });
    return mapa;
};

const ejecutarEjercicio1 = () => {
    const listaOriginal = obtenerPalabras();
    const listaProcesada = procesarPalabras(listaOriginal);

    document.getElementById("resultado").innerHTML = 
        `<p><strong>Palabras ordenadas (de Z a A sin repetidas):</strong> ${listaProcesada.join(", ")}</p>`;
};

const ejecutarEjercicio2 = () => {
    const listaPalabras = obtenerPalabras();
    const frecuencias = contarPalabras(listaPalabras);

    let html = "<ul>";
    frecuencias.forEach((cantidad, palabra) => {
        html += `<li><strong>${palabra}:</strong> ${cantidad} vez/veces</li>`;
    });
    html += "</ul>";

    document.getElementById("resultado").innerHTML = html;
};