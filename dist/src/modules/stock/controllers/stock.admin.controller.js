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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockAdminController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const pagination_service_1 = require("../../../common/pagination/services/pagination.service");
const response_decorator_1 = require("../../../common/response/decorators/response.decorator");
const response_id_serialization_1 = require("../../../common/response/serializations/response.id.serialization");
const error_status_code_constant_1 = require("../../../common/error/constants/error.status-code.constant");
const stock_decorator_1 = require("../decorators/stock.decorator");
const stock_create_dto_1 = require("../dtos/stock.create.dto");
const stock_service_1 = require("../services/stock.service");
const stock_list_dto_1 = require("../dtos/stock.list.dto");
const stock_doc_constant_1 = require("../constants/stock.doc.constant");
const stock_update_dto_1 = require("../dtos/stock.update.dto");
const stock_get_serialization_1 = require("../serializations/stock.get.serialization");
let StockAdminController = class StockAdminController {
    constructor(paginationService, stockService) {
        this.paginationService = paginationService;
        this.stockService = stockService;
    }
    async list({ page, perPage, sort, search, availableSort, availableSearch, }) {
        const skip = await this.paginationService.skip(page, perPage);
        const find = {
            ...search,
        };
        const stocks = await this.stockService.findAll(find, {
            skip: skip,
            limit: perPage,
            sort,
        });
        const totalData = await this.stockService.getTotal({});
        const totalPage = await this.paginationService.totalPage(totalData, perPage);
        return {
            totalData,
            totalPage,
            currentPage: page,
            perPage,
            availableSearch,
            availableSort,
            data: stocks,
        };
    }
    async getStock(_id) {
        const stock = await this.stockService.findOneById(_id);
        console.log({ stock });
        return {
            data: stock,
        };
    }
    async createStock(stockCreateDto) {
        const exist = await this.stockService.exists(stockCreateDto.stockCode);
        if (exist) {
        }
        try {
            const create = await this.stockService.create(stockCreateDto);
            this.stockService.screenshot(create);
            return {
                _id: create._id,
            };
        }
        catch (err) {
            throw new common_1.InternalServerErrorException({
                statusCode: error_status_code_constant_1.ENUM_ERROR_STATUS_CODE_ERROR.ERROR_UNKNOWN,
                message: 'http.serverError.internalServerError',
                error: err.message,
            });
        }
    }
    async update(stock, { status, stockCode, nameCompany, exchangeCode, rating, industry, refPrice, liquidity, shortTrend, targetPrice, cutlossPrice, trandingDate, overview, marketCapital, sumVol10d, outstandingShares, eps, pe, de, roe, netRev, netInc, debt, loan, cfi, cfo, cff, stockCodes, reportDate, adx, rsi, macd, }) {
        const check = await this.stockService.exists(stockCode);
        if (check) {
        }
        try {
            await this.stockService.update(stock._id, {
                status,
                stockCode,
                nameCompany,
                exchangeCode,
                rating,
                industry,
                refPrice,
                liquidity,
                shortTrend,
                targetPrice,
                cutlossPrice,
                trandingDate,
                overview,
                marketCapital,
                sumVol10d,
                outstandingShares,
                eps,
                pe,
                de,
                roe,
                netRev,
                netInc,
                debt,
                loan,
                cfi,
                cfo,
                cff,
                stockCodes,
                reportDate,
                adx,
                rsi,
                macd,
            });
        }
        catch (err) {
            throw new common_1.InternalServerErrorException({
                statusCode: error_status_code_constant_1.ENUM_ERROR_STATUS_CODE_ERROR.ERROR_UNKNOWN,
                message: 'http.serverError.internalServerError',
                error: err.message,
            });
        }
        return {
            _id: stock._id,
        };
    }
    async delete(stock) {
        try {
            await this.stockService.deleteOneById(stock._id);
        }
        catch (err) {
            throw new common_1.InternalServerErrorException({
                statusCode: error_status_code_constant_1.ENUM_ERROR_STATUS_CODE_ERROR.ERROR_UNKNOWN,
                message: 'http.serverError.internalServerError',
                error: err.message,
            });
        }
        return;
    }
    async inactive(stock) {
        try {
            await this.stockService.inactive(stock._id);
        }
        catch (err) {
            throw new common_1.InternalServerErrorException({
                statusCode: error_status_code_constant_1.ENUM_ERROR_STATUS_CODE_ERROR.ERROR_UNKNOWN,
                message: 'http.serverError.internalServerError',
                error: err.message,
            });
        }
        return;
    }
    async active(stock) {
        try {
            await this.stockService.active(stock._id);
        }
        catch (err) {
            throw new common_1.InternalServerErrorException({
                statusCode: error_status_code_constant_1.ENUM_ERROR_STATUS_CODE_ERROR.ERROR_UNKNOWN,
                message: 'http.serverError.internalServerError',
                error: err.message,
            });
        }
        return;
    }
};
__decorate([
    (0, response_decorator_1.ResponsePaging)('stock.list', {}),
    (0, common_1.Get)('/list'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [stock_list_dto_1.StockListDto]),
    __metadata("design:returntype", Promise)
], StockAdminController.prototype, "list", null);
__decorate([
    (0, response_decorator_1.Response)('stock.get', {
        classSerialization: stock_get_serialization_1.StockGetSerialization,
        doc: { params: stock_doc_constant_1.StockDocParamsGet },
    }),
    (0, common_1.Get)(':_id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StockAdminController.prototype, "getStock", null);
__decorate([
    (0, response_decorator_1.Response)('stock.create', {
        classSerialization: response_id_serialization_1.ResponseIdSerialization,
        doc: {
            httpStatus: common_1.HttpStatus.CREATED,
        },
    }),
    (0, common_1.Post)('/create'),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [stock_create_dto_1.StockCreateDto]),
    __metadata("design:returntype", Promise)
], StockAdminController.prototype, "createStock", null);
__decorate([
    (0, response_decorator_1.Response)('stock.update', {
        classSerialization: response_id_serialization_1.ResponseIdSerialization,
        doc: { params: stock_doc_constant_1.StockDocParamsGet },
    }),
    (0, common_1.Put)('/update/:stock'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, stock_decorator_1.GetStock)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, stock_update_dto_1.StockUpdateDto]),
    __metadata("design:returntype", Promise)
], StockAdminController.prototype, "update", null);
__decorate([
    (0, response_decorator_1.Response)('stock.delete', { doc: { params: stock_doc_constant_1.StockDocParamsGet } }),
    (0, common_1.Delete)('/delete/:stock'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, stock_decorator_1.GetStock)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StockAdminController.prototype, "delete", null);
__decorate([
    (0, response_decorator_1.Response)('stock.inactive', { doc: { params: stock_doc_constant_1.StockDocParamsGet } }),
    (0, common_1.Patch)('/update/:stock/inactive'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, stock_decorator_1.GetStock)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StockAdminController.prototype, "inactive", null);
__decorate([
    (0, response_decorator_1.Response)('stock.active', { doc: { params: stock_doc_constant_1.StockDocParamsGet } }),
    (0, common_1.Patch)('/update/:stock/active'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, stock_decorator_1.GetStock)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StockAdminController.prototype, "active", null);
StockAdminController = __decorate([
    (0, swagger_1.ApiTags)('modules.admin.stock'),
    (0, common_1.Controller)({
        version: '1',
        path: '/stock',
    }),
    __metadata("design:paramtypes", [pagination_service_1.PaginationService,
        stock_service_1.StockService])
], StockAdminController);
exports.StockAdminController = StockAdminController;
//# sourceMappingURL=stock.admin.controller.js.map