import prisma from "../config/prisma.js";

export const mostrarLibros = async () => {
    const libros = await prisma.libro.findMany();
    return libros;
};

export const buscarLibroPorId = async (id) => {
    const libro = await prisma.libro.findUnique({
        where:{id:parseInt(id)}
    });

    return libro;
};

export const agregarLibro = async (libro) => {
    const nuevoLibro = await prisma.libro.create({
        data: libro
    });

    return nuevoLibro;
};

export const actualizarLibro = async (id,datos) => {
    const libroActualizado = await prisma.libro.update({
        where:{id:parseInt(id)},
        data:datos
    });

    return libroActualizado;
};

export const eliminarLibro = async (id) => {
    const libroEliminado = await prisma.libro.delete({
        where:{id:parseInt(id)}
    });
    return libroEliminado;
};