import {
    Injectable,
    CanActivate,
    ExecutionContext,
    NotFoundException,
} from '@nestjs/common';
import { ENUM_STOCK_STATUS_CODE_ERROR } from 'src/modules/stock/constants/stock.status-code.constant';

@Injectable()
export class StockNotFoundGuard implements CanActivate {
    async canActivate(context: ExecutionContext): Promise<boolean> {
        const { __stock } = context.switchToHttp().getRequest();

        if (!__stock) {
            throw new NotFoundException({
                statusCode: ENUM_STOCK_STATUS_CODE_ERROR.STOCK_NOT_FOUND_ERROR,
                message: 'stock.error.notFound',
            });
        }

        return true;
    }
}