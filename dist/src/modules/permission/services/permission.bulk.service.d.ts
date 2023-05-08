import { IAuthPermission } from 'src/common/auth/interfaces/auth.interface';
import { IDatabaseCreateManyOptions, IDatabaseManyOptions } from 'src/common/database/interfaces/database.interface';
import { IPermissionBulkService } from 'src/modules/permission/interfaces/permission.bulk-service.interface';
import { PermissionBulkRepository } from 'src/modules/permission/repositories/permission.bulk.repository';
export declare class PermissionBulkService implements IPermissionBulkService {
    private readonly permissionBulkRepository;
    constructor(permissionBulkRepository: PermissionBulkRepository);
    createMany(data: IAuthPermission[], options?: IDatabaseCreateManyOptions): Promise<boolean>;
    deleteMany(find: Record<string, any>, options?: IDatabaseManyOptions): Promise<boolean>;
}
