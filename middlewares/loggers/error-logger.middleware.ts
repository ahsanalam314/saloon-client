import { NextFunction, Request, Response } from "express"
import { Logger } from "../../util/logger"

const logger = new Logger

export const errorLogger = (err: Error, request: Request, response: Response, next: NextFunction): void => {
    logger.error(JSON.stringify({
        message: 'Error encountered',
        error: err.message,
        stack: err.stack,
        url: request.originalUrl
    }));
};
