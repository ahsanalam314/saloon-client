import { Document } from 'mongoose';

export interface ICompany extends Document {
    tenantId: string;
    name: string;
    contact: string;
    address: string;
    details: string;
    createdAt: Date;
    createdBy: string;
    updatedAt: Date;
    updatedBy: string;
}
