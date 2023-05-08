import { Model } from 'mongoose';
import { DatabaseMongoRepositoryAbstract } from 'src/common/database/abstracts/database.mongo-repository.abstract';
import { IDatabaseRepositoryAbstract } from 'src/common/database/interfaces/database.repository.interface';
import { LoggerDocument } from 'src/common/logger/schemas/logger.schema';
export declare class LoggerRepository extends DatabaseMongoRepositoryAbstract<LoggerDocument> implements IDatabaseRepositoryAbstract<LoggerDocument> {
    private readonly loggerModel;
    constructor(loggerModel: Model<LoggerDocument>);
}
