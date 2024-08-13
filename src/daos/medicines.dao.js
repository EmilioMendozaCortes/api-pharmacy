import Medicine from "../models/Medicine.js";

const medicineDAO = {};
medicineDAO.getall = async() => {
    return await Medicine.find();
}

export default medicineDAO;