import { AwsS3Serialization } from 'src/common/aws/serializations/aws.s3.serialization';
import { IUserRolePayload } from 'src/modules/user/interfaces/user.interface';
import { UserGetSerialization } from './user.get.serialization';
declare const UserPayloadSerialization_base: import("@nestjs/common").Type<Omit<UserGetSerialization, "isActive" | "passwordExpired" | "role" | "photo">>;
export declare class UserPayloadSerialization extends UserPayloadSerialization_base {
    readonly photo?: AwsS3Serialization;
    readonly role: IUserRolePayload;
    readonly isActive: boolean;
    readonly passwordExpired: Date;
}
export {};
