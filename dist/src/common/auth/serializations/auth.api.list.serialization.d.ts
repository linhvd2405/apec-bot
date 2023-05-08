import { AuthApiGetSerialization } from './auth.api.get.serialization';
declare const AuthApiListSerialization_base: import("@nestjs/common").Type<Pick<AuthApiGetSerialization, "_id" | "name" | "key" | "isActive" | "createdAt">>;
export declare class AuthApiListSerialization extends AuthApiListSerialization_base {
}
export {};
