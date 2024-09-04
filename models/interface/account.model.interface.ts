import { Document } from 'mongoose';

export interface IAccountModel extends Document {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    companyId: Object;
    createdAt: Date;
    createdBy: string;
    updatedAt: Date;
    updatedBy: string;
}
