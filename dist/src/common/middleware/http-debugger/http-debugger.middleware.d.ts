import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { ConfigService } from '@nestjs/config';
import { HelperDateService } from 'src/common/helper/services/helper.date.service';
export declare class HttpDebuggerMiddleware implements NestMiddleware {
    private readonly configService;
    private readonly writeIntoFile;
    private readonly writeIntoConsole;
    constructor(configService: ConfigService);
    private customToken;
    use(req: Request, res: Response, next: NextFunction): Promise<void>;
}
export declare class HttpDebuggerWriteIntoFileMiddleware implements NestMiddleware {
    private readonly configService;
    private readonly helperDateService;
    private readonly writeIntoFile;
    private readonly maxSize;
    private readonly maxFiles;
    constructor(configService: ConfigService, helperDateService: HelperDateService);
    private httpLogger;
    use(req: Request, res: Response, next: NextFunction): Promise<void>;
}
export declare class HttpDebuggerWriteIntoConsoleMiddleware implements NestMiddleware {
    private readonly configService;
    private readonly writeIntoConsole;
    constructor(configService: ConfigService);
    private httpLogger;
    use(req: Request, res: Response, next: NextFunction): Promise<void>;
}
export declare class HttpDebuggerResponseMiddleware implements NestMiddleware {
    private readonly configService;
    private readonly writeIntoFile;
    private readonly writeIntoConsole;
    constructor(configService: ConfigService);
    use(req: Request, res: Response, next: NextFunction): void;
}
