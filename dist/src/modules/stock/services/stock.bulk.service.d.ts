import { IDatabaseCreateManyOptions, IDatabaseManyOptions } from 'src/common/database/interfaces/database.interface';
import { StockCreateDto } from 'src/modules/stock/dtos/stock.create.dto';
import { IStockBulkService } from 'src/modules/stock/interfaces/stock.bulk-service.interface';
import { StockBulkRepository } from 'src/modules/stock/repositories/stock.bulk.repository';
export declare class StockBulkService implements IStockBulkService {
    private readonly stockBulkRepository;
    constructor(stockBulkRepository: StockBulkRepository);
    deleteMany(find: Record<string, any>, options?: IDatabaseManyOptions): Promise<boolean>;
    createMany(data: StockCreateDto[], options?: IDatabaseCreateManyOptions): Promise<boolean>;
}
