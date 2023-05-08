import { Types } from 'mongoose';
import { AwsS3Serialization } from 'src/common/aws/serializations/aws.s3.serialization';
import { UserGetSerialization } from './user.get.serialization';
declare const UserListSerialization_base: import("@nestjs/common").Type<Omit<UserGetSerialization, "passwordExpired" | "role" | "photo">>;
export declare class UserListSerialization extends UserListSerialization_base {
    readonly role: Types.ObjectId;
    readonly photo?: AwsS3Serialization;
    readonly passwordExpired: Date;
}
export {};
