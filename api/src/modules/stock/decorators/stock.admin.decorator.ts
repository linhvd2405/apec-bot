import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';
import { STOCK_ACTIVE_META_KEY } from 'src/modules/stock/constants/stock.constant';
import { StockActiveGuard } from 'src/modules/stock/guards/stock.active.guard';
import { StockNotFoundGuard } from 'src/modules/stock/guards/stock.not-found.guard';
import { StockPutToRequestGuard } from 'src/modules/stock/guards/stock.put-to-request.guard';
import { StockUsedGuard } from 'src/modules/stock/guards/stock.used.guard';

export function StockGetGuard(): any {
    return applyDecorators(UseGuards(StockPutToRequestGuard, StockNotFoundGuard));
}

export function StockUpdateGuard(): any {
    return applyDecorators(
        UseGuards(
            StockPutToRequestGuard,
            StockNotFoundGuard,
            StockActiveGuard,
            StockUsedGuard
        ),
        SetMetadata(STOCK_ACTIVE_META_KEY, [true])
    );
}

export function StockDeleteGuard(): any {
    return applyDecorators(
        UseGuards(
            StockPutToRequestGuard,
            StockNotFoundGuard,
            StockActiveGuard,
            StockUsedGuard
        ),
        SetMetadata(STOCK_ACTIVE_META_KEY, [true])
    );
}

export function StockUpdateActiveGuard(): any {
    return applyDecorators(
        UseGuards(StockPutToRequestGuard, StockNotFoundGuard, StockActiveGuard),
        SetMetadata(STOCK_ACTIVE_META_KEY, [false])
    );
}

export function StockUpdateInactiveGuard(): any {
    return applyDecorators(
        UseGuards(StockPutToRequestGuard, StockNotFoundGuard, StockActiveGuard),
        SetMetadata(STOCK_ACTIVE_META_KEY, [true])
    );
}
