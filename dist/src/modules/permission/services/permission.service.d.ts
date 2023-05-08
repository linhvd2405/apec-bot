import { IDatabaseCreateOptions, IDatabaseSoftDeleteOptions, IDatabaseFindAllOptions, IDatabaseFindOneOptions, IDatabaseOptions } from 'src/common/database/interfaces/database.interface';
import { PermissionCreateDto } from 'src/modules/permission/dtos/permission.create.dto';
import { PermissionUpdateDto } from 'src/modules/permission/dtos/permission.update.dto';
import { IPermissionService } from 'src/modules/permission/interfaces/permission.service.interface';
import { PermissionRepository } from 'src/modules/permission/repositories/permission.repository';
import { PermissionDocument } from 'src/modules/permission/schemas/permission.schema';
export declare class PermissionService implements IPermissionService {
    private readonly permissionRepository;
    constructor(permissionRepository: PermissionRepository);
    findAll(find?: Record<string, any>, options?: IDatabaseFindAllOptions): Promise<PermissionDocument[]>;
    findOneById(_id: string, options?: IDatabaseFindOneOptions): Promise<PermissionDocument>;
    findOne(find: Record<string, any>, options?: IDatabaseFindOneOptions): Promise<PermissionDocument>;
    getTotal(find?: Record<string, any>, options?: IDatabaseOptions): Promise<number>;
    deleteOne(find: Record<string, any>, options?: IDatabaseSoftDeleteOptions): Promise<PermissionDocument>;
    create(data: PermissionCreateDto, options?: IDatabaseCreateOptions): Promise<PermissionDocument>;
    update(_id: string, data: PermissionUpdateDto, options?: IDatabaseOptions): Promise<PermissionDocument>;
    inactive(_id: string, options?: IDatabaseOptions): Promise<PermissionDocument>;
    active(_id: string, options?: IDatabaseOptions): Promise<PermissionDocument>;
}
