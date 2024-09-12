import { Account, Permission } from "../models";
import { IAccount } from "../models/interface/account.model.interface";

export class AccountService {

    public async registerAccount(account: IAccount): Promise<IAccount> {
        try {
            const newAccount = new Account(account);
            return await newAccount.save();
        } catch (error) {
            console.error(`AccountService registerAccount error: ${error}`);
            throw new Error();
        }
    }

    public async findAccountByEmail(email: string): Promise<IAccount> {
        try {
            return await Account.findOne({ email }) as IAccount;
        } catch (error) {
            console.error(`AccountService findAccountByEmail error: ${error}`);
            throw new Error();
        }
    }

    public async getRolesByAccountId(accountId: string)  {
        try {
            const roles = await Permission.find({ accountId }).populate('Role');
            return roles;
        } catch (error) {
            console.error(`AccountService getRolesByAccountId error: ${error}`);
            throw new Error();
        }
    }

    public async getMenuByAccountId(accountId: string)  {
        try {
            const roles = await Permission.find({ accountId }).populate('Role');
            return roles;
        } catch (error) {
            console.error(`AccountService getMenuByAccountId error: ${error}`);
            throw new Error();
        }
    }
}