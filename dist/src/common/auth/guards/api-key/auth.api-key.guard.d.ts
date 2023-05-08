import { ExecutionContext } from '@nestjs/common';
import { HelperNumberService } from 'src/common/helper/services/helper.number.service';
declare const ApiKeyGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class ApiKeyGuard extends ApiKeyGuard_base {
    private readonly helperNumberService;
    constructor(helperNumberService: HelperNumberService);
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | import("rxjs").Observable<boolean>;
    handleRequest<TUser = any>(err: Record<string, any>, user: TUser, info: Error | string): TUser;
}
export {};
