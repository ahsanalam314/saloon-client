import mongoose, { Model, Schema } from "mongoose";
import { IPermission } from "./interface/permission.mode.interface";

const PermissionSchema: Schema<IPermission> = new mongoose.Schema({
    roleId: {
        type: Schema.Types.ObjectId,
        ref: 'Roles',
        required: true
    },
    menuId: {
        type: Schema.Types.ObjectId,
        ref: 'Menu',
        required: true
    },
    accountId: {
        type: Schema.Types.ObjectId,
        ref: 'Account',
        required: true
    },
    createdAt: {
        type: Date,
        required: true
    },
    createdBy: {
        type: String,
        required: true
    },
    updatedAt: {
        type: Date,
        required: true
    },
    updatedBy:{
        type: String,
        required: true
    }
});


const Permission: Model<IPermission> = mongoose.model<IPermission>('Permission', PermissionSchema);

export { Permission };