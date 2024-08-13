import { Router } from "express";
import { getAll } from "../controllers/medicines.controller.js";
const routerMedicines = Router();

routerMedicines.get("getAll",getAll);

export default routerMedicines