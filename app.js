import mongoose from "mongoose"; //librearia para conectar mongodb
import dotenv from "dotenv"; //libreria para poder llamar mi archivo .env
import express from "express"; //libreria para crear servidores
import cors from "cors"; //libreria para seguridad en el server
import { test } from "./bakend/controller/alumnos.controllers.js";

dotenv.config();
mongoose.connect(process.env.url_bd)
.then(() => console.log("Funciono la base de datos"))
.catch((error) => console.log("No jalo esto pipipi malardo"))
//creando un servidor local
const app = express();
app.use(cors());

app.listen(4000, ()=> console.log("Funciona el servidor"))

test();