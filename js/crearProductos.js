export function crearProductos (datos, container){
    datos.forEach(producto => {
        const productoDiv = document.createElement('div');
        productoDiv.className = 'producto d-flex flex-column align-items-center justify-content-between p-1 text-center';
        productoDiv.innerHTML = `
            <div class="imageDiv">
                <img class="imgProduct h-100 w-100 object-fit-cover" src="${producto.imagen}" alt="${producto.nombre}">
            </div>
            <p class="nombre">${producto.nombre}</p>
            <p class="precio">${producto.precio}</p>
        `;
        container.appendChild(productoDiv);
    });
}