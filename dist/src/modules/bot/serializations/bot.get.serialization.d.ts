import { ENUM_AUTH_ACCESS_FOR } from 'src/common/auth/constants/auth.enum.constant';
import { PermissionDocument } from 'src/modules/permission/schemas/permission.schema';
export declare class BotGetSerialization {
    readonly _id: string;
    readonly isActive: boolean;
    readonly name: string;
    readonly accessFor: ENUM_AUTH_ACCESS_FOR;
    readonly permissions: PermissionDocument[];
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
