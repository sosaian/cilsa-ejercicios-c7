import { crearProductos } from "../servicios/crearProductos.js";
import { cargarProductos } from "../servicios/async_mock.js";
import { crearCategorias } from "../servicios/crearCategorias.js";



export function crearContenedorDestacados(){
    cargarProductos().then(datos => {
        if (datos) {    
            const contenedorDestacados = document.querySelector(".productosDestacados");

            const productosDestacados = datos.slice(0, 6);

            crearProductos(productosDestacados, contenedorDestacados);
        }
    }).catch(error => {
        console.error("Error al manejar los datos:", error);
    });
}

export function crearContenedorCategorias(){
    cargarProductos().then(datos => {
        if (datos) {    
            const categorias = new Set(datos.map(productos => productos.categoria));

            const productosPorCategoria = {};


            categorias.forEach(categoria => {
                productosPorCategoria[categoria] = datos.filter(producto => producto.categoria === categoria);
            })

            const contenedorCategorias = document.querySelector(".categoriasContainer");
            const seccionCategorias = document.querySelector(".seccionCategorias");
            const seccionDestacados = document.querySelector(".seccionDestacados");

            crearCategorias(productosPorCategoria, seccionCategorias);


            const btnVerCategorias = document.querySelectorAll(".btnVerCategorias");
            const verCategorias = document.querySelector(".verCategorias");
            const verInicio = document.querySelector(".verInicio");

            
            btnVerCategorias.forEach(btn => {
                btn.addEventListener("click", function() {
                    seccionDestacados.setAttribute("data-visible", "false");
                    seccionCategorias.setAttribute("data-visible", "true");

                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    verCategorias.classList.add("active");
                    verInicio.classList.remove("active");
                });
            });
        }
    }).catch(error => {
        console.error("Error al manejar los datos:", error);
    });
}


