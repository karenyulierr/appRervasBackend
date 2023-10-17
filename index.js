import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import { db } from './config/db.js';
import servicesRoute from './routes/ServicesRoute.js';

//Variables de entorno
dotenv.config()
//Confiugurar la app
const app = express();

//Conectar a bd
db();

//Definir Ruta
app.use('/api/services', servicesRoute)



//Definir Puerto
const PORT = process.env.PORT || 4000

//Arrancar la app
app.listen(PORT, () => {
    console.log(colors.blue("El servidor se esta ejecutando en el puerto:"), colors.blue.bold(PORT))
})
