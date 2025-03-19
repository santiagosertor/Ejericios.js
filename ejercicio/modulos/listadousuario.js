// declaramos una variable que nos hara una escritura para pedir los datos del username
let pedir= prompt("Ingrese el nombre del usarnme para la consulta");
 const datosusuario = async (URL, id ) => {  //use una funcion asincrona para usar el await que se presenta
    for (let i = 0; i < pedir.length; i++) {
        let i = i [pedir]
        if (i==id) { 
        
            pedir = `numero${id}`; 
            
            
        } else {
        
            pedir = `${URL}/users`; 
        } 
        
    }
   

    const datos = await datosusuario(URL,id); 
    return datos; 
};
