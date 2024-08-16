import { Router } from "express";
import { getAll,insertMedicine,getOne,deleteOne, updateOne } from "../controllers/medicines.controller.js";
const routerMedicines = Router();

routerMedicines.get("/getAll",getAll);
routerMedicines.post("/insertMedicine",insertMedicine);
routerMedicines.get("/getOne/:barcode", getOne);
routerMedicines.delete("/deleteOne/:barcode", deleteOne);
routerMedicines.put("/updateOne/:barcode", updateOne)

export default routerMedicines