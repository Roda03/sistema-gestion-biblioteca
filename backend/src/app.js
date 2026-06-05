import express from "express";
import cors from "cors";
import bibliotecaRoutes from "./routes/bibliotecaRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use('/libros',bibliotecaRoutes);

app.listen(3000,() => {
    console.log("servidor funcionando");
})