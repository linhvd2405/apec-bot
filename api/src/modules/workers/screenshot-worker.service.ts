import { Injectable } from '@nestjs/common';
import { IStock } from '../stock/interfaces/stock._id.interface';
import { ScreenshotWorker } from '../stock/services/screenshot-worker';

@Injectable()
export class ScreenshotWorkerService {
  private maxWorkerCount = 20;
  private activeWorkers: ScreenshotWorker[] = [];

  async processScreenshot(stock: IStock) {
    if (this.activeWorkers.length < this.maxWorkerCount) {
      const worker = new ScreenshotWorker(stock);
      this.activeWorkers.push(worker);
      await worker.run();
    } else {
      console.log('Worker pool is full.');
    }
  }

  onWorkerComplete = (worker: ScreenshotWorker) => {
    const index = this.activeWorkers.indexOf(worker);
    if (index > -1) {
      this.activeWorkers.splice(index, 1);
    }
  };
}

