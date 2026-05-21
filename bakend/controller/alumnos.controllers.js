import { TablaAlumnos } from "../models/alumnos.model.js";

TablaAlumnos.create({
    nombre:"Fulanito",
    calificacion:5,
    materia: "Matematicas"
})

export const test = ()=>console.log("Si se esta llamando al controlador")