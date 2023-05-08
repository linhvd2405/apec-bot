import { IStock } from '../stock/interfaces/stock._id.interface';
import { ScreenshotWorker } from '../stock/services/screenshot-worker';
export declare class ScreenshotWorkerService {
    private maxWorkerCount;
    private activeWorkers;
    processScreenshot(stock: IStock): Promise<void>;
    onWorkerComplete: (worker: ScreenshotWorker) => void;
}
