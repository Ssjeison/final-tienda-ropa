import { Request, Response } from "express";
import Product from "../models/Product";

export const addProduct = async (req: Request, res: Response): Promise<void> => {
    try{
        const {name, description, price, imagenUrl, stock} = req.body;
        const newProduct = new Product({name, description, price, imagenUrl, stock});
        await newProduct.save();
        res.status(201).json({message: 'Product created successfully', product: newProduct});
    }catch(error){
        const errorMessage = error instanceof Error ? error.message: 'An unknown error ocurred';
        res.status(500).json({error: errorMessage});
    }
};

export const getAllProducts = async (req: Request, res: Response): Promise <void> =>{
    try{
    const products = await Product.find();
    res.status(200).json(products);
    }catch(error){
        const errorMessage = error instanceof Error ? error.message: 'An unknown error ocurred';
        res.status(500).json({error: errorMessage});
    }
};

export const getProductById = async (req: Request, res: Response): Promise <void> =>{
    try{
        const product = await Product.findById(req.params.id);
        if(!product){
            res.status(404).json({message: 'Product not found'});
            return;
        }
        res.status(200).json(product);
    }catch(error){
        const errorMessage = error instanceof Error ? error.message: 'An unknown error ocurred';
        res.status(500).json({error:errorMessage});
    }
};