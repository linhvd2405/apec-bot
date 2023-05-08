"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockListSerialization = void 0;
const swagger_1 = require("@nestjs/swagger");
const stock_get_serialization_1 = require("./stock.get.serialization");
class StockListSerialization extends (0, swagger_1.PartialType)(stock_get_serialization_1.StockGetSerialization) {
}
exports.StockListSerialization = StockListSerialization;
//# sourceMappingURL=stock.list.serialization.js.map