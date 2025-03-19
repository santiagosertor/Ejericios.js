// Archivo: menu.js

// Importamos los módulos desde el archivo barril
import { getUsuarios, getPost, getCommets, getAlbums, getPhotos } from './modulos/index';

// Función para mostrar el menú y ejecutar la opción seleccionada
function mostrarMenu() {
    const opciones = `\nMenú de opciones:\n1. Listar tareas pendientes\n2. Buscar usuario y mostrar álbumes\n3. Filtrar posts por nombre y agregar comentarios\n4. Modificar respuesta de usuarios (nombre y teléfono)\n5. Obtener usuarios con posts, comentarios y álbumes\n6. Salir`;
    
    let opcion;
    do {
        opcion = prompt(`${opciones}\nSeleccione una opción:`);
        switch (opcion) {
            case '1':
                listarTareasPendientes();
                break;
            case '2':
                buscarUsuario();
                break;
            case '3':
                filtrarPosts();
                break;
            case '4':
                modificarUsuarios();
                break;
            case '5':
                obtenerUsuariosConDatos();
                break;
            case '6':
                console.log("Saliendo del programa...");
                break;
            default:
                console.log("Opción no válida, intente nuevamente.");
        }
    } while (opcion !== '6');
}

// Ejecutamos el menú cuando se cargue el script
mostrarMenu();
