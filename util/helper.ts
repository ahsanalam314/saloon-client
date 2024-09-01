import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { IUser } from '../interface/user.interface';

export function comparePassword(password: string, encrptPassword: string): Promise<boolean> {
    return bcrypt.compare(password, encrptPassword);
}

export function createToken(data: any): string {
    return jwt.sign(data, process.env.SECRET_KEY as string, { expiresIn: '1h' });
}

export function verifyToken(token: string) {
    return jwt.verify(token, process.env.SECRET_KEY as string);
}