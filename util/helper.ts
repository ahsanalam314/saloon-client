import bcrypt from 'bcrypt';
import { Request } from 'express';
import jwt from 'jsonwebtoken';
import { AllowedAPIs } from '../contants/allowedApi.constant';

export function comparePassword(password: string, encrptPassword: string): Promise<boolean> {
    return bcrypt.compare(password, encrptPassword);
}

export function createToken(data: any): string {
    return jwt.sign(data, process.env.SECRET_KEY as string, { expiresIn: '1h' });
}

export function verifyToken(token: string) {
    return jwt.verify(token, process.env.SECRET_KEY as string);
}

export function extractToken(request: Request): string | null {
    return request.header('Authorization')?.split(' ')[1] ?? null;
}

export function isPathAllowed(path: string): boolean {
    return AllowedAPIs && AllowedAPIs.includes(path);
}