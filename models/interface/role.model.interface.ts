import { Document } from 'mongoose';

export interface IRoleModel extends Document {
    name: string;
}
