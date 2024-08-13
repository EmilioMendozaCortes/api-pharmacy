import medicineDAO from "../daos/medicines.dao.js";
export const getAll = async (req,res) => {
    await medicineDAO.getAll()
    .then((medicines) => {
        res.json(medicines);
    })
    .catch((err) => {
        res.json({message:err})
    });
}