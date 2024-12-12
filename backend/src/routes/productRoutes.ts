import { Router } from "express";
import {getAllProducts, addProduct, getProductById} from '../controllers/productController';

const router = Router();

router.get('/', getAllProducts);
router.post('/', addProduct);
router.get('/:id', getProductById);

export default router;