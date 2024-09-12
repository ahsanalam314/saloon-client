import { NextFunction, Request, Response } from "express";
import { errorResponse } from "../util/response.helper";
import { ResponseMessage } from "../contants/response-message.contant";
import jwt from 'jsonwebtoken';


const AllowedAPIs = [ 
    'api/account/login', 
    'api/account/register' 
];

const authenticate = (request: Request, response: Response, next: NextFunction) => {
    try {
        if (AllowedAPIs && AllowedAPIs.includes(request.path)) {
            return next();
        }

        const token = request.header('Authorization')?.split(' ')[1];

        if (!token) {
        return response.status(401).json({ message: 'Access denied. No token provided.' });
        }

        jwt.verify(token, process.env.SECRET_KEY as string, (err, account) => {
            if (err) {
                return response.status(403).json({ message: 'Invalid token.' });
            }
            console.info('Autentication Successfull');
            next();
        });
    } catch (error) {
        console.error(`authenticate middleware error: ${error}`);
        return response.status(500).json(errorResponse(ResponseMessage.Errors.authenticationMessage, error));
    }
}