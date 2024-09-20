import { Account, Permission } from "../models";
import { IAccount } from "../models/interface/account.model.interface";

export class AccountService {

    public async registerAccount(account: IAccount): Promise<IAccount> {
        const newAccount = new Account(account);
        return await newAccount.save();
    }

    public async findAccountByEmail(email: string): Promise<IAccount> {
        return await Account.findOne({ email }) as IAccount;
    }

    public async getRolesByAccountId(accountId: string)  {
        const roles = await Permission.find({ accountId }).populate('Role');
        return roles;
    }

    public async getMenuByAccountId(accountId: string)  {
        const roles = await Permission.find({ accountId }).populate('Role');
        return roles;
    }
}