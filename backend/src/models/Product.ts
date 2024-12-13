import mongoose, {Schema, Document} from "mongoose";
import { title } from "process";

export interface IProduct extends Document {
    name: string,
    description: string,
    price: number,
    imagen: string,
    category: string
}

const productSchema: Schema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    imagen: { type: String, required: true },
    category: { type: String, required: true  }
});

export default mongoose.model<IProduct>("Product", productSchema);