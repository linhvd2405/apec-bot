import { DiskHealthIndicator, HealthCheckService, MemoryHealthIndicator, MongooseHealthIndicator } from '@nestjs/terminus';
import { Connection } from 'mongoose';
import { IResponse } from 'src/common/response/interfaces/response.interface';
import { AwsHealthIndicator } from 'src/health/indicators/health.aws.indicator';
export declare class HealthController {
    private readonly databaseConnection;
    private readonly health;
    private readonly memoryHealthIndicator;
    private readonly diskHealthIndicator;
    private readonly databaseIndicator;
    private readonly awsIndicator;
    constructor(databaseConnection: Connection, health: HealthCheckService, memoryHealthIndicator: MemoryHealthIndicator, diskHealthIndicator: DiskHealthIndicator, databaseIndicator: MongooseHealthIndicator, awsIndicator: AwsHealthIndicator);
    checkAws(): Promise<IResponse>;
    checkDatabase(): Promise<IResponse>;
    checkMemoryHeap(): Promise<IResponse>;
    checkMemoryRss(): Promise<IResponse>;
    checkStorage(): Promise<IResponse>;
}
