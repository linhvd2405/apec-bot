import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { HelperFileService } from 'src/common/helper/services/helper.file.service';
import { Reflector } from '@nestjs/core';
export declare class ResponseExcelInterceptor implements NestInterceptor<Promise<any>> {
    private readonly reflector;
    private readonly helperFileService;
    constructor(reflector: Reflector, helperFileService: HelperFileService);
    intercept(context: ExecutionContext, next: CallHandler): Promise<Observable<Promise<Record<string, any>>>>;
}
