import Medicine from "../models/Medicine.js";

const medicineDAO = {};
medicineDAO.getAll = async() => {
    return await Medicine.find();
}

export default medicineDAO;