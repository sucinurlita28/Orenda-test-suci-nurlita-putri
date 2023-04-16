import express from "express";
import {
    getCustomers, 
    getCustomersById,
    createCustomer,
    updateCustomer,
    deleteCustomer,
    getProduct,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct} from "../controller/UserController.js";

const router = express.Router();

router.get('/customer', getCustomers);
router.get('/customer/:id', getCustomersById);
router.post('/customer', createCustomer);
router.patch('/customer/:id', updateCustomer);
router.delete('/customer/:id', deleteCustomer)
router.get('/product', getProduct);
router.get('/product/:id', getProductById);
router.post('/product', createProduct);
router.patch('/product/:id', updateProduct);
router.delete('/product/:id', deleteProduct)
export default router;

