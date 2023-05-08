import { Injectable } from '@nestjs/common';
import {
    IDatabaseCreateManyOptions,
    IDatabaseManyOptions,
} from 'src/common/database/interfaces/database.interface';
import { StockCreateDto } from 'src/modules/stock/dtos/stock.create.dto';
import { IStockBulkService } from 'src/modules/stock/interfaces/stock.bulk-service.interface';
import { StockBulkRepository } from 'src/modules/stock/repositories/stock.bulk.repository';



@Injectable()
export class StockBulkService implements IStockBulkService {
    constructor(private readonly stockBulkRepository: StockBulkRepository) {}

    async deleteMany(
        find: Record<string, any>,
        options?: IDatabaseManyOptions
    ): Promise<boolean> {
        return this.stockBulkRepository.deleteMany(find, options);
    }

    async createMany(
        data: StockCreateDto[],
        options?: IDatabaseCreateManyOptions
    ): Promise<boolean> {
        return this.stockBulkRepository.createMany<StockCreateDto>(data, options);
    }
}
