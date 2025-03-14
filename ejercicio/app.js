// Importamos las funciones necesarias desde los módulos correspondientes
import { getUsuarios, getPost, getCommets, getAlbums } from "./modulos/index.js"; 
// Importamos la función para obtener fotos desde su módulo específico
import { getPhotos } from "./modulos/photos.js"; 
// Definimos la URL base de la API JSONPlaceholder
const URL = "https://jsonplaceholder.typicode.com"; 
// Definimos un ID de usuario específico que se utilizará en la función
const usuarioId = 3; 
// Definimos una función asincrónica para obtener los datos de un usuario específico
const getusuarioId = async (usuarioId) => { 
    // Llamamos a la función getUsuarios para obtener la información del usuario por su ID
    let usuario = await getUsuarios(URL, usuarioId); 
    // Llamamos a la función getPost para obtener las publicaciones del usuario obtenido
    let post = await getPost(URL, usuario[0]); 
    // Llamamos a la función getAlbums para obtener los álbumes del usuario
    let albums = await getAlbums(URL, usuarioId); 
}; 
// Ejecutamos la función getusuarioId pasando como argumento el usuarioId definido previamente
getusuarioId(usuarioId); 
// Definimos una función asincrónica para manejar la obtención de datos de todos los usuarios
const manejardatos = async () => { 
    // Llamamos a la función getUsuarios para obtener la lista de todos los usuarios disponibles en la API
    const usuarios = await getUsuarios(URL); 
    // Utilizamos Promise.all para manejar múltiples promesas de forma simultánea
    return await Promise.all(usuarios.map(async (usuario) => { 
    
        // Llamamos a la función getPost para obtener todas las publicaciones de un usuario
        const posts = await getPost(URL, usuario); 
        // Para cada publicación, obtenemos sus comentarios y los agregamos al objeto de la publicación
        const comentPost = await Promise.all(posts.map(async (post) => { 
            // Llamamos a la función getCommets para obtener los comentarios de cada post
            const coments = await getCommets(URL, post); 
            // Retornamos un objeto que contiene la publicación junto con sus comentarios
            return { ...post, coments }; 
        })); 
        // Llamamos a la función getAlbums para obtener todos los álbumes del usuario
        const albunes = await getAlbums(URL, usuario); 
        // Para cada álbum, obtenemos sus fotos y las agregamos al objeto del álbum
        const Photos = await Promise.all(albunes.map(async (albums) => { 
            // Llamamos a la función getPhotos para obtener las fotos de cada álbum
            const Photo = await getPhotos(URL, albums); 
            // Retornamos un objeto que contiene el álbum junto con sus fotos
            return { ...albums, Photo }; 
        })); 
        // Retornamos un objeto que contiene la información del usuario,
        // sus publicaciones con comentarios y sus álbumes con fotos
        return { ...usuario, comentPost, Photos }; 
    })); 
}; 
// Llamamos a la función manejardatos y una vez que la promesa se resuelve, obtenemos los datos
manejardatos().then((data) => { 
    // Mostramos en la consola los datos del primer usuario en la lista
    console.log(data[0]); 
});

