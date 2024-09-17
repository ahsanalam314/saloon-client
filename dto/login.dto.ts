import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator";


export class LoginDTO {

    @IsNotEmpty({ message: 'Email is required' })
    @IsEmail({}, { message: 'Invalid email address' })
    @IsString({ message: 'Email can not be in numeric' })
    email!: string;

    @IsNotEmpty({ message: 'Password is required' })
    @Length(6, 20, { message: 'Password must be between 8 and 20 characters' })
    password!: string;

}