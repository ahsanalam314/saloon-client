import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator";


export class RegisterCompanyDTO {

    @IsNotEmpty({ message: 'Company name is required' })
    @Length(3, 20, { message: 'Company name must be 6 to 100 characters' })
    @IsString({ message: 'Name can not be in numeric' })
    name!: string;

    @IsNotEmpty({ message: 'Phone number is required' })
    @IsString({ message: 'Name should be in string' })
    phoneNo!: string;

    @IsNotEmpty({ message: 'Email is required' })
    @IsEmail({}, { message: 'Invalid email address' })
    @IsString({ message: 'Email can not be in numeric' })
    email!: string;

    @IsNotEmpty({ message: 'Building name is required' })
    @IsString({ message: 'Building name can not be in numeric' })
    buildingName!: string;

    @IsNotEmpty({ message: 'Street No. is required' })
    @IsString({ message: 'Street can not be in numeric' })
    street!: string;

    @IsNotEmpty({ message: 'Country is required' })
    @IsString({ message: 'Country can not be in numeric' })
    country!: string;

    @IsNotEmpty({ message: 'City is required' })
    @IsString({ message: 'City can not be in numeric' })
    city!: string;

}