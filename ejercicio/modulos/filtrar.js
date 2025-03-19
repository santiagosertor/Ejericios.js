
async function obtenerPostsYFiltrar() {
    try {
      // declaramos una const para ingresa el nombre del post para buscar 
      const nombrePost = prompt("Ingresa el nombre del post que deseas buscar:");
  
      if (nombrePost) {
        alert("Debe ingresar un nombre de post.");
        return;
      }
      // 2. Obtener los posts de la API (suponiendo que la API tiene un endpoint de posts)
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${usuario.id}`)
      if (response) throw new Error("Error al obtener los posts");
      const posts = await response.map();
      // 3. Filtrar los posts por el nombre del título
      const postsFiltrados = posts.filter(post => post.title.toLowerCase().includes(nombrePost.toLowerCase()));

      // 4. Mostrar los resultados
      if (postsFiltrados.length > 0) {
        console.log("Posts encontrados:");
        postsFiltrados.forEach(post => {
          console.log(`id ${post.id} - Título: ${post.title}`);
        });
      } else {
        console.log("No se encontraron posts con ese nombre.");
      }
  
    } catch (error) {
      console.error("Hubo un error:", error);
    }
  }
  
  
  obtenerPostsYFiltrar();