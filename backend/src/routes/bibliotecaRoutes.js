import { Router } from "express";
import * as bibliotecaController from "../controllers/bibliotecaController.js";

const router = Router();

router.get('/',bibliotecaController.traerLibros);
router.post('/',bibliotecaController.anhadirLibro);

export default router;