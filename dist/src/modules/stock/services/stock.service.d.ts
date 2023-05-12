import { StockDocument } from '../schemas/stock.schema';
import { StockCreateDto } from '../dtos/stock.create.dto';
import { StockUpdateDto } from 'src/modules/stock/dtos/stock.update.dto';
import { IStock } from 'src/modules/stock/interfaces/stock._id.interface';
import { IDatabaseCreateOptions, IDatabaseSoftDeleteOptions, IDatabaseExistOptions, IDatabaseFindAllOptions, IDatabaseFindOneOptions, IDatabaseOptions } from 'src/common/database/interfaces/database.interface';
import { StockRepository } from 'src/modules/stock/repositories/stock.repository';
import { IStockService } from 'src/modules/stock/interfaces/stock.service.interface';
import { ScreenshotWorkerService } from 'src/modules/workers/screenshot-worker.service';
export declare class StockService implements IStockService {
    private readonly stockRepository;
    private readonly screenshotWorkerService;
    constructor(stockRepository: StockRepository, screenshotWorkerService: ScreenshotWorkerService);
    findAll<T>(find?: Record<string, any>, options?: IDatabaseFindAllOptions): Promise<T[]>;
    findOneById<T>(_id: string, options?: IDatabaseFindOneOptions): Promise<T>;
    findOne<T>(find: Record<string, any>, options?: IDatabaseFindOneOptions): Promise<T>;
    getTotal(find?: Record<string, any>, options?: IDatabaseOptions): Promise<number>;
    exists(stockCode: string, options?: IDatabaseExistOptions): Promise<boolean>;
    create({ status, stockCode, nameCompany, exchangeCode, rating, industry, refPrice, liquidity, shortTrend, targetPrice, cutlossPrice, trandingDate, overview, marketCapital, sumVol10d, outstandingShares, eps, pe, de, roe, netRev, netInc, debt, loan, cfi, cfo, cff, stockCodes, reportDate, adx, rsi, macd, }: StockCreateDto, options?: IDatabaseCreateOptions): Promise<StockDocument>;
    screenshot(stock: IStock): Promise<void>;
    update(_id: string, { status, }: StockUpdateDto, options?: IDatabaseOptions): Promise<StockDocument>;
    inactive(_id: string, options?: IDatabaseOptions): Promise<StockDocument>;
    active(_id: string, options?: IDatabaseOptions): Promise<StockDocument>;
    deleteOneById(_id: string, options?: IDatabaseSoftDeleteOptions): Promise<StockDocument>;
    deleteOne(find: Record<string, any>, options?: IDatabaseSoftDeleteOptions): Promise<StockDocument>;
}
