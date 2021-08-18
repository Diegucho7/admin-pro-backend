require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./database/config');

// Crear el servidor express
const app = express();
// Configurar Cors

app.use(cors());


// Base de datos

dbConnection();
console.log(process.env);
// VivoparaDios2021
// Ruta
app.get( '/', (req, res) => {
	res.status(400).json({
		ok: true,
		msg: 'Hola mundo'
	})
} );

app.listen( process.env.PORT, () => {
	console.log('servidor corriendo en puerto ' +  process.env.PORT);
} );