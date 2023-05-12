import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { CronService } from './cron.service';
import {StockModule} from '../stock/stock.module'

@Module({
  imports: [ScheduleModule.forRoot(), StockModule],
  providers: [CronService],
})
export class CronModule {}

