function validateEmail(email)
{
    /*
        Es importante tener en cuenta que no cubre todos los casos posibles y específicos definidos por los estándares de correos electrónicos (RFC 5322), pero es adecuado para la mayoría de los propósitos comunes.
    */

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    
    /* 
        Desglose de la Expresión Regular
            ^: Comienzo de la línea.
            [^\s@]+: Uno o más caracteres que no son espacios en blanco ni '@'.
            @: Exactamente un símbolo '@'.
            [^\s@]+: Uno o más caracteres que no son espacios en blanco ni '@'.
            \.: Exactamente un punto '.'.
            [^\s@]+: Uno o más caracteres que no son espacios en blanco ni '@'.
            $: Fin de la línea.
    */

    return regex.test(email)
}

function validateName(name) {
    const regex = /^[a-zA-ZÀ-ÿ\s]{2,15}$/
    
    /* 
        Desglose de la Expresión Regular
        Mínimo de 2 caracteres
        Máximo de 15 caracteres
        Puede contener letras, espacios y puede llevar acentos.       
    */
           
    return regex.test(name)
}

const TODAY = new Date().toISOString().split('T')[0] // Obtengo la fecha actual en formato "YYYY-MM-DD"

function validateDate(date) {
    const regex = /^(\d{4})-(\d{2})-(\d{2})$/
    
    /* 
        Desglose de la Expresión Regular
            4 caracteres (YYYY) seguido de un guión (-)
            2 caracteres (MM) seguido de un guión (-)
            2 caracteres (DD) 
    */

    const MATCH = date.match(regex) // Me aseguro que la fecha cumpla con el formato YYYY-MM-DD
                                    // (Gracias al date-picker HTML debería ser siempre el caso...)
    if (!MATCH)
        return false

    const [_, YEAR, MONTH, DAY] = MATCH.map(Number) // Usando "Number" convierto los strings en números.

    if (YEAR < 0 || YEAR > TODAY.split('-')[0])     // Si el año ingresado es más grande que el actual
        return false                                // devuelve 'false' directamente.
    
    if (MONTH < 1 || MONTH > 12)
        return false
    
    const LEAP_YEAR = YEAR % 4 === 0 && (YEAR % 100 !== 0 || YEAR % 400 === 0)
    
    const DAYS_IN_MONTH = [31, LEAP_YEAR ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    
    if (DAY < 1 || DAY > DAYS_IN_MONTH[MONTH - 1])
        return false

    if (date > TODAY) // Valido que la fecha ingresada no esté en el futuro...
        return false

    return true
}

function checkForm() {
    const NAME = document.getElementById("formName")
    const SURNAME = document.getElementById("formSurname")
    const EMAIL = document.getElementById("formEmail")
    const DATE_OF_BIRTH = document.getElementById("formDateOfBirth")
    const COUNTRY_OF_RESIDENCE = document.getElementById("formCountryOfResidence")

    //  Intencionalmente evito un early return para avisar al usuario de todos
    //  los errores al mismo tiempo en lugar del primero que se encuentre.

    //  Además, incluyo una condición extra para devolver error sii el campo
    //  en cuestión es obligatorio en el formulario (el atributo 'required')

    let ERROR = "¡UPS! Parece que los siguientes campos no tienen información válida:\n"

    if (!validateName(NAME.value.trim()) && NAME.required)
        ERROR = ERROR.concat("\n* El campo 'Nombre' debe tener entre 2 y 15 caracteres; letras, espacios y acentos.")
    
    if (!validateName(SURNAME.value.trim()) && SURNAME.required)
        ERROR = ERROR.concat("\n* El campo 'Apellido' debe tener entre 2 y 15 caracteres; letras, espacios y acentos.")
    
    if (!validateEmail(EMAIL.value.trim()) && EMAIL.required)
        ERROR = ERROR.concat("\n* El campo 'Correo electrónico' debe tener un email válido.")

    if (!validateDate(DATE_OF_BIRTH.value) && DATE_OF_BIRTH.required)
        ERROR = ERROR.concat("\n* El campo 'Fecha de nacimiento' necesita una fecha en el pasado válida.")
    
    if (COUNTRY_OF_RESIDENCE.value === "" && COUNTRY_OF_RESIDENCE.required)
        ERROR = ERROR.concat("\n* El campo 'País de residencia' necesita algún país indicado.")

    if (ERROR === "¡UPS! Parece que los siguientes campos no tienen información válida:\n")
    {
        alert("FORMULARIO ENVIADO CORRECTAMENTE!")
        location.reload()
        return
    }

    alert(ERROR)    // Capaz pueda usarse un modal de bootstrap en lugar de esto?
}

function cambiarModo(modo) {
    document.body.setAttribute("data-bs-theme", modo)
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("formDateOfBirth").setAttribute('max', TODAY)

    const SUBMIT_BUTTON = document.getElementById("formSubmit")

    SUBMIT_BUTTON.addEventListener("click", (event) => {
        event.preventDefault()
        checkForm()
    })

    const modoActual = localStorage.getItem("colorMode") || "light"
    cambiarModo(modoActual)

    const TOGGLE_BUTTONS = document.querySelectorAll(".toggle-mode-btn")
    const MODE_ICON_DESKTOP = document.getElementById("mode-icon-desktop")
    const MODE_ICON_MOBILE = document.getElementById("mode-icon-mobile")
    const LOGO = document.querySelector(".uno-nav") // Selecciona el logo

    // Función para actualizar el logo y los íconos de modo
    function actualizarImagenes(modo) {
        const timestamp = new Date().getTime() // Parámetro único para evitar caché

        const isLightMode = modo === "light"
        const iconSrc = isLightMode ? "../img/luna.png" : "../img/sol.png"
        const logoSrc = isLightMode ? "../img/uno.png" : "../img/uno-b.png"
        const toggleClassMethod = isLightMode ? "remove" : "add"

        MODE_ICON_DESKTOP.setAttribute("src", `${iconSrc}?${timestamp}`)
        MODE_ICON_MOBILE.setAttribute("src", `${iconSrc}?${timestamp}`)
        LOGO.setAttribute("src", `${logoSrc}?${timestamp}`)
        TOGGLE_BUTTONS.forEach(button => button.classList[toggleClassMethod]("dark"))
    }

    // Actualiza las imágenes al cargar la página
    actualizarImagenes(modoActual)

    TOGGLE_BUTTONS.forEach(button => button.addEventListener("click", () => {
        const isLightMode = document.body.getAttribute("data-bs-theme") === "light"
        const newMode = isLightMode ? "dark" : "light"

        cambiarModo(newMode)
        localStorage.setItem("colorMode", newMode)

        actualizarImagenes(newMode)
    }))
})