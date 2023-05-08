import { AuthService } from 'src/common/auth/services/auth.service';
import { RoleService } from 'src/modules/role/services/role.service';
import { UserSignUpDto } from 'src/modules/user/dtos/user.sign-up.dto';
import { UserService } from 'src/modules/user/services/user.service';
export declare class UserPublicController {
    private readonly userService;
    private readonly authService;
    private readonly roleService;
    constructor(userService: UserService, authService: AuthService, roleService: RoleService);
    signUp({ email, mobileNumber, ...body }: UserSignUpDto): Promise<void>;
}
