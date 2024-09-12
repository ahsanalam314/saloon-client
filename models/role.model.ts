import mongoose, { Model, Schema } from "mongoose";
import { IRole } from './interface/role.model.interface';

const RoleSchema: Schema<IRole> = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        enum: ['Customer', 'SaloonOwner', 'Staff', 'PortalAdmin'],
    },
});


const Roles: Model<IRole> = mongoose.model<IRole>('Role', RoleSchema);

export { Roles };