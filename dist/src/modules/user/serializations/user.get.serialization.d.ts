import { AwsS3Serialization } from 'src/common/aws/serializations/aws.s3.serialization';
import { IRoleDocument } from 'src/modules/role/interfaces/role.interface';
export declare class UserGetSerialization {
    readonly _id: string;
    readonly role: IRoleDocument;
    readonly email: string;
    readonly mobileNumber: string;
    readonly isActive: boolean;
    readonly firstName: string;
    readonly lastName: string;
    readonly photo?: AwsS3Serialization;
    get fullName(): string;
    readonly password: string;
    readonly passwordExpired: Date;
    readonly salt: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
