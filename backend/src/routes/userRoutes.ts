import { Router } from "express";
import {
    registerUser,
    getAllUsers,
    getUserById
} from '../controllers/userController';

const router = Router();

router.post('/register', registerUser);
router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);

export default router;