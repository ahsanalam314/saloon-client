import { NextFunction, Request, Response } from "express";
import { serverError, unauthorized } from "../util/response.helper";
import { ResponseMessage } from "../contants/response-message.contant";
import { extractToken, isPathAllowed, verifyToken } from '../util/helper';
import jwt from 'jsonwebtoken';


const SECRET_KEY = process.env.SECRET_KEY as string;

export const authenticate = async (request: Request, response: Response, next: NextFunction) => {
    try {
        if (isPathAllowed(request.path)) {
            return next();
        }

        const token = extractToken(request);
        if (!token) {
            return unauthorized(response, ResponseMessage.Errors.noTokenProvided);
        }

        const verified = await verifyToken(token);
        if (!verified) {
            return unauthorized(response, ResponseMessage.Errors.invalidToken);
        }

        next();

    } catch (error) {
        console.error(`authenticate middleware error: ${error}`);
        return error instanceof Error ? serverError(response) : unauthorized(response);
    }
}