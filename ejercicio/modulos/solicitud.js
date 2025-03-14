// Definimos una función asincrónica llamada 'solicitud' que recibe una URL como parámetro
const solicitud = async (url) => { 
    // Realizamos una petición HTTP a la URL proporcionada usando 'fetch'
    const peticion = await fetch(url); 
    // Convertimos la respuesta de la petición en formato JSON
    const data = await peticion.json(); 
    // Retornamos los datos obtenidos
    return data; 
}; 
// Exportamos la función 'solicitud' como el valor por defecto del módulo
export default solicitud;  