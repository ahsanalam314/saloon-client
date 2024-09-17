import { Document } from 'mongoose';
import { AccountStatus } from '../../enums';

export interface IAccount extends Document {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    companyId: Object;
    tenantId: string;
    status: AccountStatus;
    createdAt: Date;
    createdBy: string;
    updatedAt: Date;
    updatedBy: string;
}
