import { Schema, model } from "mongoose";
import { IAccount } from './interface/account.model.interface';
import bcrypt from 'bcrypt';
import { AccountStatus } from "../enums";

const AccountSchema = new Schema<IAccount>({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 20
    },
    companyId: {
        type: Schema.Types.ObjectId,
        ref: 'Company',
        required: true
    },
    tenantId: {
        type: String,
        required: true
    },
    status:{
        type: String,
        required: true,
        enum: Object.values(AccountStatus),
        default: AccountStatus.PENDING_ACTIVATION
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

AccountSchema.pre<IAccount>('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }

    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (err: any) {
        next(err);
    }

});

const Account = model<IAccount>('Account', AccountSchema);

export { Account };