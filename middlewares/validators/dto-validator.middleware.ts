import { NextFunction, Request, Response } from "express";
import { errorResponse, serverError } from "../../util/response.helper";
import { ResponseMessage } from "../../contants/response-message.contant";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";

export function dtoValidator(dto: any) {
    return async (request: Request, response: Response, next: NextFunction) => {
        try {
            const dtoInstance = plainToInstance(dto, request.body);
            const errors = await validate(dtoInstance);

            if (errors?.length) {
                const validations = errors.map((error) => {
                    return {
                        field: error.property,
                        validations: error.constraints
                    }
                })
                return errorResponse(response, ResponseMessage.Validation.error, validations);
            }

            next();
        } catch (error) {
            console.error('dtoValidator middleware : ', error);
            return serverError(response);
        }
    }
}