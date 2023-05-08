import { MongooseOptionsFactory, MongooseModuleOptions } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';
import { IDatabaseOptionsService } from 'src/common/database/interfaces/database.options-service.interface';
export declare class DatabaseOptionsService implements MongooseOptionsFactory, IDatabaseOptionsService {
    private readonly configService;
    private readonly host;
    private readonly database;
    private readonly user;
    private readonly password;
    private readonly debug;
    private readonly options;
    private readonly env;
    constructor(configService: ConfigService);
    createMongooseOptions(): MongooseModuleOptions;
}
