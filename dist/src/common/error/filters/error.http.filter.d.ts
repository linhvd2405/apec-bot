import { ExceptionFilter, ArgumentsHost } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpAdapterHost } from '@nestjs/core';
import { DebuggerService } from 'src/common/debugger/services/debugger.service';
import { IErrorException } from 'src/common/error/interfaces/error.interface';
import { HelperDateService } from 'src/common/helper/services/helper.date.service';
import { MessageService } from 'src/common/message/services/message.service';
export declare class ErrorHttpFilter implements ExceptionFilter {
    private readonly debuggerService;
    private readonly configService;
    private readonly messageService;
    private readonly httpAdapterHost;
    private readonly helperDateService;
    constructor(debuggerService: DebuggerService, configService: ConfigService, messageService: MessageService, httpAdapterHost: HttpAdapterHost, helperDateService: HelperDateService);
    catch(exception: unknown, host: ArgumentsHost): Promise<void>;
    isErrorException(obj: any): obj is IErrorException;
}
