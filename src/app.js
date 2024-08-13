// Importación de dependencias
import express from 'express';
import routerMedicines from './routes/medicines.routes.js';
// Creación del servidor
const app = express();
// Setting
app.set("port", 3000 || process.env.PORT);
// Middlewares
app.use("/api/pharmaci", routerMedicines)
export default app;

