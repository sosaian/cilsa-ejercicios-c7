import { crearProductos } from "../servicios/crearProductos.js";
import { cargarProductos } from "../servicios/async_mock.js";
import { crearCategorias } from "../servicios/crearCategorias.js";



export function crearSeccionDestacados(){
    cargarProductos().then(datos => {
        if (datos) {    
            const contenedorDestacados = document.querySelector(".destacadosContainer");
            crearProductos(datos, contenedorDestacados);
        }
    }).catch(error => {
        console.error("Error al manejar los datos:", error);
    });
}

export function crearSeccionCategorias(){
    cargarProductos().then(datos => {
        if (datos) {    
            const categorias = new Set(datos.map(producto => producto.categoria));

            const productosPorCategoria = {};

            categorias.forEach(categoria => {
                productosPorCategoria[categoria] = datos.filter(producto => producto.categoria === categoria);
            })

            const seccionCategorias = document.querySelector(".seccionCategorias");

            crearCategorias(productosPorCategoria, seccionCategorias);
            
        }
    }).catch(error => {
        console.error("Error al manejar los datos:", error);
    });
}


