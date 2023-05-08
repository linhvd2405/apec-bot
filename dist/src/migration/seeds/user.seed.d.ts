import { AuthService } from 'src/common/auth/services/auth.service';
import { UserService } from 'src/modules/user/services/user.service';
import { UserBulkService } from 'src/modules/user/services/user.bulk.service';
import { RoleService } from 'src/modules/role/services/role.service';
export declare class UserSeed {
    private readonly authService;
    private readonly userService;
    private readonly userBulkService;
    private readonly roleService;
    constructor(authService: AuthService, userService: UserService, userBulkService: UserBulkService, roleService: RoleService);
    insert(): Promise<void>;
    remove(): Promise<void>;
}
