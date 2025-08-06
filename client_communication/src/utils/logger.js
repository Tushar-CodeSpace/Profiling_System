import winston from 'winston';
import path from 'path';
import { format as dateFormat } from 'date-fns';

const { combine, timestamp, printf, colorize } = winston.format;

const myFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} [${level}]: ${message}`;
});

const logger = winston.createLogger({
    level: process.env.LOG_LEVEL || 'info',
    transports: [
        // Console with color
        new winston.transports.Console({
            format: combine(
                colorize({ level: true }),
                timestamp({ format: 'YYYY-MM-DD HH:mm:ss.SSS' }),
                myFormat
            )
        }),

        // File without color
        new winston.transports.File({
            filename: path.join(
                process.env.LOG_PATH || './logs',
                `${process.env.LOG_NAME || 'app'}-${dateFormat(new Date(), 'yyyy-MM-dd')}.log`
            ),
            format: combine(
                timestamp({ format: 'YYYY-MM-DD HH:mm:ss.SSS' }),
                myFormat
            ),
            zippedArchive: true
        })
    ]
});

export default logger;