import express from 'express';
import servicesRoute from './routes/ServicesRoute.js';

//Confiugurar la app
const app = express();

//Definir Ruta
app.use('/api/services', servicesRoute)

//Definir Puerto
const PORT = process.env.PORT || 4000

//Arrancar la app
app.listen(PORT, () => {
    console.log("El servidor se esta ejecutando en el puerto: ", PORT)
})
