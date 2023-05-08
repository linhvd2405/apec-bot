import { UserGetSerialization } from './user.get.serialization';
declare const UserProfileSerialization_base: import("@nestjs/common").Type<Omit<UserGetSerialization, "createdAt" | "passwordExpired">>;
export declare class UserProfileSerialization extends UserProfileSerialization_base {
    readonly passwordExpired: Date;
    readonly createdAt: Date;
}
export {};
