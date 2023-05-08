import { AwsS3Serialization } from 'src/common/aws/serializations/aws.s3.serialization';
export declare class AwsS3MultipartPartsSerialization {
    ETag: string;
    PartNumber: number;
}
declare const AwsS3MultipartSerialization_base: import("@nestjs/common").Type<Partial<AwsS3Serialization>>;
export declare class AwsS3MultipartSerialization extends AwsS3MultipartSerialization_base {
    uploadId: string;
    partNumber?: number;
    maxPartNumber?: number;
    parts?: AwsS3MultipartPartsSerialization[];
}
export {};
