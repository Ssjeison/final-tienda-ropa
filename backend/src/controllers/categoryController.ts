import { Request, Response } from "express";
import Category from "../models/Category";

export const addCategory = async (req: Request, res: Response): Promise<void> => {
    try{
        const {name, description} = req.body;
        const newCategory = new Category({name, description});
        await newCategory.save();
        res.status(201).json({message: 'Category created successfully', category: newCategory});
    }catch(error){
        const errorMessage = error instanceof Error ? error.message: 'An unknown error ocurred';
        res.status(500).json({error: errorMessage});
    }
};

export const getAllCategory = async (req: Request, res: Response): Promise <void> =>{
    try{
    const category = await Category.find();
    res.status(200).json(category);
    }catch(error){
        const errorMessage = error instanceof Error ? error.message: 'An unknown error ocurred';
        res.status(500).json({error: errorMessage});
    }
};

export const getCategoryById = async (req: Request, res: Response): Promise <void> =>{
    try{
        const category = await Category.findById(req.params.id);
        if(!category){
            res.status(404).json({message: 'Category not found'});
            return;
        }
        res.status(200).json(category);
    }catch(error){
        const errorMessage = error instanceof Error ? error.message: 'An unknown error ocurred';
        res.status(500).json({error:errorMessage});
    }
};