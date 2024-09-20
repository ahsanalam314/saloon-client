import { NextFunction, Request, Response } from "express";
import { AccountService } from "../services/account.service";
import { notFound, serverError, successResponse } from '../util/response.helper';
import { ResponseMessage } from "../contants/response-message.contant";
import { IAccount } from "../models/interface/account.model.interface";
import { comparePassword, createToken } from "../util/helper";

export class AccountController {

    private accountService: AccountService;

    constructor() {
        this.accountService = new AccountService();
    }

    public async registerAccount(request: Request, response: Response, next: NextFunction) {
        try {
            const account: IAccount = await this.accountService.registerAccount(request.body);
            return successResponse(response, ResponseMessage.User.successfullyRegistered, account);
        } catch (error) {
            next(error);
            return serverError(response);
        }
    }

    public async login(request: Request, response: Response, next: NextFunction) {
        try {
            const { email, password } = request.body;
            const account = await this.accountService.findAccountByEmail(email);

            if (!account) {
                return notFound(response, ResponseMessage.User.emailNotFound);
            }

            const isMatch = await comparePassword(password, account.password);

            if (!isMatch) {
                return notFound(response, ResponseMessage.User.incorrectPassword);
            }

            const token = createToken(account);

            const responseData = { account, token };

            return successResponse(response, ResponseMessage.User.loginSuccessfull, responseData);

        } catch (error) {
            next(error);
            return serverError(response);
        }
    }

    public async getAccountMenu(request: Request, response: Response, next: NextFunction) {
        try {
        } catch (error) {
            next(error);
            return serverError(response);
        }
    }


}