import { CanActivate, ExecutionContext } from '@nestjs/common';
export declare class StockNotFoundGuard implements CanActivate {
    canActivate(context: ExecutionContext): Promise<boolean>;
}
