// Importamos la función 'solicitud' desde el archivo 'solicitud.js'
import solicitud from "./solicitud.js"; 
// Exportamos una función asincrónica llamada 'getPhotos' que obtiene las fotos de un álbum
export const getPhotos = async (URL, album) => { 
    // Realizamos una solicitud a la API para obtener las fotos del álbum específico
    return await solicitud(`${URL}/photos?albumId=${album.id}`);  
};