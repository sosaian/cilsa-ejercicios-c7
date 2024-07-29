import { averiguarSeccionActual } from "../script.js";
import { crearSeccionCategoria } from "../secciones/seccionCategoria.js";
import { crearProductos } from "./crearProductos.js";


export function crearCategorias(datos, container) {

    const data = Object.keys(datos);

    // Itera sobre las claves del objeto `datos`, que representan las categorías
    data.forEach(categoria => {
        const categoriaDiv = document.createElement('div');
        categoriaDiv.className = 'categoria w-100 d-flex flex-column justify-content-between gap-2';
        categoriaDiv.innerHTML = `
            <div class="h-10 d-flex align-items-center justify-content-between">
                <h4>${categoria.charAt(0).toUpperCase() + categoria.slice(1)}</h4>
                <button type="button" class="btnVerProductos d-flex align-items-center justify-content-between bg-transparent py-2 px-0" data-category="${categoria}">
                    Ver todo
                    <i class="fa-solid fa-arrow-right d-flex align-items-center iconoFlecha"></i>
                </button>
            </div>
        `;

        // Crear un contenedor para los productos de esta categoría
        const productosCategoria = document.createElement("div");
        productosCategoria.className = "productosCategoria";

        // Usa la función `crearProductos` para agregar productos al contenedor
        crearProductos(datos[categoria].slice(0, 6), productosCategoria);
        
        categoriaDiv.appendChild(productosCategoria);
        container.appendChild(categoriaDiv);
        
        const btnVerProductos = categoriaDiv.querySelector('.btnVerProductos');
        const contenedorCategoria = document.querySelector(".seccionCategoria");

        btnVerProductos.addEventListener('click', function() {
            const categoriaAsociada = this.getAttribute('data-category');
            const productosAsociados = datos[categoriaAsociada];

            
            const seccionActual = averiguarSeccionActual();
            seccionActual.setAttribute("data-visible", "false");
            contenedorCategoria.setAttribute("data-visible", "true");

            crearSeccionCategoria(categoriaAsociada, productosAsociados, contenedorCategoria, seccionActual);
        });
    });
}

