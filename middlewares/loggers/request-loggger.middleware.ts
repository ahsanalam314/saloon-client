import { NextFunction, Request, Response } from "express";
import { Logger } from "../../util/logger";

const logger = new Logger();

export const requestLogger = (request: Request, response: Response, next: NextFunction) => {
    const { method, originalUrl, body, params, query } = request;

    logger.info(JSON.stringify({
        message: 'Incoming Request',
        method,
        originalUrl,
        params,
        query,
        body
    }));

    next();
    
}