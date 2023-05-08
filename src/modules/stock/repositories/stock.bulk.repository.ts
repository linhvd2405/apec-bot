import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { DatabaseMongoBulkRepositoryAbstract } from 'src/common/database/abstracts/database.mongo-bulk-repository.abstract';
import { DatabaseEntity } from 'src/common/database/decorators/database.decorator';
import { IDatabaseBulkRepositoryAbstract } from 'src/common/database/interfaces/database.bulk.repository.interface';
import { StockDocument, StockEntity } from 'src/modules/stock/schemas/stock.schema';

@Injectable()
export class StockBulkRepository
    extends DatabaseMongoBulkRepositoryAbstract<StockDocument>
    implements IDatabaseBulkRepositoryAbstract
{
    constructor(
        @DatabaseEntity(StockEntity.name)
        private readonly stockModel: Model<StockDocument>
    ) {
        super(stockModel);
    }
}
