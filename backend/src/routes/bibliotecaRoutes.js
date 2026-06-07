import { Router } from "express";
import * as bibliotecaController from "../controllers/bibliotecaController.js";

const router = Router();

router.get('/',bibliotecaController.traerLibros);
router.post('/',bibliotecaController.anhadirLibro);
router.get('/:id',bibliotecaController.traerLibroPorID);
router.patch('/:id',bibliotecaController.actualizarDatosDelLibro);

export default router;