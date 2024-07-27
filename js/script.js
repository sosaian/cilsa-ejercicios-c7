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

    const TOGGLE_BUTTONS = $(".toggle-mode-btn");
    const MODE_ICON_DESKTOP = $("#mode-icon-desktop");
    const MODE_ICON_MOBILE = $("#mode-icon-mobile");

    // Actualiza los iconos según el modo actual
    if (modoActual === "light") {
        MODE_ICON_DESKTOP.attr("src", "img/luna.png");
        MODE_ICON_MOBILE.attr("src", "img/luna.png");
        TOGGLE_BUTTONS.removeClass("dark");
    } else {
        MODE_ICON_DESKTOP.attr("src", "img/sol.png");
        MODE_ICON_MOBILE.attr("src", "img/sol.png");
        TOGGLE_BUTTONS.addClass("dark");
    }

    TOGGLE_BUTTONS.click(() => {
        const isLightMode = $("body").attr("data-bs-theme") === "light";
        const newMode = isLightMode ? "dark" : "light";

        cambiarModo(newMode);
        localStorage.setItem("colorMode", newMode);

        if (isLightMode) {
            MODE_ICON_DESKTOP.attr("src", "img/sol.png");
            MODE_ICON_MOBILE.attr("src", "img/sol.png");
            TOGGLE_BUTTONS.addClass("dark");
        } else {
            MODE_ICON_DESKTOP.attr("src", "img/luna.png");
            MODE_ICON_MOBILE.attr("src", "img/luna.png");
            TOGGLE_BUTTONS.removeClass("dark");
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

