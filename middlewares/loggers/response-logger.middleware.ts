import { NextFunction, Request, Response } from "express";
import { Logger } from "../../util/logger";

const logger = new Logger();

export const responseLogger = (request: Request, response: Response, next: NextFunction) => {
    const originalResponse = response.send;

    response.send = function(body: any) {
        logger.info(JSON.stringify({
            message: 'Response Sent',
            statusCode: response.status,
            body
        }));

        return originalResponse.call(this, body);
    }

    next();
}