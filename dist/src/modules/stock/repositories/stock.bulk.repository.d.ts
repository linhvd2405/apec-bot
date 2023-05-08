import { Model } from 'mongoose';
import { DatabaseMongoBulkRepositoryAbstract } from 'src/common/database/abstracts/database.mongo-bulk-repository.abstract';
import { IDatabaseBulkRepositoryAbstract } from 'src/common/database/interfaces/database.bulk.repository.interface';
import { StockDocument } from 'src/modules/stock/schemas/stock.schema';
export declare class StockBulkRepository extends DatabaseMongoBulkRepositoryAbstract<StockDocument> implements IDatabaseBulkRepositoryAbstract {
    private readonly stockModel;
    constructor(stockModel: Model<StockDocument>);
}
