import { AuthService } from 'src/common/auth/services/auth.service';
import { AwsS3Service } from 'src/common/aws/services/aws.s3.service';
import { IFile } from 'src/common/file/interfaces/file.interface';
import { IResponse } from 'src/common/response/interfaces/response.interface';
import { UserChangePasswordDto } from 'src/modules/user/dtos/user.change-password.dto';
import { UserLoginDto } from 'src/modules/user/dtos/user.login.dto';
import { IUserDocument } from 'src/modules/user/interfaces/user.interface';
import { UserService } from 'src/modules/user/services/user.service';
export declare class UserController {
    private readonly authService;
    private readonly userService;
    private readonly awsService;
    constructor(authService: AuthService, userService: UserService, awsService: AwsS3Service);
    profile(user: IUserDocument): Promise<IResponse>;
    upload(user: IUserDocument, file: IFile): Promise<void>;
    changePassword(body: UserChangePasswordDto, _id: string): Promise<void>;
    login(body: UserLoginDto): Promise<IResponse>;
    refresh({ _id, rememberMe, loginDate }: Record<string, any>, refreshToken: string): Promise<IResponse>;
}
