import {
    Injectable,
    CanActivate,
    ExecutionContext,
    BadRequestException,
} from '@nestjs/common';
import { Types } from 'mongoose';
import { ENUM_STOCK_STATUS_CODE_ERROR } from 'src/modules/stock/constants/stock.status-code.constant';
import { UserDocument } from 'src/modules/user/schemas/user.schema';
import { UserService } from 'src/modules/user/services/user.service';

@Injectable()
export class StockUsedGuard implements CanActivate {
    constructor(private readonly userService: UserService) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const { __stock } = context.switchToHttp().getRequest();
        const check: UserDocument = await this.userService.findOne({
            stock: new Types.ObjectId(__stock._id),
        });

        if (check) {
            throw new BadRequestException({
                statusCode: ENUM_STOCK_STATUS_CODE_ERROR.STOCK_USED_ERROR,
                message: 'stock.error.used',
            });
        }
        return true;
    }
}
