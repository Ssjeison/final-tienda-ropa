import mongoose, {Schema, Document} from "mongoose";
import { title } from "process";

export interface IProduct extends Document {
    name: string,
    description: string,
    price: number,
    imagenUrl: string,
    stock: number,
    category: mongoose.Schema.Types.ObjectId
}

const productSchema: Schema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    imagenUrl: { type: String, required: true },
    stock: { type: Number, required: true },
    category: { type: Schema.Types.ObjectId, ref: "Category" }
});

export default mongoose.model<IProduct>("Product", productSchema);