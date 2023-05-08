import { IStock } from '../interfaces/stock._id.interface';
export declare class ScreenshotWorker {
    private stock;
    constructor(stock: IStock);
    run(): Promise<void>;
}
