import app from './app';
import connectDB from './utils/db';
import dotenv from 'dotenv';

dotenv.config();
const PORT = 5000;
connectDB();
app.listen(PORT, ()=>{
    console.log (`server running on port ${PORT}`);
});