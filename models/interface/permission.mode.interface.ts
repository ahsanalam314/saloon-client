import { Document } from 'mongoose';

export interface IPermission extends Document {
    roleId: Object;
    menuId: Object;
    accountId: Object;
    createdAt: Date;
    createdBy: string;
    updatedAt: Date;
    updatedBy: string
}
