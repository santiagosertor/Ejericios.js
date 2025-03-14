// Importamos la función 'solicitud' desde el archivo 'solicitud.js'
import solicitud from "./solicitud.js"; 
// Exportamos una función asincrónica llamada 'getAlbums' que obtiene los álbumes de un usuario
export const getAlbums = async (URL, usuario) => { 
    // Realizamos una solicitud a la API para obtener los álbumes del usuario específico
    return await solicitud(`${URL}/albums?userId=${usuario.id}`);  
};