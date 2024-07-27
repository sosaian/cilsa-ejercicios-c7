import { crearContenedorCategorias, crearContenedorDestacados } from "./secciones/seccionDestacados.js";

function cambiarModo(modo) {
    $("body").attr("data-bs-theme", modo);
}

$(document).ready(() => {
    
    crearContenedorDestacados();
    crearContenedorCategorias();

    $(window).resize(() => {
        const NAVBAR = $('#navbarTogglerDemo02');
        const SHOULD_COLLAPSE = $(window).width() < 992;
        NAVBAR.toggleClass('collapse navbar-collapse', SHOULD_COLLAPSE);
    }).trigger('resize');

    const modoActual = localStorage.getItem("colorMode") || "light";
    cambiarModo(modoActual);

    const TOGGLE_BUTTONS = $(".toggle-mode-btn");
    const MODE_ICON_DESKTOP = $("#mode-icon-desktop");
    const MODE_ICON_MOBILE = $("#mode-icon-mobile");
    const LOGO = $(".uno-nav"); // Selecciona el logo

    // Función para actualizar el logo y los íconos de modo
    function actualizarImagenes(modo) {
        const timestamp = new Date().getTime(); // Parámetro único para evitar caché
        if (modo === "light") {
            MODE_ICON_DESKTOP.attr("src", `img/luna.png?${timestamp}`);
            MODE_ICON_MOBILE.attr("src", `img/luna.png?${timestamp}`);
            LOGO.attr("src", `img/uno.png?${timestamp}`);
            TOGGLE_BUTTONS.removeClass("dark");
        } else {
            MODE_ICON_DESKTOP.attr("src", `img/sol.png?${timestamp}`);
            MODE_ICON_MOBILE.attr("src", `img/sol.png?${timestamp}`);
            LOGO.attr("src", `img/uno-b.png?${timestamp}`);
            TOGGLE_BUTTONS.addClass("dark");
        }
    }

    // Actualiza las imágenes al cargar la página
    actualizarImagenes(modoActual);

    TOGGLE_BUTTONS.click(() => {
        const isLightMode = $("body").attr("data-bs-theme") === "light";
        const newMode = isLightMode ? "dark" : "light";

        cambiarModo(newMode);
        localStorage.setItem("colorMode", newMode);

        actualizarImagenes(newMode);
    });

});

export function averiguarSeccionActual(){

    const listaSecciones = document.querySelectorAll(".seccion");

    let sectionVisible = null;

    listaSecciones.forEach((seccion) => {
        const seccionActual = window.getComputedStyle(seccion);

        if (seccionActual.display !== 'none') {
            sectionVisible = seccion;
        }
    });

    return sectionVisible;
}

