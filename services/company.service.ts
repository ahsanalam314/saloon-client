import { Company } from "../models";
import { ICompany } from "../models/interface/company.model.interface";

export class CompanyService {

    public async createCompany(company: ICompany): Promise<ICompany> {
        const companyResponse = await new Company(company);
        return await companyResponse.save();
    }

    public async updateCompany(company: any): Promise<void> {
    }

    public async findCompanyById(companyId: string) {
        return await Company.findById(companyId);
    }
}