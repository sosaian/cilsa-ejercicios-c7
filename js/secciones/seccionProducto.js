export function crearSeccionProducto(producto, container, pantallaAnterior) {
    // Crear elementos
    const bloqueIzquierda = document.createElement("div");
    bloqueIzquierda.className = "bloqueIzquierda d-flex flex-column align-items-start justify-content-start gap-4";
    bloqueIzquierda.innerHTML = `
        <button class="btnVolver d-flex justify-content-between align-items-center bg-transparent p-0">
            <i class="fa-solid fa-arrow-right fa-rotate-180 d-flex justify-content-between align-items-center h-100"></i>
            <span class="textoBtnVolver">Volver</span>
        </button>
        <div class="bloqueImagenes w-100 d-flex flex-column align-items-start justify-content-start">
            <img class="img1 img-active w-100 object-fit-cover ratio ratio-1x1 rounded-3" src="${producto.imagen}">
        </div>`;

    const divImgGrande = document.createElement("div");
    divImgGrande.className = "divImgGrande h-100 d-flex align-items-center justify-content-center";
    divImgGrande.innerHTML = `
        <img class="imgGrande h-100 w-100 object-fit-cover ratio ratio-1x1 p-2 rounded-4" src="${producto.imagen}">`;

    const detallesProducto = document.createElement("div");
    detallesProducto.className = "detallesProducto h-100 d-flex flex-column justify-content-between text-center p-3 bg-body-tertiary rounded-3";
    detallesProducto.innerHTML = `
        <p class="nombreProducto fw-bold">${producto.nombre}</p>
        <p class="descripcionProducto d-flex w-100 text-left align-items-left">${producto.descripcion}</p>
        <div class="infoProducto d-flex flex-column justify-content-center gap-4">
            <div class="divStockCantidad d-flex align-items-center justify-content-around">
                <span class="cantidadProducto d-flex align-items-center justify-content-around h-100 p-2">
                    <i class="fa-solid fa-minus iconoMenos h-100"></i> 
                    <p class="textCantidadProducto h-100">1</p>
                    <i class="fa-solid fa-plus iconoMas h-100"></i>
                </span>
                <p class="stockProducto text-left">Stock disponible: ${producto.id} u</p>
            </div>
            <div class="divPrecioCarrito d-flex justify-content-around align-items-center w-100">
                <h3 class="precioProducto m-0">${producto.precio}</h3>
                <button type="button" class="botonCarrito d-flex justify-content-around bg-body-tertiary rounded-3 p-3 border">
                    Agregar al carrito
                    <i class="fa-solid fa-cart-shopping"></i>
                </button>
            </div>
        </div>
        <p class="totalProducto mt-3">Total: $<h3 id="totalProducto">7.900</h3></p>`;

    // Limpiar y agregar elementos al contenedor
    container.innerHTML = "";
    container.append(bloqueIzquierda, divImgGrande, detallesProducto);

    // Seleccionar elementos
    const iconoMas = detallesProducto.querySelector(".iconoMas");
    const iconoMenos = detallesProducto.querySelector(".iconoMenos");
    const btnVolver = bloqueIzquierda.querySelector(".btnVolver");
    const cantidadProducto = detallesProducto.querySelector(".textCantidadProducto");
    const precioProducto = parseFloat(detallesProducto.querySelector(".precioProducto").textContent.replace('$', '').replace('.', ''));
    const totalProducto = detallesProducto.querySelector("#totalProducto");

    // Función para formatear el monto
    function formatearMonto(monto) {
        return monto.toLocaleString('es-AR'); // Formatea el monto con separadores de miles
    }

    // Función para actualizar el total
    function actualizarTotal() {
        const cantidad = parseInt(cantidadProducto.textContent, 10) || 0;
        const total = cantidad * precioProducto;
        totalProducto.textContent = formatearMonto(total);
    }

    // Manejo de eventos
    iconoMas.addEventListener("click", () => {
        let cantidad = parseInt(cantidadProducto.textContent, 10);
        if (cantidad < producto.id) {
            cantidadProducto.textContent = ++cantidad;
            actualizarTotal();
        }
    });

    iconoMenos.addEventListener("click", () => {
        let cantidad = parseInt(cantidadProducto.textContent, 10);
        if (cantidad > 1) {
            cantidadProducto.textContent = --cantidad;
            actualizarTotal();
        }
    });

    btnVolver.addEventListener("click", () => {
        container.setAttribute("data-visible", "false");
        pantallaAnterior.setAttribute("data-visible", "true");
    });

    // Inicializa el total al cargar el producto
    actualizarTotal();
}