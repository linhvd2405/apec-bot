import { ConfigService } from '@nestjs/config';
import { LoggerOptions } from 'winston';
import { IDebuggerOptionService } from 'src/common/debugger/interfaces/debugger.options-service.interface';
export declare class DebuggerOptionService implements IDebuggerOptionService {
    private configService;
    private readonly writeIntoFile;
    private readonly writeIntoConsole;
    private readonly maxSize;
    private readonly maxFiles;
    constructor(configService: ConfigService);
    createLogger(): LoggerOptions;
}
