import { averiguarSeccionActual } from "../script.js";
import { crearSeccionProducto } from "../secciones/seccionProducto.js";

export function crearProductos (datos, container){
    datos.forEach(producto => {
        const productoDiv = document.createElement('div');
        productoDiv.className = 'producto d-flex flex-column align-items-center justify-content-between p-1 text-center border';
        productoDiv.innerHTML = `
            <div class="imageDiv">
                <img class="imgProduct h-100 w-100 object-fit-cover" src="${producto.imagen}" alt="${producto.nombre}">
            </div>
            <p class="nombre">${producto.nombre}</p>
            <p class="precio">${producto.precio}</p>
        `;

        const seccionProducto = document.querySelector(".seccionProducto")

        productoDiv.addEventListener('click', () => {
            
            const seccionActual = averiguarSeccionActual();

            crearSeccionProducto(producto, seccionProducto, seccionActual);

            seccionActual.setAttribute("data-visible", "false");
            seccionProducto.setAttribute("data-visible", "true");

        });

        container.appendChild(productoDiv);
    });
}