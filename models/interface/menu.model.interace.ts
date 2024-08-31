import { Document } from 'mongoose';

export interface IMenuModel extends Document {
    name: string;
    url: string;
}
