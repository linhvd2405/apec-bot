import { IDatabaseCreateManyOptions, IDatabaseManyOptions } from 'src/common/database/interfaces/database.interface';
import { RoleCreateDto } from 'src/modules/role/dtos/role.create.dto';
import { IRoleBulkService } from 'src/modules/role/interfaces/role.bulk-service.interface';
import { RoleBulkRepository } from 'src/modules/role/repositories/role.bulk.repository';
export declare class RoleBulkService implements IRoleBulkService {
    private readonly roleBulkRepository;
    constructor(roleBulkRepository: RoleBulkRepository);
    deleteMany(find: Record<string, any>, options?: IDatabaseManyOptions): Promise<boolean>;
    createMany(data: RoleCreateDto[], options?: IDatabaseCreateManyOptions): Promise<boolean>;
}
