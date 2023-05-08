import { ENUM_AUTH_PERMISSIONS } from 'src/common/auth/constants/auth.enum.permission.constant';
export declare function AuthJwtGuard(...permissions: ENUM_AUTH_PERMISSIONS[]): any;
export declare function AuthPublicJwtGuard(...permissions: ENUM_AUTH_PERMISSIONS[]): any;
export declare function AuthAdminJwtGuard(...permissions: ENUM_AUTH_PERMISSIONS[]): <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;
export declare function AuthRefreshJwtGuard(): any;
