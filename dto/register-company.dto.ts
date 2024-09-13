import { IsEmail, IsNotEmpty, Length } from "class-validator";


export class RegisterCompanyDTO {

    @IsNotEmpty({ message: 'Company name is required' })
    @Length(3, 20, { message: 'Company name must be 6 to 100 characters' })
    name!: string;

    @IsNotEmpty({ message: 'Phone number is required' })
    phoneNo!: string;

    @IsNotEmpty({ message: 'Email is required' })
    @IsEmail({}, { message: 'Invalid email address' })
    email!: string;

    @IsNotEmpty({ message: 'Building name is required' })
    buildingName!: string;

    @IsNotEmpty({ message: 'Street No. is required' })
    street!: string;

    @IsNotEmpty({ message: 'Country is required' })
    country!: string;

    @IsNotEmpty({ message: 'City is required' })
    city!: string;

}