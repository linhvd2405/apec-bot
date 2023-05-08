import { IAuthEnumService } from 'src/common/auth/interfaces/auth.enum-service.interface';
export declare class AuthEnumService implements IAuthEnumService {
    getAccessFor(): Promise<string[]>;
}
