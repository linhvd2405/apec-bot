import { ENUM_AUTH_ACCESS_FOR_DEFAULT } from 'src/common/auth/constants/auth.enum.constant';
export declare class RoleCreateDto {
    readonly name: string;
    readonly permissions: string[];
    readonly accessFor: ENUM_AUTH_ACCESS_FOR_DEFAULT;
}
