import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { StockBulkService } from '../stock/services/stock.bulk.service';

@Injectable()
export class CronService {
  constructor(private readonly stockBulkService: StockBulkService) {}

  @Cron('0 0 * * *') // Chạy vào 0h mỗi ngày
  async handleCron() {
    const result = await this.stockBulkService.deleteMany({}); // Xoá tất cả các documents trong collection stocks
    console.log(`Đã xóa ${result} documents.`);
  }
}
