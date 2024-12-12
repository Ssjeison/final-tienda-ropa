import mongoose, {Schema, Document} from "mongoose";
import { title } from "process";

export interface IClient extends Document {
    username: string,
    email: string,
    password: string
}

const clientSchema: Schema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
});

export default mongoose.model<IClient>("Client", clientSchema);