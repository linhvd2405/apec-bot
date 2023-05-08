import { PermissionBulkService } from 'src/modules/permission/services/permission.bulk.service';
export declare class PermissionSeed {
    private readonly permissionBulkService;
    constructor(permissionBulkService: PermissionBulkService);
    insert(): Promise<void>;
    remove(): Promise<void>;
}
