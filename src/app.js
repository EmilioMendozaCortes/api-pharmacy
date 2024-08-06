// Importación de dependencias
import express from 'express';
// Creación del servidor
const app = express();
// Setting
app.set("port", 3000 || process.env.PORT);
// Middlewares
export default app;

