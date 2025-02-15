const express= require('express');
const bodyParser = require('body-parser');

const personaRoutes= require ('./src/routes/personaRoutes');
const especialidadesRoutes= require ('./src/routes/especialidadesRoutes');
const hospitalesRoutes= require ('./src/routes/hospitalesRoutes');
const salas_Routes= require ('./src/routes/salasRoutes');


const app = express();
const port = 3000;

app.use(bodyParser.json());

//rutas
app.use('/api/personas', personaRoutes);
app.use('/api/hospitales', hospitalesRoutes);
app.use('/api/especialidades', especialidadesRoutes);
app.use('/api/salas', salas_Routes);


//iniciar el servidor


app.listen(port, ()=>{

    console.log("Servidor iniciado en http://localhost:"+ port)

});

//http://localhost:3000/api/personas/ruta_name
