import mongoose, { Model, Schema } from "mongoose";
import { IRoleModel } from './interface/role.model.interface';

const UserSchema: Schema<IRoleModel> = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        enum: ['Customer', 'SaloonOwner', 'Staff', 'PortalAdmin'],
    },
});


const Roles: Model<IRoleModel> = mongoose.model<IRoleModel>('Role', UserSchema);

export { Roles };