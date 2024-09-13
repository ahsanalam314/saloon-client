import { Document } from 'mongoose';

export interface ICompany extends Document {
    tenantId: string;
    name: string;
    contact: string;
    address: string;
    phoneNo: string;
    email: string;
    buildingName: string;
    street: string;
    country: string;
    city: string;
    createdAt: Date;
    createdBy: string;
    updatedAt: Date;
    updatedBy: string;
}
