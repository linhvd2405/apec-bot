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
exports.StockListDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const pagination_decorator_1 = require("../../../common/pagination/decorators/pagination.decorator");
const stock_list_constant_1 = require("../constants/stock.list.constant");
class StockListDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { search: { required: true, type: () => Object }, page: { required: true, type: () => Number }, perPage: { required: true, type: () => Number }, sort: { required: true, type: () => Object } };
    }
}
__decorate([
    (0, pagination_decorator_1.PaginationSearch)(stock_list_constant_1.STOCK_DEFAULT_AVAILABLE_SEARCH),
    __metadata("design:type", Object)
], StockListDto.prototype, "search", void 0);
__decorate([
    (0, swagger_1.ApiHideProperty)(),
    (0, pagination_decorator_1.PaginationAvailableSearch)(stock_list_constant_1.STOCK_DEFAULT_AVAILABLE_SEARCH),
    __metadata("design:type", Array)
], StockListDto.prototype, "availableSearch", void 0);
__decorate([
    (0, pagination_decorator_1.PaginationPage)(stock_list_constant_1.STOCK_DEFAULT_PAGE),
    __metadata("design:type", Number)
], StockListDto.prototype, "page", void 0);
__decorate([
    (0, pagination_decorator_1.PaginationPerPage)(stock_list_constant_1.STOCK_DEFAULT_PER_PAGE),
    __metadata("design:type", Number)
], StockListDto.prototype, "perPage", void 0);
__decorate([
    (0, pagination_decorator_1.PaginationSort)(stock_list_constant_1.STOCK_DEFAULT_SORT, stock_list_constant_1.STOCK_DEFAULT_AVAILABLE_SORT),
    __metadata("design:type", Object)
], StockListDto.prototype, "sort", void 0);
__decorate([
    (0, swagger_1.ApiHideProperty)(),
    (0, pagination_decorator_1.PaginationAvailableSort)(stock_list_constant_1.STOCK_DEFAULT_AVAILABLE_SORT),
    __metadata("design:type", Array)
], StockListDto.prototype, "availableSort", void 0);
exports.StockListDto = StockListDto;
//# sourceMappingURL=stock.list.dto.js.map