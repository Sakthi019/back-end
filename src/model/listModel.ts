import mongoose, { Schema, Document } from 'mongoose';

interface User extends Document {
    name: string;
    email: string;
    job: string;
    mobile: number;
    employability: string;
    status: string;
    rewards: number;
}

const ListSchema: Schema<User> = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    job: { type: String, required: true },
    mobile: { type: Number, required: true, unique: true },
    employability: { type: String, required: true },
    status: { type: String, required: true },
    rewards: { type: Number, required: true },
});

const ListModel = mongoose.model<User>('User', ListSchema);
export default ListModel;
