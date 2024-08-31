import { Document } from 'mongoose';

export interface IPermissionModel extends Document {
    roleId: Object;
    menuId: Object;
    userId: Object;
    createdAt: Date;
    createdBy: string;
    updatedAt: Date;
    updatedBy: string
}
