import * as bibliotecaRepositorie from "../repositories/bibliotecaRepositorie.js";

export const obtenerLibros = async () => {
    return bibliotecaRepositorie.mostrarLibros();
};

export const registrarLibro = async (titulo,autor,genero) => {
    if(!titulo || !titulo.trim()){
        throw new Error("El titulo es obligatorio");
    }
    if(!autor || !autor.trim()){
        throw new Error("El autor es obligatorio");
    }

    const libro = {
        titulo,
        autor,
        genero
    };

    return await bibliotecaRepositorie.agregarLibro(libro);//Usar el await en caso de capturar errores dentro
}