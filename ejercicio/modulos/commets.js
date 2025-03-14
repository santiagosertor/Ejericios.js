// Importamos la función 'solicitud' desde el archivo 'solicitud.js'
import solicitud from "./solicitud.js"; 
// Exportamos una función asincrónica llamada 'getCommets' que obtiene los comentarios de una publicación
export const getCommets = async (URL, post) => { 
    // Realizamos una solicitud a la API para obtener los comentarios del post específico
    return await solicitud(`${URL}/comments?postId=${post.id}`);  
};