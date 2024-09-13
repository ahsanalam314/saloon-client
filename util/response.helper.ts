import { Response } from "express";
import { IApiResponse } from "../interface/response.interface";
import { ResponseMessage } from "../contants/response-message.contant";

export function successResponse<T>(res: Response, message: string, data: T, status: number = 200): void {
    const response:IApiResponse<T> = {
        success: true,
        message,
        data
    }
    res.status(status).json(response);
}

export function errorResponse(res: Response, message: string, error?: any, status: number = 400): void {
    const response:IApiResponse<null> = {
        success: false,
        message,
        error
    }
    res.status(status).json(response);
}

export function notFound(response: Response, message: string = ResponseMessage.Errors.recordNotFound, error?: any) {
    return errorResponse(response, message, error, 404);
}

export function serverError(response: Response, message: string = ResponseMessage.Errors.internalServerError, error?: any) {
    return errorResponse(response, message, error, 500);
}

export function unauthorized(response: Response, message: string = ResponseMessage.Errors.unauthorized, error?: any) {
    return errorResponse(response, message, error, 401);
}

export function forbidden(response: Response, message: string = ResponseMessage.Errors.forbidden, error?: any) {
    return errorResponse(response, message, error, 403);
}