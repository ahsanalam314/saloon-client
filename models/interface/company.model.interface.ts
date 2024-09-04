import { Document } from 'mongoose';

export interface ICompanyModel extends Document {
    name: string;
    contact: string;
    details: string;
    createdAt: Date;
    createdBy: string;
    updatedAt: Date;
    updatedBy: string;
}
