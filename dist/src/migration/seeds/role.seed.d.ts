import { RoleService } from 'src/modules/role/services/role.service';
import { RoleBulkService } from 'src/modules/role/services/role.bulk.service';
import { PermissionService } from 'src/modules/permission/services/permission.service';
export declare class RoleSeed {
    private readonly permissionService;
    private readonly roleBulkService;
    private readonly roleService;
    constructor(permissionService: PermissionService, roleBulkService: RoleBulkService, roleService: RoleService);
    insert(): Promise<void>;
    remove(): Promise<void>;
}
