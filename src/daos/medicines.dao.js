import Medicine from "../models/Medicine.js";

const medicineDAO = {};

medicineDAO.getAll = async() => {
    return await Medicine.find();
}
medicineDAO.insertMedicine = async (medicine) => {
    return await Medicine.create(medicine);
}

export default medicineDAO;