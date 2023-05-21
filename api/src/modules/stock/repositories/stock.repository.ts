import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { DatabaseMongoRepositoryAbstract } from 'src/common/database/abstracts/database.mongo-repository.abstract';
import { DatabaseEntity } from 'src/common/database/decorators/database.decorator';
import { IDatabaseRepositoryAbstract } from 'src/common/database/interfaces/database.repository.interface';
import { StockDocument, StockEntity } from 'src/modules/stock/schemas/stock.schema';

@Injectable()
export class StockRepository 
    extends DatabaseMongoRepositoryAbstract<StockDocument>
    implements IDatabaseRepositoryAbstract<StockDocument>
  {
    constructor(

    @DatabaseEntity(StockEntity.name)
        private readonly stockModel: Model<StockDocument>
    ) {
        super(stockModel);
    }
}
