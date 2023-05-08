import { AuthEnumService } from 'src/common/auth/services/auth.enum.service';
import { IResponse } from 'src/common/response/interfaces/response.interface';
export declare class AuthEnumController {
    private readonly authEnumService;
    constructor(authEnumService: AuthEnumService);
    accessFor(): Promise<IResponse>;
}
