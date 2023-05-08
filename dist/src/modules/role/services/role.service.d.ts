import { IDatabaseCreateOptions, IDatabaseSoftDeleteOptions, IDatabaseExistOptions, IDatabaseFindAllOptions, IDatabaseFindOneOptions, IDatabaseOptions } from 'src/common/database/interfaces/database.interface';
import { RoleCreateDto } from 'src/modules/role/dtos/role.create.dto';
import { RoleUpdateDto } from 'src/modules/role/dtos/role.update.dto';
import { IRoleService } from 'src/modules/role/interfaces/role.service.interface';
import { RoleRepository } from 'src/modules/role/repositories/role.repository';
import { RoleDocument } from 'src/modules/role/schemas/role.schema';
export declare class RoleService implements IRoleService {
    private readonly roleRepository;
    constructor(roleRepository: RoleRepository);
    findAll<T>(find?: Record<string, any>, options?: IDatabaseFindAllOptions): Promise<T[]>;
    findOneById<T>(_id: string, options?: IDatabaseFindOneOptions): Promise<T>;
    findOne<T>(find: Record<string, any>, options?: IDatabaseFindOneOptions): Promise<T>;
    getTotal(find?: Record<string, any>, options?: IDatabaseOptions): Promise<number>;
    exists(name: string, options?: IDatabaseExistOptions): Promise<boolean>;
    create({ name, permissions, accessFor }: RoleCreateDto, options?: IDatabaseCreateOptions): Promise<RoleDocument>;
    createSuperAdmin(options?: IDatabaseCreateOptions): Promise<RoleDocument>;
    update(_id: string, { name, permissions, accessFor }: RoleUpdateDto, options?: IDatabaseOptions): Promise<RoleDocument>;
    inactive(_id: string, options?: IDatabaseOptions): Promise<RoleDocument>;
    active(_id: string, options?: IDatabaseOptions): Promise<RoleDocument>;
    deleteOneById(_id: string, options?: IDatabaseSoftDeleteOptions): Promise<RoleDocument>;
    deleteOne(find: Record<string, any>, options?: IDatabaseSoftDeleteOptions): Promise<RoleDocument>;
}
