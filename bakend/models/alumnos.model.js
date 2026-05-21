import {Schema, model } from "mongoose";

const EsquemaAlumnos= new Schema({
    nombre:String,
    calificacion:Number,
    materia:String
})

export const TablaAlumnos = new model("Tabla de alumnos reprobados", EsquemaAlumnos)//Creación de base de datos