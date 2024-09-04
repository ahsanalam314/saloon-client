import { Account, Permission } from "../models";
import { IAccount } from "../interface/account.interface";
import { IAccountModel } from "../models/interface/account.model.interface";

export class AccountService {

    public static async registerAccount(account: IAccount): Promise<IAccountModel> {
        try {
            const newAccount = new Account(account);
            return await newAccount.save();
        } catch (error) {
            console.error(`AccountService registerAccount error: ${error}`);
            throw new Error();
        }
    }

    public static async findAccountByEmail(email: string): Promise<IAccountModel> {
        try {
            return await Account.findOne({ email }) as IAccountModel;
        } catch (error) {
            console.error(`AccountService findAccountByEmail error: ${error}`);
            throw new Error();
        }
    }

    public static async getRolesByAccountId(accountId: string)  {
        try {
            const roles = await Permission.find({ accountId }).populate('Role');
            return roles;
        } catch (error) {
            console.error(`AccountService getRolesByAccountId error: ${error}`);
            throw new Error();
        }
    }

    public static async getMenuByAccountId(accountId: string)  {
        try {
            const roles = await Permission.find({ accountId }).populate('Role');
            return roles;
        } catch (error) {
            console.error(`AccountService getMenuByAccountId error: ${error}`);
            throw new Error();
        }
    }
}