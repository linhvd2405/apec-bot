import { PaginationService } from 'src/common/pagination/services/pagination.service';
import { IResponse, IResponsePaging } from 'src/common/response/interfaces/response.interface';
import { PermissionListDto } from 'src/modules/permission/dtos/permission.list.dto';
import { PermissionUpdateDto } from 'src/modules/permission/dtos/permission.update.dto';
import { PermissionDocument } from 'src/modules/permission/schemas/permission.schema';
import { PermissionService } from 'src/modules/permission/services/permission.service';
export declare class PermissionAdminController {
    private readonly paginationService;
    private readonly permissionService;
    constructor(paginationService: PaginationService, permissionService: PermissionService);
    list({ page, perPage, sort, search, availableSort, availableSearch, isActive, }: PermissionListDto): Promise<IResponsePaging>;
    get(permission: PermissionDocument): Promise<IResponse>;
    update(permission: PermissionDocument, body: PermissionUpdateDto): Promise<IResponse>;
    inactive(permission: PermissionDocument): Promise<void>;
    active(permission: PermissionDocument): Promise<void>;
}
