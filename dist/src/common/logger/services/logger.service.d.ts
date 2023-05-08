import { ILogger, ILoggerRaw } from 'src/common/logger/interfaces/logger.interface';
import { ILoggerService } from 'src/common/logger/interfaces/logger.service.interface';
import { LoggerRepository } from 'src/common/logger/repositories/logger.repository';
import { LoggerDocument } from 'src/common/logger/schemas/logger.schema';
export declare class LoggerService implements ILoggerService {
    private readonly loggerRepository;
    constructor(loggerRepository: LoggerRepository);
    info({ action, description, apiKey, user, method, requestId, role, params, bodies, path, statusCode, tags, }: ILogger): Promise<LoggerDocument>;
    debug({ action, description, apiKey, user, method, requestId, role, params, bodies, path, statusCode, tags, }: ILogger): Promise<LoggerDocument>;
    warning({ action, description, apiKey, user, method, requestId, role, params, bodies, path, statusCode, tags, }: ILogger): Promise<LoggerDocument>;
    fatal({ action, description, apiKey, user, method, requestId, role, params, bodies, path, statusCode, tags, }: ILogger): Promise<LoggerDocument>;
    raw({ level, action, description, apiKey, user, method, requestId, role, params, bodies, path, statusCode, tags, }: ILoggerRaw): Promise<LoggerDocument>;
}
