import { CanActivate, ExecutionContext } from '@nestjs/common';
export declare class BotNotFoundGuard implements CanActivate {
    canActivate(context: ExecutionContext): Promise<boolean>;
}
