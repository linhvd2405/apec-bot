"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockUpdateInactiveGuard = exports.StockUpdateActiveGuard = exports.StockDeleteGuard = exports.StockUpdateGuard = exports.StockGetGuard = void 0;
const common_1 = require("@nestjs/common");
const stock_constant_1 = require("../constants/stock.constant");
const stock_active_guard_1 = require("../guards/stock.active.guard");
const stock_not_found_guard_1 = require("../guards/stock.not-found.guard");
const stock_put_to_request_guard_1 = require("../guards/stock.put-to-request.guard");
const stock_used_guard_1 = require("../guards/stock.used.guard");
function StockGetGuard() {
    return (0, common_1.applyDecorators)((0, common_1.UseGuards)(stock_put_to_request_guard_1.StockPutToRequestGuard, stock_not_found_guard_1.StockNotFoundGuard));
}
exports.StockGetGuard = StockGetGuard;
function StockUpdateGuard() {
    return (0, common_1.applyDecorators)((0, common_1.UseGuards)(stock_put_to_request_guard_1.StockPutToRequestGuard, stock_not_found_guard_1.StockNotFoundGuard, stock_active_guard_1.StockActiveGuard, stock_used_guard_1.StockUsedGuard), (0, common_1.SetMetadata)(stock_constant_1.STOCK_ACTIVE_META_KEY, [true]));
}
exports.StockUpdateGuard = StockUpdateGuard;
function StockDeleteGuard() {
    return (0, common_1.applyDecorators)((0, common_1.UseGuards)(stock_put_to_request_guard_1.StockPutToRequestGuard, stock_not_found_guard_1.StockNotFoundGuard, stock_active_guard_1.StockActiveGuard, stock_used_guard_1.StockUsedGuard), (0, common_1.SetMetadata)(stock_constant_1.STOCK_ACTIVE_META_KEY, [true]));
}
exports.StockDeleteGuard = StockDeleteGuard;
function StockUpdateActiveGuard() {
    return (0, common_1.applyDecorators)((0, common_1.UseGuards)(stock_put_to_request_guard_1.StockPutToRequestGuard, stock_not_found_guard_1.StockNotFoundGuard, stock_active_guard_1.StockActiveGuard), (0, common_1.SetMetadata)(stock_constant_1.STOCK_ACTIVE_META_KEY, [false]));
}
exports.StockUpdateActiveGuard = StockUpdateActiveGuard;
function StockUpdateInactiveGuard() {
    return (0, common_1.applyDecorators)((0, common_1.UseGuards)(stock_put_to_request_guard_1.StockPutToRequestGuard, stock_not_found_guard_1.StockNotFoundGuard, stock_active_guard_1.StockActiveGuard), (0, common_1.SetMetadata)(stock_constant_1.STOCK_ACTIVE_META_KEY, [true]));
}
exports.StockUpdateInactiveGuard = StockUpdateInactiveGuard;
//# sourceMappingURL=stock.admin.decorator.js.map