import { PaginationService } from 'src/common/pagination/services/pagination.service';
import { IResponse, IResponsePaging } from 'src/common/response/interfaces/response.interface';
import { StockCreateDto } from '../dtos/stock.create.dto';
import { StockService } from '../services/stock.service';
import { StockListDto } from 'src/modules/stock/dtos/stock.list.dto';
import { StockDocument } from 'src/modules/stock/schemas/stock.schema';
import { IStockDocument } from 'src/modules/stock/interfaces/stock.interface';
import { StockUpdateDto } from 'src/modules/stock/dtos/stock.update.dto';
export declare class StockAdminController {
    private readonly paginationService;
    private readonly stockService;
    constructor(paginationService: PaginationService, stockService: StockService);
    list({ page, perPage, sort, search, availableSort, availableSearch, }: StockListDto): Promise<IResponsePaging>;
    getStock(_id: string): Promise<IResponse>;
    createStock(stockCreateDto: StockCreateDto): Promise<IResponse>;
    update(stock: StockDocument, { status, stockCode, nameCompany, exchangeCode, rating, industry, refPrice, liquidity, shortTrend, targetPrice, cutlossPrice, trandingDate, overview, marketCapital, sumVol10d, outstandingShares, eps, pe, de, roe, netRev, netInc, debt, loan, cfi, cfo, cff, stockCodes, reportDate, adx, rsi, macd, }: StockUpdateDto): Promise<IResponse>;
    delete(stock: IStockDocument): Promise<void>;
    inactive(stock: IStockDocument): Promise<void>;
    active(stock: IStockDocument): Promise<void>;
}
