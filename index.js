const express= require('express');
const bodyParser = require('body-parser');

const personaRoutes= require ('./src/routes/personaRoutes');
const imagenesRoutes= require ('./src/routes/imagenesRoutes');
const contactoRoutes= require ('./src/routes/contactoRoutes');
const recetasRoutes= require ('./src/routes/recetasRoutes');


const app = express();
const port = 3000;

app.use(bodyParser.json());

//rutas
app.use('/api/personas', personaRoutes);
app.use('/api/imagenes', imagenesRoutes);
app.use('/api/contactos', contactoRoutes);
app.use('/api/recetas', recetasRoutes);


//iniciar el servidor


app.listen(port, ()=>{

    console.log("Servidor iniciado en http://localhost:"+ port)

});

//http://localhost:3000/api/personas/ruta_name
