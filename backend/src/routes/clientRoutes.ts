import { Router } from "express";
import { registerClient, getAllClients, getClientById } from "../controllers/ClientController";

const router = Router();

router.post('/register', registerClient);
router.get('/', getAllClients);
router.get('/:id', getClientById);

export default router;