import { CanActivate, ExecutionContext } from '@nestjs/common';
export declare class PermissionNotFoundGuard implements CanActivate {
    canActivate(context: ExecutionContext): Promise<boolean>;
}
