import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { AllowedAPIs } from '../contants/allowedApi.constant';
import { unauthorized } from './response.helper';
import { ResponseMessage } from '../contants/response-message.contant';
import { IAccount } from '../models/interface/account.model.interface';

export function comparePassword(password: string, encrptPassword: string): Promise<boolean> {
    return bcrypt.compare(password, encrptPassword);
}

export function createToken(data: IAccount): string {
    return jwt.sign(data, process.env.SECRET_KEY as string, { expiresIn: '1h' });
}

// export function verifyToken(token: string) {
//     return jwt.verify(token, process.env.SECRET_KEY as string)
// }

export function extractToken(request: Request): string | null {
    return request.header('Authorization')?.split(' ')[1] ?? null;
}

export function isPathAllowed(path: string): boolean {
    return AllowedAPIs && AllowedAPIs.includes(path);
}

export const verifyToken = (token: string): Promise<unknown> => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.SECRET_KEY as string, (err, decoded) => {
          if (err) reject(new Error(ResponseMessage.Errors.invalidToken));
          else resolve(decoded);
        });
      });
}

