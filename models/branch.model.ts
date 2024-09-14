import { Schema, model } from "mongoose";
import { IBranch } from "./interface/branch.model.interface";

const BranchSchema = new Schema<IBranch>({
    companyId: {
        type: Schema.Types.ObjectId,
        ref: 'Company',
        required: true
    },
    address: {
        type: String,
        required: true,
    },
    contact: {
        type: String,
        required: true,
    },
    details: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    createdBy: {
        type: String,
        required: false,
    },
    updatedAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    updatedBy: {
        type: String,
        required: false,
    }
});


const Branch = model<IBranch>('Branch', BranchSchema);

export { Branch };