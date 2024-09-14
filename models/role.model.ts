import { Schema, model } from "mongoose";
import { IRole } from './interface/role.model.interface';

const RoleSchema = new Schema<IRole>({
    name: {
        type: String,
        required: true,
        enum: ['Customer', 'SaloonOwner', 'Staff', 'PortalAdmin'],
    },
});


const Roles = model<IRole>('Role', RoleSchema);

export { Roles };