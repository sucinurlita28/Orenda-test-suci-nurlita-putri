import Customer from "../models/UserModel.js";
import Product from "../models/UserModels.js";

export const getCustomers = async(req, res) =>{
    try {
        const response = await Customer.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}


export const getCustomersById = async(req, res) =>{
    try {
        const response = await Customer.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}


export const createCustomer = async(req, res) =>{
    try {
       await Customer.create(req.body);
        res.status(201).json({msg: "Customer Created"});
    } catch (error) {
        console.log(error.message);
    }
}


export const updateCustomer = async(req, res) =>{
    try {
       await Customer.update(req.body,{
        where: {
            id: req.params.id
        }
        
       });
        res.status(201).json({msg: "Customer Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteCustomer = async(req, res) =>{
    try {
       await Customer.destroy({
        where: {
            id: req.params.id
        }
        
       });
        res.status(201).json({msg: "Customer Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}



/*product*/
export const getProduct = async(req, res) =>{
    try {
        const response = await Product.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}


export const getProductById = async(req, res) =>{
    try {
        const response = await Product.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}


export const createProduct = async(req, res) =>{
    try {
       await Product.create(req.body);
        res.status(201).json({msg: "Product Created"});
    } catch (error) {
        console.log(error.message);
    }
}


export const updateProduct = async(req, res) =>{
    try {
       await Product.update(req.body,{
        where: {
            id: req.params.id
        }
        
       });
        res.status(201).json({msg: "Product Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteProduct = async(req, res) =>{
    try {
       await Customer.destroy({
        where: {
            id: req.params.id
        }
        
       });
        res.status(201).json({msg: "Product Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}