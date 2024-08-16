import medicineDAO from "../daos/medicines.dao.js";
export const getAll = async (req,res) => {
    await medicineDAO.getAll()
    .then((medicines) => {
        res.json(medicines);
    })
    .catch((err) => {
        res.json({message:err})
    });
};
export const insertMedicine = async (req,res) => {
    await medicineDAO.insertMedicine(req.body)
    .then((medicine) =>  {
        res.json(medicine);
    })
    .catch((err) => {
        res.json({message:err})
    });
};
export const getOne = async(req,  res)=> {
    await medicineDAO.getOne(req.params.barcode)
    .then((medicine) => {
        if (medicine!= null) 
            res.json(medicine)
        else
            res.json({medicine:"Medicine not found"});
    })
    .catch( err => {
        res.json({message:err});
    });
}
export const deleteOne = async(req, res)=> {
    await medicineDAO.deleteOne(req.params.barcode)
    .then((medicine) => {
        if (medicine!= null) 
            res.json(medicine)
        else
            res.json({medicine:"Medicine not found"});
    })
    .catch( err => {
        res.json({message:err});
    });
}
export const updateOne = async(req, res)=> {
    await medicineDAO.updateOne(req.params.barcode, req.body)
    .then((medicine) => {
        if (medicine!= null) 
            res.json({message:"Medicine updated"})
        else
            res.json({message:"Medicine not found"});
    })
    .catch( err => {
        res.json({message:err});
    });
}