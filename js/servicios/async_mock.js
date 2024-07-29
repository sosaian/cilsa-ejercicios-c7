export async function cargarProductos() {
    try {

        const response = await fetch("../data/data.json")   // Intento obtener el JSON de productos.
        
        // Verifico si la respuesta es exitosa (código de estado en el rango 200-299)
        
        if (!response.ok) {
            throw new Error(response.status)
        }
        
        const data = await response.json()  // Convierto la respuesta en array de objetos.

        return data;

    } catch (error) {

        console.error("Se produjo un error al cargar los productos:", error.message)
    
    }
}
