"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockActiveGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const stock_constant_1 = require("../constants/stock.constant");
const stock_status_code_constant_1 = require("../constants/stock.status-code.constant");
let StockActiveGuard = class StockActiveGuard {
    constructor(reflector) {
        this.reflector = reflector;
    }
    async canActivate(context) {
        const required = this.reflector.getAllAndOverride(stock_constant_1.STOCK_ACTIVE_META_KEY, [context.getHandler(), context.getClass()]);
        if (!required) {
            return true;
        }
        const { __stock } = context.switchToHttp().getRequest();
        if (!required.includes(__stock.isActive)) {
            throw new common_1.BadRequestException({
                statusCode: stock_status_code_constant_1.ENUM_STOCK_STATUS_CODE_ERROR.STOCK_ACTIVE_ERROR,
                message: 'stock.error.active',
            });
        }
        return true;
    }
};
StockActiveGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector])
], StockActiveGuard);
exports.StockActiveGuard = StockActiveGuard;
//# sourceMappingURL=stock.active.guard.js.map