import { Schema, model } from "mongoose";
import { IPermission } from "./interface/permission.mode.interface";

const PermissionSchema = new Schema<IPermission>({
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


const Permission = model<IPermission>('Permission', PermissionSchema);

export { Permission };