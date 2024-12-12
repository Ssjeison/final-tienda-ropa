import express from 'express';
import cors from 'cors';
import categoryRoutes from './routes/categoryRoutes';
import userRoutes from './routes/clientRoutes';
import productRoutes from './routes/productRoutes';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/category', categoryRoutes);
app.use('/api/users', userRoutes);
app.use('/api/product', productRoutes)

export default app;