import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { StockEntity, StockDocument } from '../schemas/stock.schema';
import { StockCreateDto } from '../dtos/stock.create.dto';
import { StockUpdateDto } from 'src/modules/stock/dtos/stock.update.dto';
import {IStockUpdate} from 'src/modules/stock/interfaces/stock.interface';
import {IStock} from 'src/modules/stock/interfaces/stock._id.interface';

import {
  IDatabaseCreateOptions,
  IDatabaseSoftDeleteOptions,
  IDatabaseExistOptions,
  IDatabaseFindAllOptions,
  IDatabaseFindOneOptions,
  IDatabaseOptions,
} from 'src/common/database/interfaces/database.interface';
import {StockRepository} from 'src/modules/stock/repositories/stock.repository';
import { StockActiveDto } from 'src/modules/stock/dtos/stock.active.dto';
import { IStockService } from 'src/modules/stock/interfaces/stock.service.interface';
import {ScreenshotWorkerService} from 'src/modules/workers/screenshot-worker.service'



@Injectable()
export class StockService implements IStockService{
  constructor( 
    private readonly stockRepository: StockRepository,
    private readonly screenshotWorkerService : ScreenshotWorkerService,
    ) {}

  async findAll<T>(
    find?: Record<string, any>,
    options?: IDatabaseFindAllOptions,
  ): Promise<T[]> {
    return this.stockRepository.findAll<T>(find, options);
  }

  async findOneById<T>(
    _id: string,
    options?: IDatabaseFindOneOptions
  ): Promise<T> {
    return this.stockRepository.findOneById<T>(_id, options);
  }

  async findOne<T>(
    find: Record<string, any>,
    options?: IDatabaseFindOneOptions
): Promise<T> {
    return this.stockRepository.findOne<T>(find, options);
}

async getTotal(
  find?: Record<string, any>,
  options?: IDatabaseOptions
): Promise<number> {
  return this.stockRepository.getTotal(find, options);
}

async exists(
  stockCode: string,
  options?: IDatabaseExistOptions
): Promise<boolean> {
  return this.stockRepository.exists(
      {
          stockCode: {
              $regex: new RegExp(stockCode),
              $options: 'i',
          },
      },
      options
  );
}

async create(
  { 
    // _id,
    status,
    stockCode,
    nameCompany,
    exchangeCode,
    rating,
    industry,
    refPrice,
    liquidity,
    shortTrend,
    targetPrice,
    cutlossPrice,
    trandingDate,
    overview,
    marketCapital,
    sumVol10d,
    outstandingShares,
    eps,
    pe,
    de,
    roe,
    netRev,
    netInc,
    debt,
    loan,
    cfi,
    cfo,
    cff,
    stockCodes,
    reportDate,
    adx,
    rsi,
    macd,
   }: StockCreateDto,
  options?: IDatabaseCreateOptions
): Promise<StockDocument> {
  const create: StockEntity = {
    // _id,
    status,
    stockCode,
    nameCompany,
    exchangeCode,
    rating,
    industry,
    refPrice,
    liquidity,
    shortTrend,
    targetPrice,
    cutlossPrice,
    trandingDate,
    overview,
    marketCapital,
    sumVol10d,
    outstandingShares,
    eps,
    pe,
    de,
    roe,
    netRev,
    netInc,
    debt,
    loan,
    cfi,
    cfo,
    cff,
    stockCodes,
    reportDate,
    adx,
    rsi,
    macd,
    isActive: true,

  };
  create.status = 0
  return this.stockRepository.create<StockEntity>(create, options);
  // const savedStock = await this.stockRepository.create<StockEntity>(create, options);
  // this.screenshotWorkerService.processScreenshot(savedStock);
  // return savedStock;
}

async screenshot(stock : IStock): Promise<void> {
     this.screenshotWorkerService.processScreenshot(stock);
  } 




async update(
  _id: string,
  { 
    status,
    stockCode,
    nameCompany,
    exchangeCode,
    rating,
    industry,
    refPrice,
    liquidity,
    shortTrend,
    targetPrice,
    cutlossPrice,
    trandingDate,
    overview,
    marketCapital,
    sumVol10d,
    outstandingShares,
    eps,
    pe,
    de,
    roe,
    netRev,
    netInc,
    debt,
    loan,
    cfi,
    cfo,
    cff,
    stockCodes,
    reportDate,
    adx,
    rsi,
    macd, }: StockUpdateDto,
  options?: IDatabaseOptions
): Promise<StockDocument> {
  const update: IStockUpdate = {
    status,
    stockCode,
    nameCompany,
    exchangeCode,
    rating,
    industry,
    refPrice,
    liquidity,
    shortTrend,
    targetPrice,
    cutlossPrice,
    trandingDate,
    overview,
    marketCapital,
    sumVol10d,
    outstandingShares,
    eps,
    pe,
    de,
    roe,
    netRev,
    netInc,
    debt,
    loan,
    cfi,
    cfo,
    cff,
    stockCodes,
    reportDate,
    adx,
    rsi,
    macd,
  };
  // update.status = 'done processing';

  return this.stockRepository.updateOneById<IStockUpdate>(
      _id,
      update,
      options
  );
}

async inactive(
  _id: string,
  options?: IDatabaseOptions
): Promise<StockDocument> {
  const update: StockActiveDto = {
      isActive: false,
  };

  return this.stockRepository.updateOneById(_id, update, options);
}

async active(
  _id: string,
  options?: IDatabaseOptions
): Promise<StockDocument> {
  const update: StockActiveDto = {
      isActive: true,
  };

  return this.stockRepository.updateOneById(_id, update, options);
}

async deleteOneById(
  _id: string,
  options?: IDatabaseSoftDeleteOptions
): Promise<StockDocument> {
  return this.stockRepository.deleteOneById(_id, options);
}
async deleteOne(
  find: Record<string, any>,
  options?: IDatabaseSoftDeleteOptions
): Promise<StockDocument> {
  return this.stockRepository.deleteOne(find, options);
}
}
