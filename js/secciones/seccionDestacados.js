import { crearProductos } from "../servicios/crearProductos.js";
import { cargarProductos } from "../servicios/async_mock.js";
import { crearCategorias } from "../servicios/crearCategorias.js";
import { averiguarSeccionActual } from "../script.js";
import { crearSeccionCategoria } from "./seccionCategoria.js";



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

            const seccionCategorias = document.querySelector(".seccionCategorias");
            const seccionDestacados = document.querySelector(".seccionDestacados");

            crearCategorias(productosPorCategoria, seccionCategorias);

            const cardVerCategoria = document.querySelectorAll(".cardVerCategoria");
            const contenedorCategoria = document.querySelector(".seccionCategoria");
            const verCategorias = document.querySelector(".verCategorias");
            const verInicio = document.querySelector(".verInicio");

            cardVerCategoria.forEach(function(card){
                card.addEventListener('click', function() {
                    const categoriaAsociada = this.getAttribute('data-category');

                    const productosAsociados = productosPorCategoria[categoriaAsociada];
                                        
                    const seccionActual = averiguarSeccionActual();
                    seccionActual.setAttribute("data-visible", "false");
                    contenedorCategoria.setAttribute("data-visible", "true");
                    
                    verCategorias.classList.add("active");
                    verInicio.classList.remove("active");

                    window.scrollTo({ top: 0, behavior: 'smooth' });
        
                    crearSeccionCategoria(categoriaAsociada, productosAsociados, contenedorCategoria, seccionActual);
                });

            })

            const btnVerCategorias = document.querySelectorAll(".btnVerCategorias");
            
            
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


