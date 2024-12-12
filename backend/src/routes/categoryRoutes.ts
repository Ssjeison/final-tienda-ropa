import { Router } from "express";
import {getAllCategory, addCategory, getCategoryById} from '../controllers/categoryController';

const router = Router();

router.get('/', getAllCategory);
router.post('/create', addCategory);
router.get('/:id', getCategoryById);

export default router;