import * as bibliotecaServices from "../services/libroService.js";

export const anhadirLibro = async (req,res) => {
    try {
        const {titulo,autor,genero} = req.body;
        const libro = await bibliotecaServices.registrarLibro(titulo,autor,genero);
        res.status(201).json({mensaje:"Libro agregado correctamente",libro});
    } catch (error) {
        res.status(400).json({mensaje:error.message});
    }
};

export const traerLibros = async (req,res) => {
    try {
        const libros = await bibliotecaServices.obtenerLibros();
        res.status(200).json(libros);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};