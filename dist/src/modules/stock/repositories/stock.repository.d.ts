import { Model } from 'mongoose';
import { DatabaseMongoRepositoryAbstract } from 'src/common/database/abstracts/database.mongo-repository.abstract';
import { IDatabaseRepositoryAbstract } from 'src/common/database/interfaces/database.repository.interface';
import { StockDocument } from 'src/modules/stock/schemas/stock.schema';
export declare class StockRepository extends DatabaseMongoRepositoryAbstract<StockDocument> implements IDatabaseRepositoryAbstract<StockDocument> {
    private readonly stockModel;
    constructor(stockModel: Model<StockDocument>);
}
