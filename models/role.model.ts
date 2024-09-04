import mongoose, { Model, Schema } from "mongoose";
import { IRoleModel } from './interface/role.model.interface';

const RoleSchema: Schema<IRoleModel> = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        enum: ['Customer', 'SaloonOwner', 'Staff', 'PortalAdmin'],
    },
});


const Roles: Model<IRoleModel> = mongoose.model<IRoleModel>('Role', RoleSchema);

export { Roles };