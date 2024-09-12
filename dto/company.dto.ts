import { IsNotEmpty } from "class-validator";


export class CompanyDTO {

    @IsNotEmpty({ message: 'Company name is required' })
    name!: string;

    @IsNotEmpty({ message: 'Contact is required' })
    contact!: string;

    @IsNotEmpty({ message: 'Details are required' })
    details!: string;

}