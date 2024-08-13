import { Router, Router } from "express";
import { getAll } from "../controllers/medicines.controller.js";
const routerMedicines = Router();

routerMedicines.get("gelAll",getAll);

export default routerMedicines