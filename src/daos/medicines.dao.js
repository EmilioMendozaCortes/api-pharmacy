import Medicine from "../models/Medicine.js";

const medicineDAO = {};

medicineDAO.getAll = async() => {
    return await Medicine.find();
}
medicineDAO.insertMedicine = async (medicine) => {
    return await Medicine.create(medicine);
}
medicineDAO.getOne = async(barcode) => {
    return await Medicine.findOne({barcode:barcode});
}
medicineDAO.deleteOne = async(barcode) => {
    return await Medicine.findOneAndDelete({barcode:barcode});
}
medicineDAO.updateOne = async(barcode,medicine) => {
    return await Medicine.findOneAndUpdate({barcode:barcode}, medicine);
}

export default medicineDAO;