import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DATABASE_CONNECTION_NAME } from 'src/common/database/constants/database.constant';
import { StockRepository } from './repositories/stock.repository';
import { StockSchema, StockEntity, StockDatabaseName } from './schemas/stock.schema';
import { StockService } from './services/stock.service';
import { StockBulkService } from './services/stock.bulk.service';
import { StockBulkRepository } from './repositories/stock.bulk.repository';
import { ScreenshotWorkerService } from '../workers/screenshot-worker.service';
@Module({
  controllers: [],
  providers: [
    StockService, 
    StockRepository,
    StockBulkService,
    StockBulkRepository,
    ScreenshotWorkerService,
  ],
  exports: [
    StockService, 
    StockBulkService, 
    ScreenshotWorkerService,
  ],
  imports: [
    MongooseModule.forFeature(
      [
        { 
          name: StockEntity.name,
          schema: StockSchema,
          collection: StockDatabaseName ,
        },
      ],
      DATABASE_CONNECTION_NAME
    ),
  ],
})
export class StockModule {}
