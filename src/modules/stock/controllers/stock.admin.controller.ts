import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  InternalServerErrorException,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PaginationService } from 'src/common/pagination/services/pagination.service';
import {
  IResponse,
  IResponsePaging,
} from 'src/common/response/interfaces/response.interface';
import {
  Response,
  ResponsePaging,
} from 'src/common/response/decorators/response.decorator';
import { ResponseIdSerialization } from 'src/common/response/serializations/response.id.serialization';
import { ENUM_ERROR_STATUS_CODE_ERROR } from 'src/common/error/constants/error.status-code.constant';
import { GetStock } from 'src/modules/stock/decorators/stock.decorator';
import { StockCreateDto } from '../dtos/stock.create.dto';
import { StockService } from '../services/stock.service';
import { StockListDto } from 'src/modules/stock/dtos/stock.list.dto';
import { StockDocument } from 'src/modules/stock/schemas/stock.schema';
import { StockDocParamsGet } from 'src/modules/stock/constants/stock.doc.constant';
import { IStockDocument } from 'src/modules/stock/interfaces/stock.interface';
import { StockUpdateDto } from 'src/modules/stock/dtos/stock.update.dto';
import { StockGetSerialization } from 'src/modules/stock/serializations/stock.get.serialization'
import {IStock} from 'src/modules/stock/interfaces/stock._id.interface'






@ApiTags('modules.admin.stock')
@Controller({
  version: '1',
  path: '/stock',
})
export class StockAdminController {
  constructor(
    private readonly paginationService: PaginationService,
    private readonly stockService: StockService,
  ) { }

  @ResponsePaging('stock.list')

  @Get('/list')
  async list(
    @Query()
    {
      page,
      perPage,
      sort,
      search,
      availableSort,
      availableSearch,
    }: StockListDto
  ): Promise<IResponsePaging> {
    const skip: number = await this.paginationService.skip(page, perPage);
    const find: Record<string, any> = {
      ...search,
    };

    const stocks: StockDocument[] = await this.stockService.findAll(find, {
      skip: skip,
      limit: perPage,
      sort,
    });

    const totalData: number = await this.stockService.getTotal({});
    const totalPage: number = await this.paginationService.totalPage(
      totalData,
      perPage
    );

    return {
      totalData,
      totalPage,
      currentPage: page,
      perPage,
      availableSearch,
      availableSort,
      data: stocks,
    };
  }

  @Response('stock.get', {
    classSerialization: StockGetSerialization,
    doc: { params: StockDocParamsGet },
  })
  

  @Get(':_id')
  async getStock(@Param('_id') _id: string): Promise<IResponse> {
    const stock: IStock = await this.stockService.findOneById(_id);
    console.log({ stock })
    return {
      data: stock,
    };
  }


  @Get(':_id/status')
  async getStockStatus(@Param('_id') _id: string): Promise<IResponse> {
    const stock: IStock = await this.stockService.findOneById(_id);
    console.log({ status: stock.status, stockCode: stock.stockCode })
    return {
      data: { status: stock.status, stockCode: stock.stockCode },
    };
  }

  
  @Response('stock.create', {
    classSerialization: ResponseIdSerialization,
    doc: {
      httpStatus: HttpStatus.CREATED,
    },
  })

  @Post('/create')
  async createStock(
    @Body()
    
    stockCreateDto: StockCreateDto)
    : Promise<IResponse> {

    await this.stockService.exists(stockCreateDto.stockCode);

    try {
      const create = await this.stockService.create(stockCreateDto);
      this.stockService.screenshot(create);
      
      return {
        _id: create._id,
      };

    } 
    catch (err: any) {
        throw new InternalServerErrorException({
            statusCode: ENUM_ERROR_STATUS_CODE_ERROR.ERROR_UNKNOWN,
            message: 'http.serverError.internalServerError',
            error: err.message,
        });
    }

  }



  @Response('stock.update', {
    classSerialization: ResponseIdSerialization,
    doc: { params: StockDocParamsGet },
  })

  @Put('/update/:stock')
  async update(
    @GetStock() stock: StockDocument,
    @Body()
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
      macd, }: StockUpdateDto
  ): Promise<IResponse> {


    await this.stockService.exists(stockCode);
      try {
        await this.stockService.update(stock._id, {
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
        });
      } 
      catch (err: any) {
        throw new InternalServerErrorException({
          statusCode: ENUM_ERROR_STATUS_CODE_ERROR.ERROR_UNKNOWN,
          message: 'http.serverError.internalServerError',
          error: err.message,
        });
      }
    

    return {
      _id: stock._id,
    };
  }

  @Response('stock.delete', { doc: { params: StockDocParamsGet } })
  
  @Delete('/delete/:stock')
  async delete(@GetStock() stock: IStockDocument): Promise<void> {
    try {
      await this.stockService.deleteOneById(stock._id);
    } catch (err: any) {
      throw new InternalServerErrorException({
        statusCode: ENUM_ERROR_STATUS_CODE_ERROR.ERROR_UNKNOWN,
        message: 'http.serverError.internalServerError',
        error: err.message,
      });
    }
    return;
  }

  @Response('stock.inactive', { doc: { params: StockDocParamsGet } })
  
  @Patch('/update/:stock/inactive')
  async inactive(@GetStock() stock: IStockDocument): Promise<void> {
    try {
      await this.stockService.inactive(stock._id);
    } catch (err: any) {
      throw new InternalServerErrorException({
        statusCode: ENUM_ERROR_STATUS_CODE_ERROR.ERROR_UNKNOWN,
        message: 'http.serverError.internalServerError',
        error: err.message,
      });
    }

    return;
  }

  @Response('stock.active', { doc: { params: StockDocParamsGet } })
  
  @Patch('/update/:stock/active')
  async active(@GetStock() stock: IStockDocument): Promise<void> {
    try {
      await this.stockService.active(stock._id);
    } catch (err: any) {
      throw new InternalServerErrorException({
        statusCode: ENUM_ERROR_STATUS_CODE_ERROR.ERROR_UNKNOWN,
        message: 'http.serverError.internalServerError',
        error: err.message,
      });
    }
    return;
  }
}
