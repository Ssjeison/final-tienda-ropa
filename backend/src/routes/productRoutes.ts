import { Router } from "express";
import {getAllProduct, addProduct, getProductById} from '../controllers/productController';

const router = Router();

router.get('/', getAllProduct);
router.post('/', addProduct);
router.get('/:id', getProductById);

export default router;