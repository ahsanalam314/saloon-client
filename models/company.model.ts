import mongoose, { Model, Schema } from "mongoose";
import { ICompany } from "./interface/company.model.interface";
import { v4 } from 'uuid';

const CompanySchema: Schema<ICompany> = new mongoose.Schema({
    tenantId: {
        type: String,
        required: true,
        unique: true,
        default: v4
    },
    name: {
        type: String,
        required: true,
    },
    contact: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    details: {
        type: String,
        required: true,
        unique: true
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
        required: false,
        default: Date.now
    },
    updatedBy: {
        type: String,
        required: false,
    }
});


const Company: Model<ICompany> = mongoose.model<ICompany>('Company', CompanySchema);

export { Company };