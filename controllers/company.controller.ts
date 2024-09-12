import { Request, Response } from "express";
import { CompanyService } from "../services/company.service";
import { successResponse } from "../util/response.helper";
import { ResponseMessage } from "../contants/response-message.contant";

export class CompanyController {

    private companyService: CompanyService;

    constructor() {
        this.companyService = new CompanyService();
    }

    public async createCompany(request: Request, response: Response) {
        try {
            const companyResponse = await this.companyService.createCompany(request.body);
            return response.status(200).json(successResponse(ResponseMessage.Company.companyRegistered, companyResponse));
        } catch (error) {
            console.error(`CompanyController createCompany error: ${error}`);
            throw new Error();
        }
    }
}