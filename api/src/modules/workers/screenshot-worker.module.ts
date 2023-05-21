import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StockEntity, StockSchema } from '../stock/schemas/stock.schema';
import { ScreenshotWorkerService } from './screenshot-worker.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: StockEntity.name, schema: StockSchema }])
  ],
  providers: [ScreenshotWorkerService],
  exports: [ScreenshotWorkerService],
})
export class ScreenshotWorkerModule {}

