import { Document } from 'mongoose';

export interface IAccount extends Document {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    companyId: Object;
    tenantId: string;
    createdAt: Date;
    createdBy: string;
    updatedAt: Date;
    updatedBy: string;
}
