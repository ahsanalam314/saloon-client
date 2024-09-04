import { Request, Response } from "express";
import { AccountService } from "../services/account.service";
import { errorResponse, successResponse } from '../util/response.helper';
import { ResponseMessage } from "../contants/response-message.contant";
import { IAccount } from "../interface/account.interface";
import { IAccountModel } from "../models/interface/account.model.interface";
import { comparePassword, createToken } from "../util/helper";

export class AccountController {

    public async registerAccount(request: Request, response: Response) {
        try {

            const account: IAccountModel = await AccountService.registerAccount(request.body as IAccount);
            return response.status(200).json(successResponse(ResponseMessage.User.successfullyRegistered, account));

        } catch (error) {
            console.error(`AccountController registerAccount error: ${error}`);
            return response.status(500).json(errorResponse(ResponseMessage.User.notRegistered, error));
        }
    }

    public async login(request: Request, response: Response) {
        try {
            const { email, password } = request.body;
            const account = await AccountService.findAccountByEmail(email);

            if (!account) {
                return response.status(404).json(errorResponse(ResponseMessage.User.emailNotFound));
            }

            const isMatch = await comparePassword(password, account.password);

            if (!isMatch) {
                return response.status(404).json(errorResponse(ResponseMessage.User.incorrectPassword));
            }

            const token = createToken(account);

            const responseData = { account, token };

            return response.status(201).json(successResponse(ResponseMessage.User.loginSuccessfull, responseData));

        } catch (error) {
            console.error(`AccountController login error: ${error}`);
            return response.status(500).json(errorResponse(ResponseMessage.User.loginNotSuccessfull, error));
        }
    }

    public async getAccountMenu(request: Request, response: Response) {
        try {
            
        } catch (error) {
            console.error(`AccountController getAccountMenu error: ${error}`);
            return response.status(500).json(errorResponse(ResponseMessage.User.notRegistered, error));
        }
    }


}