import { Request, Response } from "express";
import Client from "../models/Client";

export const registerClient = async (req: Request, res: Response): Promise<void> => {
    try{
        const { clientname, email, password } = req.body;
        const existingClient = await Client.findOne({ email });
        if(existingClient){
            res.status(400).json({message: 'Client already exists'});
            return;
        }

        const newClient = new Client({clientname, email, password});
        await newClient.save();
        res.status(201).json({message: 'Client registered successfully', Client: newClient});
    }catch(error){
        const errorMessage = error instanceof Error ? error.message: 'An unknown error ocurred';
        res.status(500).json({error: errorMessage});
    }
};

export const getAllClients = async (req: Request, res: Response): Promise <void> =>{
    try{
    const clients = await Client.find();
    res.status(200).json(clients);
    }catch(error){
        const errorMessage = error instanceof Error ? error.message: 'An unknown error ocurred';
        res.status(500).json({error: errorMessage});
    }
};

export const getClientById = async (req: Request, res: Response): Promise <void> =>{
    try{
        const client = await Client.findById(req.params.id);
        if(!client){
            res.status(404).json({message: 'Client not found'});
            return;
        }
        res.status(200).json(client);
    }catch(error){
        const errorMessage = error instanceof Error ? error.message: 'An unknown error ocurred';
        res.status(500).json({error:errorMessage});
    }
};