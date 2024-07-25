import { crearSeccionDestacados } from "./secciones/seccionDestacados.js";
import { crearSeccionCategorias } from "./secciones/seccionDestacados.js";

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
