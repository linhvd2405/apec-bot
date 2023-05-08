import { Model } from 'mongoose';
import { DatabaseMongoBulkRepositoryAbstract } from 'src/common/database/abstracts/database.mongo-bulk-repository.abstract';
import { IDatabaseBulkRepositoryAbstract } from 'src/common/database/interfaces/database.bulk.repository.interface';
import { BotDocument } from 'src/modules/bot/schemas/bot.schema';
export declare class BotBulkRepository extends DatabaseMongoBulkRepositoryAbstract<BotDocument> implements IDatabaseBulkRepositoryAbstract {
    private readonly botModel;
    constructor(botModel: Model<BotDocument>);
}
