import mongoose, { Model, Schema } from "mongoose";
import { ICompanyModel } from "./interface/company.model.interface";

const CompanySchema: Schema<ICompanyModel> = new mongoose.Schema({
    name: {
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
        required: true,
        default: Date.now
    },
    updatedBy: {
        type: String,
        required: false,
    }
});


const Company: Model<ICompanyModel> = mongoose.model<ICompanyModel>('Company', CompanySchema);

export { Company };