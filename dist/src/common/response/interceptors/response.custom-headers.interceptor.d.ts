import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { HelperDateService } from 'src/common/helper/services/helper.date.service';
export declare class ResponseCustomHeadersInterceptor implements NestInterceptor<Promise<any>> {
    private readonly helperDateService;
    constructor(helperDateService: HelperDateService);
    intercept(context: ExecutionContext, next: CallHandler): Promise<Observable<Promise<any> | string>>;
}
