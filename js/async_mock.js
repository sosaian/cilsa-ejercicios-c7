async function cargarProductos() {
    try {
        const response = await fetch("./data/data.json"); // Asegúrate de que la ruta sea correcta

        if (!response.ok) {
            throw new Error(response.status);
        }

        const data = await response.json(); // Convierto la respuesta en array de objetos.

        console.log(data); // Desde esta línea ya se puede manipular el array de objetos.

        // Insertar los productos en el contenedor de destacados
        const destacadosContainer = document.getElementById('destacadosContainer');
        data.forEach(producto => {
            const productoDiv = document.createElement('div');
            productoDiv.className = 'producto d-flex flex-column align-items-center justify-content-between p-1 text-center';
            productoDiv.innerHTML = `
                <div class="imageDiv">
                    <img class="imgProduct h-100 w-100 object-fit-cover" src="${producto.imagen}" alt="${producto.nombre}">
                </div>
                <p class="nombre">${producto.nombre}</p>
                <p class="precio">${producto.precio}</p>
            `;
            destacadosContainer.appendChild(productoDiv);
        });

    } catch (error) {
        console.error("Se produjo un error al cargar los productos:", error.message);
    } finally {
        setTimeout(() => {
            console.log("TERMINÉ :)");
        }, 2000);
    }
}

cargarProductos();

