import { Company } from "../models";
import { ICompany } from "../models/interface/company.model.interface";

export class CompanyService {

    public async createCompany(company: ICompany) {
        try {

            const companyResponse = await new Company(company);
            return companyResponse.save();

        } catch(error) {
            console.error(`CompanyService createCompany error: ${error}`);
            throw new Error();
        }
    }

    public async updateCompany(company: any) {
        try {

            const companyResponse = await new Company(company);
            return companyResponse.save();

        } catch(error) {
            console.error(`CompanyService updateCompany error: ${error}`);
            throw new Error();
        }
    }

    public async findCompanyById(companyId: string) {
        try {
            return await Company.findById(companyId);
        } catch(error) {
            console.error(`CompanyService findCompanyById error: ${error}`);
            throw new Error();
        }
    }
}