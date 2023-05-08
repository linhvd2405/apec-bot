import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { IStockDocument } from 'src/modules/stock/interfaces/stock.interface';
import { StockService } from 'src/modules/stock/services/stock.service';

@Injectable()
export class StockPutToRequestGuard implements CanActivate {
    constructor(private readonly stockService: StockService) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const { params } = request;
        const { stock } = params;

        const check: IStockDocument =
            await this.stockService.findOneById<IStockDocument>(stock, {
                populate: true,
            });
        request.__stock = check;

        return true;
    }
}
