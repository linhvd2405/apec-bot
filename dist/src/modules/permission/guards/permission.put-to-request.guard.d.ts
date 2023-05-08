import { CanActivate, ExecutionContext } from '@nestjs/common';
import { PermissionService } from 'src/modules/permission/services/permission.service';
export declare class PermissionPutToRequestGuard implements CanActivate {
    private readonly permissionService;
    constructor(permissionService: PermissionService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
