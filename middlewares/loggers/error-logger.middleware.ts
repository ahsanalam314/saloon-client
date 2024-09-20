import { NextFunction, Request, Response } from "express"
import { Logger } from "../../util/logger"

const logger = new Logger

export const errorLogger = (error: Error, request: Request, response: Response, next: NextFunction): void => {
    logger.error(JSON.stringify({
        message: 'Error encountered',
        error: error.message,
        stack: error.stack,
        url: request.originalUrl
    }));
};
