// Importamos la función 'solicitud' desde el archivo 'solicitud.js'
import solicitud from "./solicitud.js"; 

// Exportamos una función asincrónica llamada 'getUsuarios' que obtiene usuarios desde una URL
export const getUsuarios = async (URL, id) => { 
    // Definimos una variable 'ruta' para construir la URL de la solicitud
    let ruta = ""; 
    
    // Verificamos si se proporcionó un ID de usuario
    if (id) { 
        // Si hay un ID, construimos la URL para obtener un usuario específico
        ruta = `${URL}/users?id=${id}`; 
    } else { 
        // Si no hay un ID, construimos la URL para obtener todos los usuarios
        ruta = `${URL}/users`; 
    } 
  
    // Realizamos la solicitud a la API utilizando la función 'solicitud'
    const usuarios = await solicitud(ruta); 
    
    // Retornamos los datos de los usuarios obtenidos
    return usuarios; 
};