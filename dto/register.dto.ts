import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class RegisterDTO {

    @IsNotEmpty({ message: 'First name is required'  })
    @IsString({ message: 'First name can not be in numeric' })
    firstName!: string;

    @IsNotEmpty({ message: 'Last name is required' })
    @IsString({ message: 'Last name can not be in numeric' })
    lastName!: string;

    @IsNotEmpty({ message: 'Email is required' })
    @IsEmail({}, { message: 'Invalid email address' })
    @IsString({ message: 'Email can not be in numeric' })
    email!: string;

    @IsNotEmpty({ message: 'Password is required' })
    @Length(6, 20, { message: 'Password must be between 8 and 20 characters' })
    password!: string;

}