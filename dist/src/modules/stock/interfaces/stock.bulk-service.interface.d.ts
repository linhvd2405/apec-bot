import { IDatabaseCreateManyOptions, IDatabaseManyOptions } from 'src/common/database/interfaces/database.interface';
import { StockCreateDto } from 'src/modules/stock/dtos/stock.create.dto';
export interface IStockBulkService {
    deleteMany(find: Record<string, any>, options?: IDatabaseManyOptions): Promise<boolean>;
    createMany(data: StockCreateDto[], options?: IDatabaseCreateManyOptions): Promise<boolean>;
}
