import { Model } from 'mongoose';
import { DatabaseMongoRepositoryAbstract } from 'src/common/database/abstracts/database.mongo-repository.abstract';
import { IDatabaseRepositoryAbstract } from 'src/common/database/interfaces/database.repository.interface';
import { BotDocument } from 'src/modules/bot/schemas/bot.schema';
export declare class BotRepository extends DatabaseMongoRepositoryAbstract<BotDocument> implements IDatabaseRepositoryAbstract<BotDocument> {
    private readonly botModel;
    constructor(botModel: Model<BotDocument>);
}
