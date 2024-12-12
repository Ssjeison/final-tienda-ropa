import { Router } from "express";
import {getAllProducts, addProduct, getProductById} from '../controllers/productController';

const router = Router();

router.get('/', getAllProducts);
router.post('/create', addProduct);
router.get('/:id', getProductById);

export default router;