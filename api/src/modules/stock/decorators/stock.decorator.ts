import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { StockDocument } from 'src/modules/stock/schemas/stock.schema';

export const GetStock = createParamDecorator(
    (data: string, ctx: ExecutionContext): StockDocument => {
        const { __stock } = ctx.switchToHttp().getRequest();
        return __stock;
    }
);
