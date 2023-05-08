import { AuthService } from 'src/common/auth/services/auth.service';
import { IFileExtract } from 'src/common/file/interfaces/file.interface';
import { PaginationService } from 'src/common/pagination/services/pagination.service';
import { IResponse, IResponsePaging } from 'src/common/response/interfaces/response.interface';
import { RoleService } from 'src/modules/role/services/role.service';
import { UserCreateDto } from 'src/modules/user/dtos/user.create.dto';
import { UserImportDto } from 'src/modules/user/dtos/user.import.dto';
import { UserListDto } from 'src/modules/user/dtos/user.list.dto';
import { UserUpdateDto } from 'src/modules/user/dtos/user.update.dto';
import { IUserDocument } from 'src/modules/user/interfaces/user.interface';
import { UserService } from 'src/modules/user/services/user.service';
export declare class UserAdminController {
    private readonly authService;
    private readonly paginationService;
    private readonly userService;
    private readonly roleService;
    constructor(authService: AuthService, paginationService: PaginationService, userService: UserService, roleService: RoleService);
    list({ page, perPage, sort, search, availableSort, availableSearch, }: UserListDto): Promise<IResponsePaging>;
    get(user: IUserDocument): Promise<IResponse>;
    create(body: UserCreateDto): Promise<IResponse>;
    delete(user: IUserDocument): Promise<void>;
    update(user: IUserDocument, body: UserUpdateDto): Promise<IResponse>;
    inactive(user: IUserDocument): Promise<void>;
    active(user: IUserDocument): Promise<void>;
    import(file: IFileExtract<UserImportDto>): Promise<IResponse>;
}
