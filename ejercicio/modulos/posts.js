// Importamos la función 'solicitud' desde el archivo 'solicitud.js'
import solicitud from "./solicitud.js"; 
// Exportamos una función asincrónica llamada 'getPost' que obtiene las publicaciones de un usuario
export const getPost = async (URL, usuario) => { 
    // Realizamos una solicitud a la API para obtener los posts del usuario específico
    return await solicitud(`${URL}/posts?userId=${usuario.id}`);  
};