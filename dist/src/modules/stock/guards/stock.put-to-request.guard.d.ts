import { CanActivate, ExecutionContext } from '@nestjs/common';
import { StockService } from 'src/modules/stock/services/stock.service';
export declare class StockPutToRequestGuard implements CanActivate {
    private readonly stockService;
    constructor(stockService: StockService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
