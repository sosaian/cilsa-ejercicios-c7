import { crearProductos } from "../servicios/crearProductos.js";
import { averiguarSeccionActual} from "../script.js";

export function crearSeccionCategoria(categoria, productos, container, pantallaAnterior){
    const categoriaTools = document.createElement("div");
    categoriaTools.className = "d-flex justify-content-between align-items-center w-100";    
    categoriaTools.innerHTML = `
    <button class="btnVolver volverDeCategoria d-flex align-items-center justify-content-between bg-transparent py-2 px-0">
                    <i class="fa-solid fa-arrow-right fa-rotate-180 d-flex align-items-center iconoFlecha"></i>
                    <span class="textoBtnVolver">Volver</span>
                </button>
                <h2 class="tituloCategoria">${categoria.charAt(0).toUpperCase() + categoria.slice(1)}</h2>
                <select class="h-100 filtros">
                    <option selected="">Ordenar por: </option>
                    <option value="menor precio">Menor Precio</option>
                    <option value="mayor precio">Mayor Precio</option>
                </select>`
    
    const contenedorProductos = document.createElement("div");

    contenedorProductos.className = "productosCategoria";

    crearProductos(productos, contenedorProductos);

    container.innerHTML = "";
    container.appendChild(categoriaTools);
    container.appendChild(contenedorProductos);

    const btnVolver = categoriaTools.querySelector(".btnVolver");
    btnVolver.addEventListener("click", () => {
        const seccionActual = averiguarSeccionActual();

        seccionActual.setAttribute("data-visible", "false");
        pantallaAnterior.setAttribute("data-visible", "true");
    });
    
    console.log(productos); // Verifica que este array no esté vacío y tenga datos correctos
crearProductos(productos, contenedorProductos);
}
