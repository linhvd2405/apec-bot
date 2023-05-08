"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockNotFoundGuard = void 0;
const common_1 = require("@nestjs/common");
const stock_status_code_constant_1 = require("../constants/stock.status-code.constant");
let StockNotFoundGuard = class StockNotFoundGuard {
    async canActivate(context) {
        const { __stock } = context.switchToHttp().getRequest();
        if (!__stock) {
            throw new common_1.NotFoundException({
                statusCode: stock_status_code_constant_1.ENUM_STOCK_STATUS_CODE_ERROR.STOCK_NOT_FOUND_ERROR,
                message: 'stock.error.notFound',
            });
        }
        return true;
    }
};
StockNotFoundGuard = __decorate([
    (0, common_1.Injectable)()
], StockNotFoundGuard);
exports.StockNotFoundGuard = StockNotFoundGuard;
//# sourceMappingURL=stock.not-found.guard.js.map