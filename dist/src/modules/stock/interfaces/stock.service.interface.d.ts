import { IDatabaseCreateOptions, IDatabaseSoftDeleteOptions, IDatabaseExistOptions, IDatabaseFindAllOptions, IDatabaseFindOneOptions, IDatabaseOptions } from 'src/common/database/interfaces/database.interface';
import { StockCreateDto } from 'src/modules/stock/dtos/stock.create.dto';
import { StockUpdateDto } from 'src/modules/stock/dtos/stock.update.dto';
import { StockDocument } from 'src/modules/stock/schemas/stock.schema';
export interface IStockService {
    findAll<T>(find?: Record<string, any>, options?: IDatabaseFindAllOptions): Promise<T[]>;
    findOneById<T>(_id: string, options?: IDatabaseFindOneOptions): Promise<T>;
    findOne<T>(find: Record<string, any>, options?: IDatabaseFindOneOptions): Promise<T>;
    getTotal(find?: Record<string, any>, options?: IDatabaseOptions): Promise<number>;
    exists(stockCode: string, options?: IDatabaseExistOptions): Promise<boolean>;
    create(data: StockCreateDto, options?: IDatabaseCreateOptions): Promise<StockDocument>;
    update(_id: string, data: StockUpdateDto, options?: IDatabaseOptions): Promise<StockDocument>;
    inactive(_id: string, options?: IDatabaseOptions): Promise<StockDocument>;
    active(_id: string, options?: IDatabaseOptions): Promise<StockDocument>;
    deleteOneById(_id: string, options?: IDatabaseSoftDeleteOptions): Promise<StockDocument>;
    deleteOne(find: Record<string, any>, options?: IDatabaseSoftDeleteOptions): Promise<StockDocument>;
}
