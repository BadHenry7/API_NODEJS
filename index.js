const express= require('express');
const bodyParser = require('body-parser');

const personaRoutes= require ('./src/routes/personaRoutes');
const especialidadesRoutes= require ('./src/routes/especialidadesRoutes');
const hospitalesRoutes= require ('./src/routes/hospitalesRoutes');
const salas_Routes= require ('./src/routes/salasRoutes');
const sendSMSRoutes = require('./server'); 
const cors = require("cors");
const app = express();
const port = 3000;




app.use(
    cors({
      origin: [
        "http://localhost:5173", // Svelte en desarrollo
        "http://localhost:3000", // Backend en desarrollo
        "https://f882-191-110-53-32.ngrok-free.app", // Ngrok
        "https://3f44-191-110-53-32.ngrok-free.app", // Ngrok
        "https://api-nodejs-buxf.onrender.com",
        "https://red-neurolal-svelte.onrender.com", 
        "http://localhost:4200",
        "https://angular-red-neuronal.onrender.com"
        //Angular
      ],
      credentials: true, // Si necesitas enviar cookies o headers con autenticación
      methods: ["GET", "POST", "PUT", "DELETE"], // Métodos permitidos
    })
  );

//


app.use(bodyParser.json());
//rutas
app.use('/api/personas', personaRoutes);
app.use('/api/hospitales', hospitalesRoutes);
app.use('/api/especialidades', especialidadesRoutes);
app.use('/api/salas', salas_Routes);

app.use("/api", sendSMSRoutes);

//iniciar el servidor


app.listen(port, ()=>{

    console.log("Servidor iniciado en http://localhost:"+ port)

});

//http://localhost:3000/api/personas/ruta_name
