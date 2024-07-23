async function cargarProductos() {
    try {

        const response = await fetch("../data/data.json")   // Intento obtener el JSON de productos.
        
        // Verifico si la respuesta es exitosa (código de estado en el rango 200-299)
        
        if (!response.ok) {
            throw new Error(response.status)
        }
        
        const data = await response.json()  // Convierto la respuesta en array de objetos.

        console.log(data)   // Desde esta línea ya se puede manipular el array de objetos.

    } catch (error) {

        console.error("Se produjo un error al cargar los productos:", error.message)
    
    } finally {

        // (Opcional) Haya o no obtenido el JSON de productos, ejecuto este código.

        setTimeout(() => {
            console.log("TERMINÉ :)")
        }, 2000);
    
    }
}

cargarProductos()