import {
    Injectable,
    CanActivate,
    ExecutionContext,
    BadRequestException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { STOCK_ACTIVE_META_KEY } from 'src/modules/stock/constants/stock.constant';
import { ENUM_STOCK_STATUS_CODE_ERROR } from 'src/modules/stock/constants/stock.status-code.constant';

@Injectable()
export class StockActiveGuard implements CanActivate {
    constructor(private reflector: Reflector) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const required: boolean[] = this.reflector.getAllAndOverride<boolean[]>(
            STOCK_ACTIVE_META_KEY,
            [context.getHandler(), context.getClass()]
        );

        if (!required) {
            return true;
        }

        const { __stock } = context.switchToHttp().getRequest();

        if (!required.includes(__stock.isActive)) {
            throw new BadRequestException({
                statusCode: ENUM_STOCK_STATUS_CODE_ERROR.STOCK_ACTIVE_ERROR,
                message: 'stock.error.active',
            });
        }
        return true;
    }
}
