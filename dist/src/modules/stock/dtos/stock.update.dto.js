"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockUpdateDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const stock_create_dto_1 = require("./stock.create.dto");
class StockUpdateDto extends (0, swagger_1.PartialType)(stock_create_dto_1.StockCreateDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.StockUpdateDto = StockUpdateDto;
//# sourceMappingURL=stock.update.dto.js.map