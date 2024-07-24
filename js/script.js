import { crearProductos } from "./crearProductos.js";
import { cargarProductos } from "./async_mock.js";
import { crearCategorias } from "./crearCategorias.js";

function cambiarModo(modo) {
    $("body").attr("data-bs-theme", modo);
}

$(document).ready(() => {
    
    crearSeccionDestacados();
    crearSeccionCategorias();

    $(window).resize(() => {
        const NAVBAR = $('#navbarTogglerDemo02');
        const SHOULD_COLLAPSE = $(window).width() < 992;
        NAVBAR.toggleClass('collapse navbar-collapse', SHOULD_COLLAPSE);
    }).trigger('resize');

    const modoActual = localStorage.getItem("colorMode") || "light";
    cambiarModo(modoActual);

    const TOGGLE_BUTTON = $("#toggleMode");
    const MODE_ICON = $("#mode-icon");

    // Actualiza el icono y la clase del botón según el modo actual
    if (modoActual === "light") {
        MODE_ICON.attr("src", "img/sol.png");
        TOGGLE_BUTTON.removeClass("dark");
    } else {
        MODE_ICON.attr("src", "img/luna.png");
        TOGGLE_BUTTON.addClass("dark");
    }

    TOGGLE_BUTTON.click(() => {
        const isLightMode = $("body").attr("data-bs-theme") === "light";
        const newMode = isLightMode ? "dark" : "light";

        cambiarModo(newMode);
        localStorage.setItem("colorMode", newMode);

        if (isLightMode) {
            MODE_ICON.attr("src", "img/luna.png");
            TOGGLE_BUTTON.addClass("dark");
        } else {
            MODE_ICON.attr("src", "img/sol.png");
            TOGGLE_BUTTON.removeClass("dark");
        }
    });

    const verProductos = $(".btnVerProductos");

    verProductos.click(()=>{
        alert("holita");
    });
});


function crearSeccionDestacados(){
    cargarProductos().then(datos => {
        if (datos) {
            console.log("Datos recibidos:", datos);
    
            const contenedorDestacados = document.querySelector(".destacadosContainer");
            crearProductos(datos, contenedorDestacados);
        }
    }).catch(error => {
        console.error("Error al manejar los datos:", error);
    });
}

function crearSeccionCategorias(){
    cargarProductos().then(datos => {
        if (datos) {
            console.log("Datos recibidos:", datos);
    
            const categorias = new Set(datos.map(producto => producto.categoria));

            const productosPorCategoria = {};

            categorias.forEach(categoria => {
                productosPorCategoria[categoria] = datos.filter(producto => producto.categoria === categoria);
            })

            console.log(productosPorCategoria);

            const seccionCategorias = document.querySelector(".seccionCategorias");

            crearCategorias(productosPorCategoria, seccionCategorias);
            
        }
    }).catch(error => {
        console.error("Error al manejar los datos:", error);
    });
}