import mongoose, {Schema, Document} from "mongoose";
import { title } from "process";

export interface ICategory extends Document {
    name: string,
    description: string
}

const categorySchema: Schema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true }
});

export default mongoose.model<ICategory>("Category", categorySchema);