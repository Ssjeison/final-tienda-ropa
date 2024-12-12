import mongoose, {Schema, Document} from "mongoose";
import { title } from "process";

export interface IProduct extends Document {
    username: string,
    email: string,
    password: string
}

const productSchema: Schema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
});

export default mongoose.model<IProduct>("Product", productSchema);