import { Types } from 'mongoose';
import { RoleGetSerialization } from './role.get.serialization';
declare const RoleListSerialization_base: import("@nestjs/common").Type<Omit<RoleGetSerialization, "permissions">>;
export declare class RoleListSerialization extends RoleListSerialization_base {
    readonly permissions: Types.ObjectId;
}
export {};
