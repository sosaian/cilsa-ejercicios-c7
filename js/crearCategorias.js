import { crearProductos } from "./crearProductos.js";


export function crearCategorias(datos, container) {

    // Itera sobre las claves del objeto `datos`, que representan las categorías
    Object.keys(datos).forEach(categoria => {
        const categoriaDiv = document.createElement('div');
        categoriaDiv.className = 'categoria w-100 d-flex flex-column justify-content-between gap-2';
        categoriaDiv.innerHTML = `
            <div class="h-10 d-flex align-items-center justify-content-between">
                <h4>${categoria.charAt(0).toUpperCase() + categoria.slice(1)}</h4>
                <button type="button" class="btnVerProductos d-flex align-items-center justify-content-between bg-transparent">
                    Ver todo
                    <i class="fa-solid fa-arrow-right iconoFlecha"></i>
                </button>
            </div>
        `;

        // Crear un contenedor para los productos de esta categoría
        const productosCategoria = document.createElement("div");
        productosCategoria.className = "productosCategoria";

        // Usa la función `crearProductos` para agregar productos al contenedor
        crearProductos(datos[categoria], productosCategoria);
        
        container.appendChild(categoriaDiv);
        container.appendChild(productosCategoria);
    });
}