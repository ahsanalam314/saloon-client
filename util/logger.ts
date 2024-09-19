import { createLogger, format, transports } from "winston";
import { ILogger } from "../interface/logger.interface";

export class Logger implements ILogger {

    private logger = createLogger({
        level: 'info',
        format: format.combine(
            format.timestamp(),
            format.json(), // Use JSON format for structured logging
            format.printf(({ timestamp, level, message }) => {
                            return `${timestamp} [${level}]: ${message}`
                        }),
        ),
        transports: [
            new transports.Console(),
            new transports.File({ filename: 'logs/combined.log' }),
            new transports.File({ filename: 'logs/error.log', level: 'error' })
        ]
    });

    info(message: string): void {
        this.logger.info(message);
    }

    error(message: string): void {
        this.logger.error(message);
    }

    debug(message: string): void {
        this.logger.debug(message);
    }

    warn(message: string): void {
        this.logger.warn(message);
    }

}

// const logger = createLogger({
//     level: 'info',
//     format: format.combine(
//         format.timestamp(),
//         format.printf(({ timestamp, level, message }) => {
//             return `${timestamp} [${level}]: ${message}`
//         }),
//     ),
//     transports: [
//         new transports.Console()
//     ]
// });

