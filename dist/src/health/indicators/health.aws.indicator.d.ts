import { HealthIndicator, HealthIndicatorResult } from '@nestjs/terminus';
import { AwsS3Service } from 'src/common/aws/services/aws.s3.service';
export declare class AwsHealthIndicator extends HealthIndicator {
    private readonly awsS3Service;
    constructor(awsS3Service: AwsS3Service);
    isHealthy(key: string): Promise<HealthIndicatorResult>;
}
