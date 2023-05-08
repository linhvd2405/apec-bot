import { PaginationService } from 'src/common/pagination/services/pagination.service';
import { IResponse, IResponsePaging } from 'src/common/response/interfaces/response.interface';
import { PermissionService } from 'src/modules/permission/services/permission.service';
import { RoleCreateDto } from 'src/modules/role/dtos/role.create.dto';
import { RoleListDto } from 'src/modules/role/dtos/role.list.dto';
import { RoleUpdateDto } from 'src/modules/role/dtos/role.update.dto';
import { IRoleDocument } from 'src/modules/role/interfaces/role.interface';
import { RoleDocument } from 'src/modules/role/schemas/role.schema';
import { RoleService } from 'src/modules/role/services/role.service';
export declare class RoleAdminController {
    private readonly paginationService;
    private readonly roleService;
    private readonly permissionService;
    constructor(paginationService: PaginationService, roleService: RoleService, permissionService: PermissionService);
    list({ page, perPage, sort, search, availableSort, availableSearch, }: RoleListDto): Promise<IResponsePaging>;
    get(role: IRoleDocument): Promise<IResponse>;
    create({ name, permissions, accessFor }: RoleCreateDto): Promise<IResponse>;
    update(role: RoleDocument, { name, permissions, accessFor }: RoleUpdateDto): Promise<IResponse>;
    delete(role: IRoleDocument): Promise<void>;
    inactive(role: IRoleDocument): Promise<void>;
    active(role: IRoleDocument): Promise<void>;
}
